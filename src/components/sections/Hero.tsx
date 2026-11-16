import Image from "next/image";
import CallButton from "@/components/CallButton";
import { CheckIcon } from "@/components/icons";
import { heroStats, statsNote } from "@/lib/content";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* 배경: 사선 블루 그라데이션 + 레드 포인트 라인 */}
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(120deg,#0a1f4d_0%,#10307a_55%,#1652d8_100%)]" />
      <div aria-hidden className="absolute -right-24 top-0 hidden h-full w-[52%] skew-x-[-10deg] overflow-hidden lg:block">
        <Image
          src="/photos/warehouse.webp"
          alt=""
          fill
          preload
          sizes="(min-width: 1024px) 55vw, 0px"
          className="skew-x-[10deg] scale-110 object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10307a] via-[#10307a]/30 to-transparent" />
      </div>
      <div aria-hidden className="absolute bottom-0 left-0 h-1.5 w-full bg-brand" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold ring-1 ring-white/20 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-brand" />
            {site.role}
          </p>
          <h1 className="mt-6 text-[34px] font-black leading-[1.22] tracking-tight sm:text-5xl lg:text-[56px]">
            사무용품·소모품·탕비용품
            <br />
            <span className="relative isolate inline-block">
              승인부터 정산까지
              <span aria-hidden className="absolute bottom-0.5 left-0 -z-10 h-2.5 w-full bg-brand/85 sm:h-3.5" />
            </span>
            <br />
            <span className="text-sun">오피스디포 MRO</span> 하나로
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            8만여 종 상품을 기업 할인가로. 우리 회사 전용 구매몰을 무료로 만들어 드리고, 직원 주문·관리자 승인·부서 예산·월
            정산을 한 화면에서 관리하게 해 드립니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton kind="quote" variant="brand" size="lg" label="무료 비교견적 받기" />
            <CallButton kind="call" variant="outline-light" size="lg" />
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/90 sm:flex sm:flex-wrap sm:gap-x-6">
            {["전용몰 구축·운영 무료", "배송비 무료", "주문 다음 날 도착", "월 1회 통합 정산"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 shrink-0 text-sun" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* 모바일: 사진을 본문 아래에 */}
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/15 lg:hidden">
          <Image src="/photos/warehouse.webp" alt="오피스디포 물류센터 내부" fill sizes="100vw" className="object-cover" />
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 ring-1 ring-white/15 sm:grid-cols-4 lg:mt-16 lg:max-w-4xl">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col bg-navy/70 px-5 py-5 backdrop-blur">
              <dt className="order-2 mt-1 text-xs text-white/70 sm:text-sm">{s.label}</dt>
              <dd className="text-2xl font-black tracking-tight sm:text-3xl">
                {s.value}
                <span className="ml-0.5 text-sm font-bold text-sun">{s.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-white/50">{statsNote}</p>
      </div>
    </section>
  );
}
