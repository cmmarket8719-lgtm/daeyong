import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { approvalFlow, features, mallBuildSteps, type Feature } from "@/lib/content";

/* 기능별 오른쪽 그림: 실제 화면 캡처가 있으면 사진, 없으면 간단한 화면 목업 */

function Frame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(10,31,77,.35)] ring-1 ring-line">
      <div className="flex items-center justify-between bg-navy px-4 py-2.5 text-xs font-bold text-white">
        <span>{title}</span>
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function ApprovalVisual() {
  return (
    <Frame title="구매 승인 흐름">
      <ol className="grid gap-2">
        {approvalFlow.map((s, i) => (
          <li key={s.step} className="flex items-center gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white ${
                i === approvalFlow.length - 1 ? "bg-brand" : "bg-blue"
              }`}
            >
              {i + 1}
            </span>
            <div className="flex-1 rounded-xl bg-paper px-4 py-2.5">
              <p className="text-sm font-bold">{s.step}</p>
              <p className="text-xs text-muted">{s.sub}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-xl border border-dashed border-blue/40 bg-blue-soft p-3 text-xs">
        <p className="font-bold text-blue-dark">승인메모</p>
        <p className="mt-1 text-muted">“3층 회의실 프린터 토너 교체용 2개 요청드립니다.”</p>
        <div className="mt-2 flex gap-2">
          <span className="rounded-md bg-blue px-3 py-1 font-bold text-white">승인</span>
          <span className="rounded-md bg-white px-3 py-1 font-bold text-muted ring-1 ring-line">반려</span>
        </div>
      </div>
    </Frame>
  );
}

function BudgetVisual() {
  const rows = [
    { dept: "경영지원팀", used: 82, budget: "50만원" },
    { dept: "영업1팀", used: 45, budget: "50만원" },
    { dept: "연구소", used: 100, budget: "80만원" },
    { dept: "생산관리팀", used: 23, budget: "60만원" },
  ];
  return (
    <Frame title="부서별 예산 현황 · 4분기">
      <ul className="space-y-3.5">
        {rows.map((r) => (
          <li key={r.dept}>
            <div className="flex justify-between text-sm">
              <span className="font-bold">{r.dept}</span>
              <span className={r.used >= 100 ? "font-bold text-brand" : "text-muted"}>
                {r.used >= 100 ? "예산 소진 · 추가 승인 필요" : `${r.used}% 사용 / ${r.budget}`}
              </span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-paper">
              <div className={`h-full rounded-full ${r.used >= 100 ? "bg-brand" : "bg-blue"}`} style={{ width: `${Math.min(r.used, 100)}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function AccountVisual() {
  const rows = [
    ["경영지원팀", "kim.hr", "총무팀장"],
    ["영업1팀", "sales01", "영업본부장"],
    ["연구소", "lab_park", "연구소장"],
  ];
  return (
    <Frame title="회원 · 부서 관리">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="text-muted">
          <tr className="border-b border-line">
            <th className="py-2 font-medium">부서</th>
            <th className="py-2 font-medium">ID</th>
            <th className="py-2 font-medium">승인자</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[1]} className="border-b border-line last:border-0">
              <td className="py-2.5 font-bold">{r[0]}</td>
              <td className="py-2.5 text-muted">{r[1]}</td>
              <td className="py-2.5">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
        <span className="rounded-md bg-blue px-3 py-1.5 text-white">+ 계정 생성</span>
        <span className="rounded-md bg-paper px-3 py-1.5">비밀번호 리셋</span>
        <span className="rounded-md bg-paper px-3 py-1.5">승인자 변경</span>
      </div>
    </Frame>
  );
}

function SettleVisual() {
  const rows = [
    ["경영지원팀", "1,284,500"],
    ["영업1팀", "432,900"],
    ["연구소", "801,200"],
  ];
  return (
    <Frame title="11월 정산 내역 (배송완료 기준)">
      <ul className="divide-y divide-line text-sm">
        {rows.map((r) => (
          <li key={r[0]} className="flex justify-between py-2.5">
            <span className="font-bold">{r[0]}</span>
            <span className="tabular-nums">{r[1]}원</span>
          </li>
        ))}
        <li className="flex justify-between py-2.5 font-black text-blue-dark">
          <span>합계</span>
          <span className="tabular-nums">2,518,600원</span>
        </li>
      </ul>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-bold">
        <span className="rounded-md bg-[#1e7e45] px-3 py-2 text-center text-white">엑셀 다운로드</span>
        <span className="rounded-md bg-brand px-3 py-2 text-center text-white">세금계산서 발행</span>
      </div>
    </Frame>
  );
}

function AgencyVisual() {
  return (
    <Frame title="구매대행 신청">
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-xs font-bold text-muted">상품 링크</p>
          <p className="mt-1 truncate rounded-lg bg-paper px-3 py-2 text-muted">https://www.coupang.com/vp/products/…</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs font-bold text-muted">수량</p>
            <p className="mt-1 rounded-lg bg-paper px-3 py-2">10개</p>
          </div>
          <div>
            <p className="text-xs font-bold text-muted">정산</p>
            <p className="mt-1 rounded-lg bg-blue-soft px-3 py-2 font-bold text-blue-dark">MRO 월 정산 포함</p>
          </div>
        </div>
        <p className="rounded-lg bg-brand px-3 py-2.5 text-center font-bold text-white">구매대행 요청</p>
      </div>
    </Frame>
  );
}

function PrintVisual() {
  return (
    <Frame title="명함 신청">
      <div className="mx-auto aspect-[9/5] max-w-[300px] rounded-lg bg-white p-4 shadow-md ring-1 ring-line">
        <div className="h-1.5 w-10 bg-brand" />
        <p className="mt-3 text-base font-black">홍 길 동</p>
        <p className="text-xs text-muted">경영지원팀 · 대리</p>
        <p className="mt-4 text-[11px] leading-relaxed text-muted">
          M. 010-0000-0000
          <br />
          E. gildong@company.co.kr
        </p>
      </div>
      <ol className="mt-4 grid grid-cols-4 gap-1 text-center text-[11px] font-bold sm:text-xs">
        {["신청", "승인 +1", "제작 +2", "배송"].map((s, i) => (
          <li key={s} className={`rounded-md py-1.5 ${i === 3 ? "bg-brand text-white" : "bg-blue-soft text-blue-dark"}`}>
            {s}
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function PhotoVisual({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_20px_50px_-20px_rgba(10,31,77,.35)] ring-1 ring-line">
      <Image src={src} alt={alt} width={w} height={h} sizes="(min-width: 1024px) 480px, 100vw" className="h-auto w-full rounded-xl" />
    </div>
  );
}

function CustomVisual() {
  return (
    <div>
      <PhotoVisual src="/photos/mall-main.webp" alt="고객사 맞춤 MRO몰 화면 예시" w={1165} h={969} />
      <ol className="mt-4 flex flex-wrap items-center gap-1.5 text-xs font-bold">
        {mallBuildSteps.map((s, i) => (
          <li key={s} className="flex items-center gap-1.5">
            <span className={`rounded-full px-3 py-1.5 ${i === 2 ? "bg-brand text-white" : "bg-white text-blue-dark ring-1 ring-blue/25"}`}>{s}</span>
            {i < mallBuildSteps.length - 1 && <ArrowIcon className="h-3.5 w-3.5 text-blue/50" />}
          </li>
        ))}
      </ol>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  approval: <ApprovalVisual />,
  budget: <BudgetVisual />,
  account: <AccountVisual />,
  settle: <SettleVisual />,
  pay: <PhotoVisual src="/photos/card-payment.webp" alt="법인카드 간편결제 화면" w={1000} h={491} />,
  agency: <AgencyVisual />,
  print: <PrintVisual />,
  custom: <CustomVisual />,
};

function FeatureRow({ f, i }: { f: Feature; i: number }) {
  const flip = i % 2 === 1;
  return (
    <article id={`f-${f.id}`} className="grid scroll-mt-32 items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? "lg:order-2" : ""}>
        <p className="flex items-center gap-2 text-sm font-black text-blue">
          <span className="rounded-md bg-blue px-2 py-0.5 text-xs text-white">{String(i + 1).padStart(2, "0")}</span>
          {f.tag}
        </p>
        <h3 className="mt-3 text-2xl font-black leading-snug tracking-tight sm:text-3xl">{f.title}</h3>
        <p className="mt-4 leading-relaxed text-muted sm:text-lg">{f.desc}</p>
        <ul className="mt-6 space-y-2.5">
          {f.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[15px] font-medium">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                <CheckIcon className="h-3 w-3 text-brand" />
              </span>
              {p}
            </li>
          ))}
        </ul>
        {f.link && (
          <a
            href={f.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue hover:text-blue-dark"
          >
            {f.link.label} <ArrowIcon className="h-4 w-4" />
          </a>
        )}
      </div>
      <div className={flip ? "lg:order-1" : ""}>{visuals[f.id]}</div>
    </article>
  );
}

export default function Features() {
  return (
    <section id="mall" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="MRO MALL FEATURES"
          title={
            <>
              사무용품 구매부터 승인·정산까지
              <br />
              <span className="text-blue">한 곳에서 관리</span>합니다
            </>
          }
          desc="오직 우리 회사만을 위한 MRO 전용몰. 총무·구매 담당자의 반복 업무를 줄이는 기능이 기본으로 들어 있습니다."
        />

        {/* 기능 바로가기 칩 */}
        <nav aria-label="MRO몰 기능 목록" className="no-scrollbar sticky top-16 z-30 -mx-4 mt-10 overflow-x-auto bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-full sm:px-3 sm:ring-1 sm:ring-line">
          <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
            {features.map((f) => (
              <li key={f.id}>
                <a
                  href={`#f-${f.id}`}
                  className="block whitespace-nowrap rounded-full bg-paper px-4 py-2 text-sm font-bold text-ink transition hover:bg-blue hover:text-white"
                >
                  {f.tag}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="divide-y divide-line">
          {features.map((f, i) => (
            <FeatureRow key={f.id} f={f} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
