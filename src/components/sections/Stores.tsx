import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { PrintIcon, StoreIcon } from "@/components/icons";
import { copyCenter, stores } from "@/lib/content";

export default function Stores() {
  return (
    <section id="stores" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="STORES & COPY CENTER"
          title={
            <>
              가까운 <span className="text-brand">직영점 20곳</span>이
              <br />
              우리 회사의 비품실이 됩니다
            </>
          }
          desc="업계 최다 직영점이 서울 주요 오피스 밀집 지역에 있습니다. 긴급 물품 지원과 출력·제본·제작 업무를 가까운 매장에서 빠르게 처리합니다."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {[
            { src: "/photos/store-front.webp", alt: "오피스디포 직영점 외관" },
            { src: "/photos/store-inside.webp", alt: "오피스디포 직영점 매장 내부" },
            { src: "/photos/store-inside2.webp", alt: "오피스디포 직영점 사무용품 진열대" },
          ].map((p) => (
            <div key={p.src} className="relative aspect-[3/2] overflow-hidden rounded-3xl">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
            <div className="flex items-center gap-2">
              <StoreIcon className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-black">직영점 현황</h3>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {stores.map((s) => (
                <div key={s.region}>
                  <p className="text-sm font-black text-blue">{s.region}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {s.list.map((n) => (
                      <li key={n} className="rounded-md bg-paper px-2.5 py-1 text-sm">
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted">전국 매장 190곳 (직영 20 · 가맹 170)</p>
          </div>

          <div className="rounded-3xl bg-blue p-6 text-white sm:p-8">
            <div className="flex items-center gap-2">
              <PrintIcon className="h-6 w-6 text-sun" />
              <h3 className="text-lg font-black">카피센터</h3>
            </div>
            <p className="mt-2 text-sm text-white/80">발주 후 24시간 이내 수령. 대량·정기 간행물은 추가 할인, 전문 디자이너가 함께합니다.</p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {copyCenter.map((c) => (
                <li key={c} className="rounded-xl bg-white/10 px-3 py-2.5 text-sm font-bold ring-1 ring-white/15">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
