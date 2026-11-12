// 견적 제안 원칙 4가지. "거래 절차" 섹션 안에 붙여서 보여줍니다.
const points = [
  { no: "01", title: "비용 절감은 숫자로 보여드립니다", desc: "품목별 단가와 월간·연간 절감액을 견적서 한 장으로" },
  { no: "02", title: "핵심 3가지만 전달합니다", desc: "비용이 줄어드는가 · 구매가 편해지는가 · 관리가 쉬워지는가" },
  { no: "03", title: "제안 후 피드백을 확인합니다", desc: "내부 검토 기준을 듣고 다음 제안을 맞춥니다" },
  { no: "04", title: "비슷한 업종 사례로 설명합니다", desc: "규모·업종이 비슷한 회사의 운영 방식과 절감 품목" },
];

export function ProposalPoints() {
  return (
    <div className="mx-auto mt-14 max-w-5xl">
      <h3 className="text-center text-lg font-black sm:text-xl">견적은 이렇게 제안드립니다</h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {points.map((p) => (
          <li key={p.no} className="flex items-start gap-4 rounded-2xl border border-line p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-black text-white">{p.no}</span>
            <div>
              <p className="font-black">{p.title}</p>
              <p className="mt-1 text-sm text-muted">{p.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
