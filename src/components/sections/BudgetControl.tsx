// 오피스디포 B2B몰 "예산관리" 화면을 단순화한 예시 목업 + 도입 효과 3가지
const BUDGET = 1_000_000;
const months = [
  { m: "7월", used: 812_400 },
  { m: "8월", used: 954_100 },
  { m: "9월", used: 688_300 },
  { m: "10월", used: 997_500 },
  { m: "11월", used: 731_900 },
  { m: "12월", used: 0 },
];
const won = (v: number) => v.toLocaleString("ko-KR");

const effects = [
  {
    no: "01",
    title: "비용이 한도 안에서 통제됩니다",
    desc: "팀별로 월 예산을 정해 두면, 한도를 넘는 주문은 아예 진행되지 않습니다. 월말에 카드 명세서를 보고 놀랄 일이 없습니다.",
  },
  {
    no: "02",
    title: "비싼 제품을 고르지 않게 됩니다",
    desc: "누가 어떤 제품을 얼마에 샀는지 관리자가 바로 봅니다. 내역이 보인다는 것만으로 같은 용도에 굳이 비싼 제품을 고르지 않게 됩니다.",
  },
  {
    no: "03",
    title: "개인 물품 구매를 막습니다",
    desc: "업무용 품목만 노출하고 주문 내역이 모두 남기 때문에, 법인카드로 개인 물품이 섞여 결제되는 일을 구조적으로 막습니다.",
  },
];

function BudgetMock() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/10">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3">
        <p className="flex items-center gap-2 text-sm font-black">
          <span className="h-4 w-1 bg-ink" /> 예산관리
        </p>
        <div className="flex gap-1.5 text-[11px]">
          <span className="rounded border border-line px-2 py-1">2026</span>
          <span className="rounded border border-brand bg-brand-soft px-2 py-1 font-bold text-brand">경영지원팀 ▾</span>
          <span className="hidden rounded border border-line px-2 py-1 sm:inline">업무용구매</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-center text-[12px]">
          <thead className="bg-paper text-muted">
            <tr>
              <th className="px-2 py-2 font-medium">월</th>
              {months.map((x) => (
                <th key={x.m} className="px-2 py-2 font-bold text-ink">
                  {x.m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-line">
              <th className="px-2 py-2 font-medium text-muted">예산</th>
              {months.map((x) => (
                <td key={x.m} className="px-1 py-2">
                  <span className="inline-block rounded border border-line px-1.5 py-0.5">{won(BUDGET)}</span>
                </td>
              ))}
            </tr>
            <tr className="border-t border-line">
              <th className="px-2 py-2 font-medium text-muted">구매액</th>
              {months.map((x) => (
                <td key={x.m} className="px-1 py-2 font-medium">
                  {won(x.used)}
                </td>
              ))}
            </tr>
            <tr className="border-t border-line bg-paper/60">
              <th className="px-2 py-2 font-medium text-muted">잔액</th>
              {months.map((x) => (
                <td key={x.m} className="px-1 py-2 font-bold text-[#2563eb]">
                  {won(BUDGET - x.used)}
                </td>
              ))}
            </tr>
            <tr className="border-t border-line">
              <th className="px-2 py-2 font-medium text-muted">사용률</th>
              {months.map((x) => {
                const pct = Math.round((x.used / BUDGET) * 100);
                return (
                  <td key={x.m} className="px-2 py-2">
                    <div className="h-1.5 overflow-hidden rounded-full bg-line">
                      <div className={`h-full ${pct >= 95 ? "bg-brand" : "bg-emerald-500"}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="mt-0.5 block text-[10px] text-muted">{pct}%</span>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-start gap-2 border-t border-line bg-brand-soft px-4 py-3 text-[12px] text-brand">
        <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-black text-white">!</span>
        <span>
          <b>10월 잔액 2,500원</b> · 한도를 넘는 주문은 접수되지 않습니다.
        </span>
      </div>
    </div>
  );
}

export default function BudgetControl() {
  return (
    <div className="mt-16 rounded-3xl bg-white p-6 ring-1 ring-line sm:p-10">
      <div className="max-w-3xl">
        <p className="text-sm font-bold text-brand">예산관리 기능</p>
        <h3 className="mt-2 text-2xl font-black leading-snug tracking-tight sm:text-3xl">
          법인카드는 ‘결제 수단’일 뿐,
          <br />
          <span className="text-brand">비용을 관리해 주지 않습니다</span>
        </h3>
        <p className="mt-4 leading-relaxed text-muted sm:text-lg">
          오픈마켓은 싸게 살 수 있지만, 법인카드로 무엇을 몇 개 사든 제한이 없습니다. 오피스디포 B2B몰의
          <strong className="text-ink"> 예산관리</strong>는 팀별 한도를 정하고, 그 안에서 필요한 제품만 사도록 만듭니다.
        </p>
      </div>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        <figure className="min-w-0">
          <BudgetMock />
          <figcaption className="mt-3 text-center text-xs text-muted">* 팀별 월 예산 100만원 기준의 예시 화면입니다.</figcaption>
        </figure>
        <ol className="space-y-4">
          {effects.map((e) => (
            <li key={e.no} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-black text-white">{e.no}</span>
              <div>
                <p className="text-lg font-black">{e.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{e.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
