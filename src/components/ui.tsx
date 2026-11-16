import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { DocIcon, PhoneIcon } from "./icons";

type HeadProps = {
  eyebrow?: string;
  title: ReactNode;
  desc?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
};

/** 섹션 제목 */
export function SectionHead({ eyebrow, title, desc, dark, align = "left" }: HeadProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className={`text-[15px] font-bold ${dark ? "text-sun" : "text-blue"}`}>{eyebrow}</p>}
      <h2 className="mt-2 text-[26px] font-black leading-snug tracking-tight sm:text-[34px]">{title}</h2>
      {desc && <p className={`mt-3 text-base leading-relaxed sm:text-[17px] ${dark ? "text-white/75" : "text-muted"}`}>{desc}</p>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function won(n: number) {
  return n.toLocaleString("ko-KR") + "원";
}

/** 손글씨 메모 */
export function Note({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-pen text-[22px] leading-tight text-brand ${className}`}>{children}</span>;
}

/** 서브페이지 상단 비주얼 */
export function PageHero({
  title,
  desc,
  image,
  tabs,
}: {
  title: string;
  desc: string;
  image: string;
  tabs?: { href: string; label: string }[];
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image src={image} alt="" fill preload sizes="100vw" className="object-cover opacity-35" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              홈
            </Link>
            <span className="mx-2">/</span>
            {title}
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-[42px]">{title}</h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/85 sm:text-lg">{desc}</p>
        </div>
      </section>
      {tabs && (
        <nav aria-label={`${title} 목차`} className="no-scrollbar overflow-x-auto border-b border-line bg-white">
          <ul className="mx-auto flex max-w-6xl gap-1 px-4 sm:px-6">
            {tabs.map((t) => (
              <li key={t.href}>
                <a href={t.href} className="block whitespace-nowrap px-4 py-4 text-[15px] font-bold text-muted hover:text-blue">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

/** 페이지 하단 문의 띠: 견적 / 전화 두 갈래 */
export function ContactBand({ title = "궁금한 건 편하게 물어보세요" }: { title?: string }) {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xl font-black sm:text-2xl">{title}</p>
        <p className="mt-1.5 text-muted">견적은 무료이고, 받아 보시고 결정하셔도 됩니다.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href="/contact" className="group flex items-center justify-between rounded-lg bg-brand px-6 py-5 text-white transition hover:bg-brand-dark">
            <span>
              <span className="block text-sm text-white/80">구매 내역만 있으면 돼요</span>
              <span className="mt-0.5 block text-xl font-black">견적 문의 남기기</span>
            </span>
            <DocIcon className="h-8 w-8 opacity-90" />
          </Link>
          <a href={site.phoneHref} className="group flex items-center justify-between rounded-lg bg-blue px-6 py-5 text-white transition hover:bg-blue-dark">
            <span>
              <span className="block text-sm text-white/80">담당자 {site.managerName} 직통</span>
              <span className="mt-0.5 block text-xl font-black">{site.phone}</span>
            </span>
            <PhoneIcon className="h-8 w-8 opacity-90" />
          </a>
        </div>
      </div>
    </section>
  );
}
