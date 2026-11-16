import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { ArrowIcon } from "@/components/icons";
import { cases } from "@/lib/content";
import { site } from "@/lib/site";

export default function Cases() {
  return (
    <section id="cases" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="CASE STUDIES"
          title={
            <>
              이런 회사들이
              <br className="sm:hidden" /> <span className="text-blue">구매 방식</span>을 바꿨습니다
            </>
          }
          desc="직원 30명 소프트웨어 회사부터 4개 사업장을 둔 제조사까지. 직접 상담하고 견적한 사례입니다."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.region + c.industry} className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line">
              <header className="flex items-start justify-between gap-3 border-b border-line bg-gradient-to-br from-blue to-blue-dark p-6 text-white">
                <div>
                  <p className="text-xs font-bold text-sun">{c.region}</p>
                  <h3 className="mt-1 text-lg font-black">{c.industry}</h3>
                  <p className="mt-0.5 text-sm text-white/75">{c.size}</p>
                </div>
                {c.highlight && (
                  <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-sm font-black shadow">{c.highlight}</span>
                )}
              </header>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold text-muted">기존 구매 방식</p>
                <p className="mt-1 text-[15px]">{c.before}</p>
                <p className="mt-4 text-xs font-bold text-muted">불편했던 점</p>
                <ul className="mt-1.5 space-y-1">
                  {c.pains.map((p) => (
                    <li key={p} className="flex gap-2 text-[15px]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl bg-blue-soft p-4">
                  <p className="text-xs font-bold text-blue">오피스디포 MRO 제안</p>
                  <p className="mt-1 text-[15px] font-bold leading-relaxed text-blue-dark">{c.result}</p>
                </div>
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-blue hover:text-blue-dark"
                  >
                    사례 자세히 보기 <ArrowIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* 고객사 로고 */}
        <div id="clients" className="mt-20">
          <h3 className="text-center text-xl font-black sm:text-2xl">
            은행·증권·보험부터 제조·유통까지, <span className="text-brand">1,300여 법인</span>이 거래합니다
          </h3>
          <figure className="mt-8">
            <div className="no-scrollbar overflow-x-auto rounded-3xl bg-white p-4 ring-1 ring-line sm:p-8">
              <Image
                src="/brand/clients.webp"
                alt="오피스디포 주요 고객사: 은행, 증권, 보험, 전자·화학·기계, 식음·제약·유통 분야 기업 로고"
                width={982}
                height={459}
                className="h-auto w-full min-w-[760px]"
                sizes="(min-width: 1152px) 1088px, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              * 오피스디포 전체 거래 고객사 중 일부입니다.<span className="sm:hidden"> 옆으로 밀어서 보세요.</span>
            </figcaption>
          </figure>
          <div className="mt-8 text-center">
            <a
              href={site.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-ink ring-1 ring-line transition hover:ring-blue"
            >
              블로그에서 더 많은 사례 보기 <ArrowIcon className="h-4 w-4 text-blue" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
