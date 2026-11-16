import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { mallCompare, mroBenefits } from "@/lib/content";

export default function MallCompare() {
  return (
    <section className="bg-blue-soft py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="공식몰과 뭐가 다른가요"
          title={
            <>
              공식몰과 기업 MRO몰은
              <br />
              <span className="text-brand">구매 방식</span>이 다릅니다
            </>
          }
          desc="같은 오피스디포 상품이라도, 기업 전용 MRO몰에서는 가격과 관리 방식이 달라집니다."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* 몰 화면 */}
          <figure className="overflow-hidden rounded-lg bg-white p-3 shadow-sm ring-1 ring-line">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 truncate rounded-full bg-paper px-3 py-1 text-xs text-muted">b2b.officedepot.co.kr / 고객사 전용몰</span>
            </div>
            <Image
              src="/photos/mall-main.webp"
              alt="오피스디포 기업 전용 MRO몰 메인 화면 예시"
              width={1165}
              height={969}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="px-2 pt-3 text-xs text-muted">※ 기존 고객사 전용몰 예시 화면</figcaption>
          </figure>

          {/* 비교표 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-line">
            <div className="grid grid-cols-[80px_1fr_1.2fr] text-sm font-bold sm:grid-cols-[100px_1fr_1.2fr]">
              <div className="bg-paper px-4 py-4" />
              <div className="bg-paper px-4 py-4 text-muted">공식 쇼핑몰</div>
              <div className="bg-blue px-4 py-4 text-white">기업 MRO몰</div>
            </div>
            {mallCompare.map((r) => (
              <div key={r.item} className="grid grid-cols-[80px_1fr_1.2fr] border-t border-line text-sm sm:grid-cols-[100px_1fr_1.2fr] sm:text-[15px]">
                <div className="px-4 py-4 font-bold">{r.item}</div>
                <div className="px-4 py-4 text-muted">{r.official}</div>
                <div className="bg-blue-soft/60 px-4 py-4 font-bold text-blue-dark">{r.mro}</div>
              </div>
            ))}
          </div>
        </div>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {mroBenefits.map((b) => (
            <li key={b.n} className="rounded-lg bg-white p-6 ring-1 ring-line">
              <span className="text-3xl font-black text-brand">{b.n}</span>
              <h3 className="mt-2 text-lg font-black">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
