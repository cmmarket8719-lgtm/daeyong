import { CheckIcon } from "../icons";

const before = [
  "각자 필요한 것을, 원하는 곳에서 구매",
  "여러 사이트 가격 비교로 시간 소모",
  "중복 구매·불필요한 구매 발생",
  "부서별 예산 관리가 어려워 비용 초과",
];
const after = [
  "직원 1인당 월 예산 설정 (예: 15,000원)",
  "팀별 예산 한도 안에서만 구매",
  "누가 무엇을 샀는지 구매 내역 한눈에",
  "승인 결재로 계획된 구매만 진행",
];

function Bars({ budget, actual, tone }: { budget: number; actual: number; tone: "bad" | "good" }) {
  const max = 300000;
  const h = (v: number) => `${Math.round((v / max) * 100)}%`;
  const fmt = (v: number) => v.toLocaleString("ko-KR") + "원";
  return (
    <div className="flex h-44 items-end justify-center gap-6 border-b border-line pb-px sm:h-52">
      <div className="flex h-full w-20 flex-col items-center justify-end sm:w-24">
        <span className="mb-1 text-xs text-muted">예산</span>
        <div className="flex w-full items-center justify-center rounded-t-md bg-ink/25 text-xs font-bold text-ink" style={{ height: h(budget) }}>
          {fmt(budget)}
        </div>
      </div>
      <div className="flex h-full w-20 flex-col items-center justify-end sm:w-24">
        <span className={`mb-1 text-xs font-bold ${tone === "bad" ? "text-brand" : "text-emerald-700"}`}>실제 사용</span>
        <div
          className={`flex w-full items-center justify-center rounded-t-md px-1 text-center text-xs font-bold text-white ${tone === "bad" ? "bg-brand" : "bg-emerald-600"}`}
          style={{ height: h(actual) }}
        >
          {tone === "bad" ? "25~30만원" : "15만원 이내"}
        </div>
      </div>
    </div>
  );
}

export default function Benefit() {
  return (
    <section id="benefit" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-brand">WHY B2B PURCHASING</p>
          <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-[42px] sm:leading-tight">
            사무용품 비용 절감,
            <br />
            최저가 검색보다 <span className="relative whitespace-nowrap text-brand">‘구매 방식’<span aria-hidden className="absolute inset-x-0 -bottom-1 h-1.5 rounded-full bg-sun" /></span>이 먼저입니다
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            물건 하나하나를 싸게 사는 것보다, 누가 얼마나 사는지 <strong className="text-ink">기준을 정하고 관리</strong>할 때
            회사 전체 비용이 줄어듭니다.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-2 lg:gap-10">
          {/* Before */}
          <div className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
            <p className="inline-block rounded-full bg-ink/80 px-4 py-1.5 text-sm font-bold text-white">최저가 검색으로 각자 구매할 때</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <ul className="space-y-3">
                {before.map((t) => (
                  <li key={t} className="flex gap-2 text-[15px] leading-snug">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/10 text-xs font-black text-ink/60">×</span>
                    {t}
                  </li>
                ))}
              </ul>
              <Bars budget={150000} actual={275000} tone="bad" />
            </div>
            <p className="mt-6 rounded-lg border border-brand/40 bg-brand-soft px-4 py-3 text-center font-bold text-brand">
              예산보다 월 10만원 이상 초과
            </p>
          </div>

          <span aria-hidden className="absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-lg font-black text-white shadow-lg lg:flex">
            VS
          </span>

          {/* After */}
          <div className="rounded-2xl bg-white p-6 ring-2 ring-brand sm:p-8">
            <p className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">오피스디포 B2B몰 + 예산 관리</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <ul className="space-y-3">
                {after.map((t) => (
                  <li key={t} className="flex gap-2 text-[15px] leading-snug">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {t}
                  </li>
                ))}
              </ul>
              <Bars budget={150000} actual={148000} tone="good" />
            </div>
            <p className="mt-6 rounded-lg bg-ink px-4 py-3 text-center font-bold text-white">
              예산 안에서 정확하게, 불필요한 지출 <span className="text-sun">ZERO</span>
            </p>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          * 직원 10명, 1인당 월 15,000원 예산 기준의 이해를 돕기 위한 예시입니다. 실제 절감액은 비교 견적으로 안내드립니다.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-ink px-6 py-8 text-center text-white sm:flex-row sm:justify-between sm:px-10 sm:text-left">
          <p className="text-xl font-black leading-snug sm:text-2xl">
            비용 절감의 핵심은 <span className="text-sun">‘기준’</span>과 <span className="text-sun">‘관리’</span>입니다.
          </p>
          <p className="text-white/80">구매 방식을 바꾸면, 회사 비용은 확실히 줄어듭니다.</p>
        </div>
      </div>
    </section>
  );
}
