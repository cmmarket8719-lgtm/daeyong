const cards = [
  {
    no: "01",
    title: "비용 절감은 반드시 숫자로 보여드립니다",
    desc: "지금 구매 내역과 비교해 품목별 단가, 월간·연간 절감액을 견적서 한 장으로 정리해 드립니다. 비용 절감은 회사의 이익이 되고, 담당자의 업무 성과가 됩니다.",
  },
  {
    no: "02",
    title: "제안은 복잡하지 않게, 핵심 3가지만",
    desc: "긴 설명 대신 세 가지만 답합니다. 비용이 줄어드는가, 구매가 편해지는가, 관리가 쉬워지는가. 내부 보고에도 그대로 쓰실 수 있습니다.",
    points: ["비용이 줄어드는가", "구매가 편해지는가", "관리가 쉬워지는가"],
  },
  {
    no: "03",
    title: "제안 후에는 피드백을 확인합니다",
    desc: "어떤 부분이 마음에 걸리는지, 내부 검토 기준은 무엇인지 듣고 다음 제안을 맞춥니다. 좋은 영업은 말을 많이 하는 것이 아니라 담당자의 고민을 정확히 듣는 것에서 시작합니다.",
  },
  {
    no: "04",
    title: "비슷한 업종의 사례로 설명합니다",
    desc: "규모와 업종이 비슷한 회사가 어떻게 구매몰을 운영하고 어떤 품목에서 비용을 줄였는지 보여 드려, ‘우리 회사에도 맞겠다’는 판단을 돕습니다.",
  },
];

export default function Proposal() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-wide text-brand">HOW WE PROPOSE</p>
          <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-4xl">
            견적을 의뢰하시면
            <br className="sm:hidden" /> 이렇게 제안드립니다
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cards.map((c) => (
            <article key={c.no} className="flex flex-col rounded-2xl border border-line p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand text-lg font-black text-white">{c.no}</span>
                <h3 className="pt-1.5 text-lg font-black leading-snug sm:text-xl">{c.title}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{c.desc}</p>
              {c.points && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.points.map((p) => (
                    <li key={p} className="rounded-full bg-cream px-3 py-1.5 text-sm font-bold text-ink">
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
