"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowIcon } from "./icons";

type Slide = {
  image: string;
  alt: string;
  fit?: "cover" | "contain";
  kicker: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  href: string;
  link: string;
  extra?: string[]; // 수상 엠블럼처럼 사진 위에 얹는 작은 이미지
};

// 사진: 오피스디포 회사소개서·제안서 자료
const slides: Slide[] = [
  {
    image: "/photos/logistics-center.webp",
    alt: "오피스디포 물류센터 외관",
    kicker: "오피스디포는 어떤 회사인가요?",
    title: "1998년부터 기업 사무용품을 공급해 온 업계 1위",
    body: "법인 구매, 직영점, 가맹점, 온라인몰까지 직접 운영합니다. 사무용품 업계에서 매출이 가장 큰 회사예요.",
    stat: { value: "1,830억원", label: "2024년 매출 · 업계 1위" },
    href: "/about",
    link: "회사소개 보기",
  },
  {
    image: "/photos/award-firstbrand.webp",
    alt: "대한민국 퍼스트브랜드 대상 엠블럼",
    fit: "contain",
    kicker: "믿을 수 있나요?",
    title: "퍼스트브랜드 대상 9년, 매경 100대 프랜차이즈 12년",
    body: "문구·사무용품 전문점 부문에서 해마다 상을 받아 왔습니다. 거래 중인 법인만 1,300여 곳입니다.",
    stat: { value: "1,300여 곳", label: "거래 법인" },
    href: "/about#about",
    link: "수상·연혁 보기",
    extra: ["/photos/award-mk100.webp"],
  },
  {
    image: "/photos/fleet.webp",
    alt: "오피스디포 물류센터 앞에 줄지어 선 배송 차량",
    kicker: "배송은 어떻게 오나요?",
    title: "택배사에 맡기지 않고 배송 기사님이 직접 갖다 드려요",
    body: "서울·경기·부산은 자체 차량으로 직배송, 그 외 지역은 CJ대한통운으로 보냅니다. 배송비는 무료예요.",
    stat: { value: "68대", label: "자체 배송 차량" },
    href: "/products#delivery",
    link: "배송 안내 보기",
  },
  {
    image: "/photos/store-inside.webp",
    alt: "오피스디포 직영점 매장 내부",
    kicker: "급하게 필요할 땐요?",
    title: "서울 오피스 밀집 지역마다 직영점이 있습니다",
    body: "강남, 여의도, 종로, 상암까지 직영점 20곳. 급한 물품 지원과 출력·제본·명함 제작도 가까운 매장에서 처리해요.",
    stat: { value: "190곳", label: "전국 매장 (직영 20)" },
    href: "/about#stores",
    link: "직영점 보기",
  },
  {
    image: "/photos/mall-main.webp",
    alt: "고객사 전용 MRO몰 화면",
    kicker: "어떻게 주문하나요?",
    title: "우리 회사만 쓰는 구매몰을 무료로 만들어 드려요",
    body: "직원은 몰에서 담고, 팀장님이 승인하고, 월말엔 엑셀 한 번. 부서별 예산과 세금계산서까지 몰에서 관리합니다.",
    stat: { value: "0원", label: "구축·운영 비용" },
    href: "/mall",
    link: "MRO몰 기능 보기",
  },
  {
    image: "/photos/callcenter.webp",
    alt: "오피스디포 고객지원팀 사무실",
    kicker: "문제가 생기면요?",
    title: "A/S·반품만 따로 맡는 팀이 있습니다",
    body: "불량이나 오배송은 접수 후 5일 안에 정상 상품으로 바꿔 드리고, 고객 잘못이 아니면 반품 비용도 받지 않아요.",
    stat: { value: "5일 이내", label: "교환 완료" },
    href: "/about#quality",
    link: "품질·고객지원 보기",
  },
];

const DURATION = 6000;

export default function PromoSlider() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  // 마우스를 올려도 멈추지 않고 6초마다 계속 넘어갑니다.
  // 버튼으로 넘기면 그 장부터 다시 6초를 셉니다.
  useEffect(() => {
    const t = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(t);
  }, [index, go]);

  const s = slides[index];

  return (
    <section className="bg-white py-14 sm:py-20" aria-roledescription="carousel" aria-label="오피스디포 소개">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[26px] font-black leading-snug tracking-tight sm:text-[32px]">
            오피스디포, 처음 들어 보셨나요?
          </h2>
          <p className="text-[15px] text-muted">1분이면 어떤 회사인지 아실 수 있어요</p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-lg bg-navy text-white">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            {/* 사진 */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0d2559] lg:aspect-auto lg:min-h-[440px]">
              {slides.map((sl, i) => (
                <div
                  key={sl.image}
                  aria-hidden={i !== index}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
                >
                  {sl.fit === "contain" ? (
                    <div className="flex h-full items-center justify-center gap-6 p-8 sm:gap-10">
                      {[sl.image, ...(sl.extra ?? [])].map((src, k) => (
                        <Image
                          key={src}
                          src={src}
                          alt={k === 0 ? sl.alt : "매일경제 100대 프랜차이즈 인증 엠블럼"}
                          width={220}
                          height={220}
                          className={`h-32 w-32 sm:h-48 sm:w-48 ${i === index ? "promo-pop" : ""}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={sl.image}
                      alt={sl.alt}
                      fill
                      sizes="(min-width: 1024px) 620px, 100vw"
                      className={`object-cover ${i === index ? "promo-zoom" : ""}`}
                    />
                  )}
                </div>
              ))}
              <span className="absolute left-4 top-4 rounded bg-black/45 px-2.5 py-1 text-xs font-bold tabular-nums">
                {index + 1} / {count}
              </span>
            </div>

            {/* 글 */}
            <div className="flex flex-col p-6 sm:p-10" aria-live="polite">
              <div key={index} className="promo-text flex flex-1 flex-col">
                <p className="text-[15px] font-bold text-sun">{s.kicker}</p>
                <h3 className="mt-3 text-[24px] font-black leading-snug sm:text-[30px]">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-white/80 sm:text-[17px]">{s.body}</p>
                {s.stat && (
                  <p className="mt-6">
                    <span className="text-4xl font-black text-[#ff5a4f] sm:text-5xl">{s.stat.value}</span>
                    <span className="ml-2 text-sm text-white/70">{s.stat.label}</span>
                  </p>
                )}
                <Link href={s.href} className="mt-6 inline-flex items-center gap-1.5 self-start font-bold text-white underline-offset-4 hover:underline">
                  {s.link} <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>

              {/* 조작 */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="이전"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
                >
                  <ArrowIcon className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="다음"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
                >
                  <ArrowIcon className="h-4 w-4" />
                </button>
                <div className="ml-2 flex flex-1 gap-1.5">
                  {slides.map((sl, i) => (
                    <button
                      key={sl.image}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`${i + 1}번째 소개: ${sl.kicker}`}
                      aria-current={i === index}
                      className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20"
                    >
                      {i < index && <span className="absolute inset-0 bg-white" />}
                      {i === index && (
                        <span
                          key={index}
                          className="promo-progress absolute inset-y-0 left-0 bg-white"
                          style={{ animationDuration: `${DURATION}ms` }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">사진: 오피스디포 회사소개서 · 수치는 2026 오피스디포 B2B 회사소개서 기준</p>
      </div>
    </section>
  );
}
