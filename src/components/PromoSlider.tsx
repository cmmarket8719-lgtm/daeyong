"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowIcon, PauseIcon, PlayIcon } from "./icons";

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
    title: "1998년 설립, 문구·사무용품 업계 매출 1위",
    body: "직영 매장과 가맹점, 온라인 쇼핑몰, 기업 전용 B2B 구매까지 직접 운영합니다. 2007년부터 ‘오피스디포 코리아’ 이름을 쓰고 있어요.",
    stat: { value: "약 1,830여억 원", label: "2024년 결산 매출" },
    href: "/about",
    link: "회사소개 보기",
  },
  {
    image: "/photos/award-firstbrand.webp",
    alt: "대한민국 퍼스트브랜드 대상 엠블럼",
    fit: "contain",
    kicker: "믿을 수 있나요?",
    title: "퍼스트브랜드 대상 9년 연속, 매경 100대 프랜차이즈 연속 선정",
    body: "2018년부터 해마다 대한민국 퍼스트브랜드 대상을 받았고, 매일경제 100대 프랜차이즈에는 2013년부터 이름을 올리고 있습니다.",
    stat: { value: "5,000곳+", label: "B2B 쇼핑몰 이용 기업" },
    href: "/about#about",
    link: "수상·연혁 보기",
    extra: ["/photos/award-mk100.webp"],
  },
  {
    image: "/photos/fleet.webp",
    alt: "오피스디포 물류센터 앞에 줄지어 선 배송 차량",
    kicker: "배송은 어떻게 오나요?",
    title: "서울·경기·부산(일부 지역 제외)은 배송 기사님이 직접 갖다 드려요",
    body: "직배송 지역은 오피스디포 차량으로, 그 외 지역은 CJ대한통운 택배로 보냅니다. 경기도는 직배송이 안 되는 곳이 많으니 주소를 알려 주시면 확인해 드릴게요. 오늘 주문하시면 대부분 내일 받으세요.",
    stat: { value: "약 60여 대", label: "자체 배송 차량" },
    href: "/products#delivery",
    link: "배송 안내 보기",
  },
  {
    image: "/photos/store-inside.webp",
    alt: "오피스디포 직영점 매장 내부",
    kicker: "급하게 필요할 땐요?",
    title: "서울 오피스 밀집 지역마다 직영점이 있습니다",
    body: "강남, 여의도, 종로, 상암 등에 업계 최다 직영점 22곳을 운영합니다. 급한 물품 지원과 출력·제본·명함 제작도 가까운 매장에서 처리해요.",
    stat: { value: "188곳", label: "전국 매장 (직영 22 · 가맹 166)" },
    href: "/about#stores",
    link: "직영점 보기",
  },
  {
    image: "/photos/mall-main.webp",
    alt: "고객사 전용 MRO몰 화면",
    kicker: "어떻게 주문하나요?",
    title: "우리 회사만 쓰는 구매몰을 무료로 만들어 드려요",
    body: "담당 영업사원과 상담 후 회사 전용 B2B 쇼핑몰을 열어 드립니다. 직원은 몰에서 담고, 팀장님이 승인하고, 월말엔 엑셀 한 번이면 정산까지 끝나요.",
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

const DURATION = 4000; // 한 장당 4초

export default function PromoSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // 고객이 ‘멈춤’ 버튼을 눌렀을 때만 멈춤
  const [run, setRun] = useState(0); // 다시 재생할 때 진행 막대를 처음부터 그리기 위한 값
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  // 4초마다 자동으로 넘어갑니다. 멈춤 상태에서는 넘어가지 않고,
  // 멈춘 채로 이전·다음·막대를 누르면 그 장에서 그대로 멈춰 있습니다.
  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(t);
  }, [index, paused, run, go]);

  const togglePause = () => {
    if (paused) setRun((r) => r + 1);
    setPaused((p) => !p);
  };

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
                {paused && <span className="ml-1.5 text-sun">· 멈춤</span>}
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
                  onClick={togglePause}
                  aria-label={paused ? "슬라이드 다시 재생" : "슬라이드 멈춤"}
                  aria-pressed={paused}
                  className={`flex h-10 items-center gap-1.5 rounded-full px-3.5 text-sm font-bold transition ${
                    paused ? "bg-white text-navy hover:bg-white/90" : "border border-white/30 hover:bg-white/10"
                  }`}
                >
                  {paused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
                  {paused ? "재생" : "멈춤"}
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
                      {i === index &&
                        (paused ? (
                          <span className="absolute inset-0 bg-sun" />
                        ) : (
                          <span
                            key={`${index}-${run}`}
                            className="promo-progress absolute inset-y-0 left-0 bg-white"
                            style={{ animationDuration: `${DURATION}ms` }}
                          />
                        ))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">
          사진: 오피스디포 회사소개서 · 연혁·수상·매장 수(2024년 2월)·B2B 이용 기업 수는 오피스디포 공식 홈페이지 기준, ‘약’이 붙은 수치는 회사소개서 기준
        </p>
      </div>
    </section>
  );
}
