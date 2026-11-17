import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { CheckIcon, TruckIcon } from "@/components/icons";
import { automation, deliveryZones, emergency, logisticsStats } from "@/lib/content";

export default function Logistics() {
  return (
    <section id="delivery" className="bg-blue-soft py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="물류·배송"
          title={
            <>
              오늘 주문하면 <span className="text-brand">내일 도착</span>
            </>
          }
          desc="업계 최대 물류센터에서 자동화 설비로 출고하고, 자체 배송 차량이 직접 납품합니다."
        />

        {/* 사진 모자이크 */}
        <div className="mt-14 grid gap-3 sm:grid-cols-3 sm:grid-rows-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:col-span-2 sm:row-span-2 sm:aspect-auto">
            <Image src="/photos/warehouse.webp" alt="오피스디포 물류센터 랙과 재고" fill sizes="(min-width: 640px) 66vw, 100vw" className="object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">물류센터 내부</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image src="/photos/fleet.webp" alt="오피스디포 배송 차량" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">자체 배송 차량 약 60여 대</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
            <Image src="/photos/truck.webp" alt="오피스디포 배송 트럭" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-contain p-4" />
            <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">직접 납품</span>
          </div>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logisticsStats.map((s) => (
            <div key={s.label} className="flex flex-col rounded-lg bg-white p-5 text-center ring-1 ring-line">
              <dt className="order-2 mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
              <dd className="text-2xl font-black text-blue">
                {s.value}
                <span className="ml-0.5 text-xs font-bold text-ink">{s.unit}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* 배송 구역 */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {deliveryZones.map((d, i) => (
            <div key={d.area} className={`rounded-lg p-7 ${i === 0 ? "bg-navy text-white" : "bg-white ring-1 ring-line"}`}>
              <TruckIcon className={`h-7 w-7 ${i === 0 ? "text-sun" : "text-blue"}`} />
              <h3 className="mt-4 text-xl font-black">{d.area}</h3>
              <p className={`text-sm ${i === 0 ? "text-white/65" : "text-muted"}`}>{d.sub}</p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className={`text-xs ${i === 0 ? "text-white/65" : "text-muted"}`}>주문 마감</p>
                  <p className={`text-3xl font-black ${i === 0 ? "text-white" : "text-blue"}`}>{d.cut}</p>
                </div>
                <p className="rounded-full bg-brand px-3 py-1 text-sm font-bold text-white">{d.when}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">물량 과다, 기상 악화, 명절 등 특수한 상황에서는 배송이 늦어질 수 있습니다.</p>

        {/* 자동화 + 긴급배송 */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-xl font-black">물류 자동화 시스템</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {automation.map((a) => (
                <li key={a.name} className="rounded-lg bg-white p-5 ring-1 ring-line">
                  <p className="text-lg font-black text-blue">{a.name}</p>
                  <p className="text-xs font-medium text-muted">{a.full}</p>
                  <p className="mt-2 text-sm leading-relaxed">{a.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-brand p-7 text-white">
            <h3 className="text-xl font-black">급할 땐, 긴급 배송</h3>
            <p className="mt-2 text-sm text-white/85">본사와 직영점 22곳·가맹점 166곳의 인력과 차량을 활용해 적극 대응합니다.</p>
            <ul className="mt-5 space-y-2.5">
              {emergency.map((e) => (
                <li key={e} className="flex items-center gap-2 font-bold">
                  <CheckIcon className="h-4 w-4 shrink-0" /> {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
