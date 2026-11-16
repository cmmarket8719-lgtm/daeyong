import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { awards, businessAreas, companyFacts, finance, history } from "@/lib/content";

export default function About() {
  const maxRatio = Math.max(...finance.rows.map((r) => r.ratio));

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="ABOUT OFFICE DEPOT"
          title={
            <>
              사무용품 업계 1위,
              <br className="sm:hidden" /> <span className="text-blue">오피스디포</span>입니다
            </>
          }
          desc="법인사업·직영사업·가맹사업·플랫폼운영 4개 사업을 함께 운영하며, 25년간 1,300여 법인의 구매를 맡아 왔습니다."
        />

        {/* 개요 + 물류센터 사진 */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-navy">
            <Image
              src="/photos/logistics-center.webp"
              alt="오피스디포 물류센터 외관"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm font-bold text-sun">업계 최대 물류센터 · 최다 직영점</p>
              <p className="mt-2 text-xl font-black leading-snug sm:text-2xl">
                사무실에 필요한 모든 것을
                <br />
                직접 보관하고 직접 배송합니다
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-3">
            {companyFacts.map((f) => (
              <div key={f.k} className="rounded-2xl border border-line bg-white p-5">
                <dt className="text-xs font-bold text-blue">{f.k}</dt>
                <dd className="mt-1.5 text-[15px] font-bold leading-snug sm:text-base">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 4개 사업 */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {businessAreas.map((b, i) => (
            <div
              key={b.title}
              className={`rounded-2xl p-6 ${i === 0 ? "bg-blue text-white" : "bg-paper"}`}
            >
              <p className={`text-xs font-black ${i === 0 ? "text-sun" : "text-brand"}`}>0{i + 1}</p>
              <h3 className="mt-2 text-lg font-black">{b.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/85" : "text-muted"}`}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* 수상 + 연혁 + 재무 */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-xl font-black">주요 어워즈</h3>
            <div className="mt-5 flex items-center gap-4">
              <Image src="/photos/award-firstbrand.webp" alt="2026 대한민국 퍼스트브랜드 대상" width={120} height={120} className="h-24 w-24 sm:h-28 sm:w-28" />
              <Image src="/photos/award-mk100.webp" alt="2025 매일경제 100대 프랜차이즈 인증" width={120} height={120} className="h-24 w-24 sm:h-28 sm:w-28" />
              <p className="text-sm leading-relaxed text-muted">
                국내 주요 브랜드 어워즈를 석권하며
                <br className="hidden sm:block" /> 브랜드 파워를 입증하고 있습니다.
              </p>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {awards.map((a) => (
                <li key={a.title} className="flex gap-3 rounded-xl border border-line p-4">
                  <span className="w-12 shrink-0 text-sm font-black text-brand">{a.year}</span>
                  <span>
                    <span className="block text-[15px] font-bold leading-snug">{a.title}</span>
                    <span className="text-sm text-muted">{a.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-black">연혁</h3>
              <ol className="mt-5 border-l-2 border-blue/25 pl-5">
                {history.map((h) => (
                  <li key={h.year} className="relative pb-4 last:pb-0">
                    <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-blue bg-white" />
                    <span className="font-black text-blue">{h.year}</span>
                    <span className="ml-3 text-[15px]">{h.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-black">안정적인 재무 · 유동비율</h3>
              <ul className="mt-5 space-y-2.5">
                {finance.rows.map((r) => (
                  <li key={r.year} className="flex items-center gap-3 text-sm">
                    <span className="w-10 shrink-0 font-bold text-muted">{r.year}</span>
                    <span className="h-6 flex-1 overflow-hidden rounded bg-paper">
                      <span
                        className="flex h-full items-center justify-end rounded bg-blue pr-2 text-xs font-bold text-white"
                        style={{ width: `${(r.ratio / maxRatio) * 100}%` }}
                      >
                        {r.ratio}%
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted">{finance.note} · 2024년 매출 1,830억원 (업계 1위)</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
