import { Container, Note, SectionHead, won } from "@/components/ui";
import CallButton from "@/components/CallButton";
import { priceCompare, quoteSteps } from "@/lib/content";

export default function PriceCompare() {
  const rows = priceCompare.rows.map((r) => ({ ...r, save: r.now - r.mro, rate: Math.round(((r.now - r.mro) / r.now) * 1000) / 10 }));

  return (
    <section id="price" className="bg-navy py-20 text-white sm:py-28">
      <Container>
        <SectionHead
          dark
          eyebrow="단가 비교"
          title={
            <>
              “온라인이 더 싸지 않나요?”
              <br />
              <span className="text-sun">같은 상품</span>으로 비교해 드립니다
            </>
          }
          desc="배송비, 묶음 단위, 규격까지 맞춰서 비교해야 정확합니다. 실제 제안 견적의 일부를 공개합니다."
        />

        <div className="mt-14 overflow-hidden rounded-lg bg-white text-ink">
          <div className="flex flex-col gap-1 border-b border-line px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div>
              <h3 className="text-lg font-black sm:text-xl">{priceCompare.title}</h3>
              <Note className="mt-1 block">실제 드린 견적 금액을 기준으로 정리했어요</Note>
            </div>
            <p className="text-xs text-muted">{priceCompare.basis}</p>
          </div>

          {/* 데스크톱 표 */}
          <table className="hidden w-full text-[15px] md:table">
            <thead className="bg-paper text-left text-sm text-muted">
              <tr>
                <th className="px-8 py-3 font-medium">품목</th>
                <th className="px-4 py-3 font-medium">상품 · 구매단위</th>
                <th className="px-4 py-3 text-right font-medium">현재 구매가</th>
                <th className="px-4 py-3 text-right font-medium">MRO 제안가</th>
                <th className="w-[26%] px-8 py-3 font-medium">절감률</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-t border-line">
                  <td className="px-8 py-4">
                    <span className="rounded-md bg-blue-soft px-2 py-1 text-xs font-bold text-blue-dark">{r.cat}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-bold">{r.name}</span>
                    <span className="ml-2 text-sm text-muted">{r.unit}</span>
                  </td>
                  <td className="px-4 py-4 text-right tabular-nums text-muted line-through decoration-muted/50">{won(r.now)}</td>
                  <td className="px-4 py-4 text-right font-black tabular-nums text-blue-dark">{won(r.mro)}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-paper">
                        <span className="block h-full rounded-full bg-brand" style={{ width: `${Math.min(r.rate * 1.6, 100)}%` }} />
                      </span>
                      <span className="w-14 text-right font-black tabular-nums text-brand">{r.rate}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 모바일 카드 */}
          <ul className="divide-y divide-line md:hidden">
            {rows.map((r) => (
              <li key={r.name} className="px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-md bg-blue-soft px-2 py-0.5 text-[11px] font-bold text-blue-dark">{r.cat}</span>
                    <p className="mt-1.5 font-bold">{r.name}</p>
                    <p className="text-xs text-muted">{r.unit}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-sm font-black text-white">-{r.rate}%</span>
                </div>
                <p className="mt-2 text-sm">
                  <span className="text-muted line-through">{won(r.now)}</span>
                  <span className="mx-2 text-muted">→</span>
                  <span className="font-black text-blue-dark">{won(r.mro)}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="grid gap-px bg-line sm:grid-cols-2">
            <div className="bg-brand-soft px-5 py-5 sm:px-8">
              <p className="text-sm font-bold text-brand">A4 75g 복사용지 1박스</p>
              <p className="mt-1 text-2xl font-black">{won(10200)} 절감</p>
            </div>
            <div className="bg-blue-soft px-5 py-5 sm:px-8">
              <p className="text-sm font-bold text-blue">생수 330mL 20병</p>
              <p className="mt-1 text-2xl font-black">{won(5400)} 절감</p>
            </div>
          </div>
          <p className="px-5 py-4 text-xs leading-relaxed text-muted sm:px-8">{priceCompare.note}</p>
        </div>

        {/* 비교견적 진행 절차 */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-black sm:text-2xl">비교견적은 이렇게 진행합니다</h3>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quoteSteps.map((s, i) => (
              <li key={s.title} className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
                <span className="text-sm font-black text-sun">STEP {i + 1}</span>
                <p className="mt-2 text-lg font-bold">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton kind="quote" variant="brand" size="lg" label="우리 회사 단가 비교 받기" />
            <a
              href="https://blog.naver.com/dyoffice82/223470930971"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              견적 할인 받는 방법 보기
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
