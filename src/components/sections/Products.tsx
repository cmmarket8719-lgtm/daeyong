import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { CheckIcon, GiftIcon } from "@/components/icons";
import { buyingPower, categories, extraServices, welcomeKits } from "@/lib/content";

export default function Products() {
  const max = categories[0].count;

  return (
    <section id="products" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="PRODUCTS"
          title={
            <>
              13개 카테고리 <span className="text-brand">8만여 종</span>,
              <br />
              필요한 건 다 있습니다
            </>
          }
          desc="복사용지·사무용품은 물론 탕비용품, 생활위생용품, 전산용품, 공장·현장의 산업 MRO 자재까지 한 몰에서 주문합니다."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* 카테고리별 상품 수 */}
          <div className="rounded-3xl border border-line p-6 sm:p-8">
            <h3 className="font-black">카테고리별 취급 상품 수</h3>
            <ul className="mt-5 space-y-2">
              {categories.map((c, i) => (
                <li key={c.name} className="grid grid-cols-[110px_1fr_64px] items-center gap-3 text-sm sm:grid-cols-[140px_1fr_72px]">
                  <span className="truncate font-medium">{c.name}</span>
                  <span className="h-3 overflow-hidden rounded-full bg-paper">
                    <span
                      className={`block h-full rounded-full ${i === 0 ? "bg-brand" : "bg-blue"}`}
                      style={{ width: `${Math.max((c.count / max) * 100, 2)}%` }}
                    />
                  </span>
                  <span className="text-right font-bold tabular-nums">{c.count.toLocaleString("ko-KR")}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">오피스디포 2026 B2B 회사소개서 기준 · PB 브랜드 별도</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-navy p-6 text-white sm:p-8">
              <h3 className="font-black">가격이 유지되는 이유, 매입 경쟁력</h3>
              <ul className="mt-4 space-y-2.5">
                {buyingPower.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[15px]">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sun" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-blue-soft p-6 sm:p-8">
              <h3 className="font-black">사무용품 외에도</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {extraServices.map((s) => (
                  <li key={s} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-blue-dark ring-1 ring-blue/15">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PB · 친환경 */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-3xl border border-line">
            <Image src="/photos/pb-products.webp" alt="오피스디포 PB 상품" width={808} height={293} sizes="(min-width: 768px) 560px, 100vw" className="h-auto w-full" />
            <figcaption className="border-t border-line p-5">
              <p className="font-black">오피스디포 PB 상품</p>
              <p className="mt-1 text-sm text-muted">건전지·테이프·복사용지 등 자주 쓰는 소모품을 품질 검증된 PB로 더 저렴하게.</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-3xl border border-line">
            <Image src="/photos/eco.webp" alt="환경부 인증 친환경 상품" width={1012} height={295} sizes="(min-width: 768px) 560px, 100vw" className="h-auto w-full" />
            <figcaption className="border-t border-line p-5">
              <p className="font-black">친환경 상품 취급</p>
              <p className="mt-1 text-sm text-muted">환경부 인증 친환경 상품을 따로 모아 ESG 구매 실적 관리에 활용할 수 있습니다.</p>
            </figcaption>
          </figure>
        </div>

        {/* 웰컴키트 */}
        <div className="mt-6 rounded-3xl bg-gradient-to-r from-brand to-[#ef4a3f] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="lg:w-72">
              <GiftIcon className="h-8 w-8" />
              <h3 className="mt-3 text-xl font-black">신입사원 웰컴키트 · 명절 선물세트</h3>
              <p className="mt-2 text-sm text-white/85">신입직원·입사지원자·고객 홍보용으로 구성과 메시지를 맞춤 제작합니다.</p>
            </div>
            <ul className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-5">
              {welcomeKits.map((k) => (
                <li key={k.name} className="rounded-2xl bg-white/12 p-4 ring-1 ring-white/25">
                  <p className="text-xs font-bold text-white/80">{k.name}</p>
                  <p className="mt-1 text-lg font-black">{k.price}</p>
                  <p className="mt-1 text-xs text-white/80">{k.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
