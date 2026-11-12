import Image from "next/image";
import { priceBasis, samplePrices } from "@/lib/prices";
import { ArrowIcon, BoxIcon, DocIcon } from "../icons";

const won = (v: number) => v.toLocaleString("ko-KR");

export default function PriceSample() {
  return (
    <section id="prices" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-brand">PRICE</p>
          <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-4xl">
            자주 사는 품목,
            <br className="sm:hidden" /> 이 단가로 드립니다
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            지금 구매하시는 가격과 비교해 보세요. 기업 고객 기준의 실제 납품 단가입니다.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-ink px-5 py-3 text-sm text-white sm:px-6">
            <span className="font-bold">대표 품목 단가</span>
            <span className="text-white/70">
              {priceBasis.date} 기준 · <b className="text-sun">{priceBasis.vat}</b>
            </span>
          </div>
          <ul className="grid grid-cols-1 divide-y divide-line md:grid-cols-2 md:divide-y-0">
            {samplePrices.map((p, i) => (
              <li
                key={p.code}
                className={`flex items-center justify-between gap-4 px-5 py-4 sm:px-6 ${
                  i % 2 === 0 ? "md:border-r md:border-line" : ""
                } ${i >= 2 ? "md:border-t md:border-line" : ""}`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-line sm:h-[72px] sm:w-[72px]">
                  {p.image ? (
                    <Image src={`/products/${p.code}.webp`} alt={p.name} width={240} height={240} className="h-full w-full object-contain p-1" />
                  ) : (
                    <BoxIcon className="h-7 w-7 text-brand/60" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded bg-cream px-1.5 py-0.5 text-[11px] font-bold text-brand">{p.category}</span>
                  <p className="mt-1 font-bold leading-snug">{p.name}</p>
                  <p className="text-xs text-muted">{p.spec}</p>
                </div>
                <p className="shrink-0 text-right">
                  <span className="text-xl font-black tracking-tight text-ink sm:text-2xl">{won(p.price)}</span>
                  <span className="ml-0.5 text-sm font-bold text-muted">원</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          * {priceBasis.date} 기준, {priceBasis.vat} 단가입니다. {priceBasis.note}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-ink px-6 py-8 text-center text-white sm:flex-row sm:justify-between sm:px-10 sm:text-left">
          <div>
            <p className="text-xl font-black sm:text-2xl">
              자주 사는 <span className="text-sun">{priceBasis.fullListCount}개 품목</span> 단가표가 필요하신가요?
            </p>
            <p className="mt-1 text-white/75">회사 정보를 남겨 주시면 전체 단가표를 보내 드립니다.</p>
          </div>
          <a
            href="#quote-pricelist"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-4 font-bold text-brand transition hover:bg-white/90"
          >
            <DocIcon className="h-5 w-5" />
            단가표 받기
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
