"use server";

export type QuoteState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"company" | "name" | "phone" | "email" | "consent", string>>;
  /** 오류 시 입력값을 되돌려 주어 폼이 비워지지 않게 합니다 */
  values?: Record<string, string | string[]>;
};

const MAX = { short: 100, long: 3000 };

function clean(v: FormDataEntryValue | null, max = MAX.short) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // 스팸 봇용 숨김 필드. 사람이 채울 일이 없으므로 값이 있으면 조용히 성공 처리.
  if (clean(formData.get("website"))) return { ok: true, message: "접수되었습니다." };

  const data = {
    company: clean(formData.get("company")),
    name: clean(formData.get("name")),
    phone: clean(formData.get("phone"), 30),
    email: clean(formData.get("email")),
    address: clean(formData.get("address"), 200),
    size: clean(formData.get("size")),
    items: formData.getAll("items").map((v) => clean(v)).filter(Boolean).join(", "),
    message: clean(formData.get("message"), MAX.long),
    pricelist: formData.get("pricelist") === "on" ? "on" : "",
  };

  const errors: QuoteState["errors"] = {};
  if (!data.company) errors.company = "회사명을 입력해 주세요.";
  if (!data.name) errors.name = "담당자 성함을 입력해 주세요.";
  if (!/^[0-9+\-\s()]{8,20}$/.test(data.phone)) errors.phone = "연락 가능한 전화번호를 입력해 주세요.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "이메일 형식을 확인해 주세요.";
  if (formData.get("consent") !== "on") errors.consent = "개인정보 수집·이용에 동의해 주세요.";
  const values = { ...data, items: formData.getAll("items").map((v) => clean(v)), consent: formData.get("consent") === "on" ? "on" : "" };
  if (Object.keys(errors).length) return { ok: false, message: "입력 내용을 확인해 주세요.", errors, values };

  const rows: [string, string][] = [
    ["회사명", data.company],
    ["담당자", data.name],
    ["연락처", data.phone],
    ["이메일", data.email || "-"],
    ["배송지 주소", data.address || "-"],
    ["임직원 수", data.size || "-"],
    ["70개 품목 단가표", data.pricelist ? "요청함 ✅" : "-"],
    ["관심 품목", data.items || "-"],
    ["요청사항", data.message || "-"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2>새 견적 의뢰</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><th align="left" style="border:1px solid #ddd;background:#f7f7f8">${k}</th><td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      // 로컬 개발: 메일 설정 전에는 서버 콘솔에만 남깁니다.
      console.log("[견적 의뢰 - 메일 미설정]\n" + text);
      return { ok: true, message: "접수되었습니다. (개발 모드: 메일 대신 서버 로그에 기록됨)" };
    }
    console.error("RESEND_API_KEY / QUOTE_TO_EMAIL 환경변수가 없습니다.");
    return { ok: false, message: "일시적으로 접수가 어렵습니다. 전화로 문의해 주세요.", values };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL || "견적의뢰 <onboarding@resend.dev>",
      to: [to],
      reply_to: data.email || undefined,
      subject: `[견적 의뢰${data.pricelist ? " + 단가표" : ""}] ${data.company} · ${data.name}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("견적 메일 발송 실패", res.status, await res.text());
    return { ok: false, message: "전송 중 문제가 생겼습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.", values };
  }

  return { ok: true, message: "견적 의뢰가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다." };
}
