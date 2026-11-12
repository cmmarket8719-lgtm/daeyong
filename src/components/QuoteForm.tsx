"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendQuote, type QuoteState } from "@/app/actions";
import { priceBasis } from "@/lib/prices";
import { site } from "@/lib/site";
import { CheckIcon } from "./icons";

const initialState: QuoteState = { ok: false, message: "" };

const itemOptions = ["식음료·간식", "생활·위생용품", "사무용품", "복사지·토너", "MRO·안전용품", "출력·제작물", "판촉물", "렌탈", "기업 전용몰"];
const sizeOptions = ["10명 미만", "10~49명", "50~199명", "200명 이상"];

const input =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15";

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-brand">{error}</span>}
    </label>
  );
}

export default function QuoteForm() {
  const [state, formAction, pending] = useActionState(sendQuote, initialState);
  const pricelistRef = useRef<HTMLInputElement>(null);

  // "단가표 받기" 버튼(#quote-pricelist)으로 들어오면 단가표 요청을 미리 체크
  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#quote-pricelist" && pricelistRef.current) pricelistRef.current.checked = true;
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  if (state.ok) {
    return (
      <div className="self-start rounded-2xl bg-white p-8 text-center text-ink shadow-xl sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <p className="mt-5 text-xl font-black">{state.message}</p>
        <p className="mt-2 text-muted">보통 영업일 기준 하루 안에 연락드립니다.</p>
      </div>
    );
  }

  const e = state.errors ?? {};
  const v = state.values ?? {};
  const val = (k: string) => (typeof v[k] === "string" ? (v[k] as string) : "");
  const picked = Array.isArray(v.items) ? v.items : [];

  return (
    <form action={formAction} className="relative rounded-2xl bg-white p-6 text-left text-ink shadow-xl sm:p-10" noValidate>
      <span id="quote-pricelist" className="absolute -top-4" aria-hidden />
      <label className="mb-6 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-sun bg-cream px-4 py-3">
        <input
          ref={pricelistRef}
          type="checkbox"
          name="pricelist"
          defaultChecked={val("pricelist") === "on"}
          className="h-5 w-5 shrink-0 accent-[var(--color-brand)]"
        />
        <span className="text-sm font-bold sm:text-base">
          자주 사는 {priceBasis.fullListCount}개 품목 단가표도 받아볼게요
        </span>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="회사명" required error={e.company}>
          <input name="company" defaultValue={val("company")} className={input} autoComplete="organization" required />
        </Field>
        <Field label="담당자 성함" required error={e.name}>
          <input name="name" defaultValue={val("name")} className={input} autoComplete="name" required />
        </Field>
        <Field label="연락처" required error={e.phone}>
          <input name="phone" defaultValue={val("phone")} type="tel" inputMode="tel" className={input} placeholder="010-0000-0000" autoComplete="tel" required />
        </Field>
        <Field label="이메일 (견적서 받으실 주소)" error={e.email}>
          <input name="email" defaultValue={val("email")} type="email" className={input} autoComplete="email" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="배송지 주소">
            <input name="address" defaultValue={val("address")} className={input} placeholder="예) 서울시 강남구 ○○로 00, 0층" autoComplete="street-address" />
          </Field>
        </div>
        <Field label="임직원 수">
          <select key={val("size")} name="size" className={input} defaultValue={val("size")}>
            <option value="">선택해 주세요</option>
            {sizeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <fieldset>
          <legend className="text-sm font-bold">관심 품목</legend>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {itemOptions.map((o) => (
              <label key={o} className="cursor-pointer">
                <input type="checkbox" name="items" value={o} defaultChecked={picked.includes(o)} className="peer sr-only" />
                <span className="inline-block rounded-full border border-line px-3 py-1.5 text-sm transition peer-checked:border-brand peer-checked:bg-brand-soft peer-checked:font-bold peer-checked:text-brand peer-focus-visible:ring-2 peer-focus-visible:ring-brand/30">
                  {o}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="sm:col-span-2">
          <Field label="요청사항">
            <textarea
              name="message"
              defaultValue={val("message")}
              rows={5}
              className={input}
              placeholder={"자주 사는 품목, 월 사용량, 현재 거래처의 불편한 점 등을 자유롭게 적어 주세요.\n예) A4 복사지 월 20박스, 토너 월 5개, 탕비실 커피·생수 정기 공급 희망"}
            />
          </Field>
        </div>
      </div>

      {/* 봇 차단용 숨김 필드 */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 rounded-lg bg-paper p-4 text-sm leading-relaxed text-muted">
        <label className="flex cursor-pointer items-start gap-2 font-bold text-ink">
          <input type="checkbox" name="consent" defaultChecked={val("consent") === "on"} className="mt-1 h-4 w-4 accent-[var(--color-brand)]" />
          개인정보 수집·이용에 동의합니다 (필수)
        </label>
        <p className="mt-2 pl-6">
          수집 항목: 회사명, 담당자 성함, 연락처, 이메일, 주소 · 목적: 견적 안내 및 거래 상담 · 보유 기간: 상담 완료 후
          1년 ({site.agentName}){" "}
          <a href="/privacy" target="_blank" rel="noopener" className="font-bold text-ink underline underline-offset-2">
            개인정보처리방침 보기
          </a>
        </p>
        {e.consent && <p className="mt-1 pl-6 text-brand">{e.consent}</p>}
      </div>

      {state.message && !state.ok && (
        <p role="alert" className="mt-4 text-center font-bold text-brand">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-lg bg-brand py-4 text-lg font-bold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {pending ? "보내는 중…" : "무료 견적 의뢰하기"}
      </button>
    </form>
  );
}
