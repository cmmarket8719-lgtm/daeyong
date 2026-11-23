"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menu = nav.filter((n) => n.href !== "/contact");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)} aria-label={`${site.brand} 기업 MRO 구매상담 홈`}>
          <Image src={site.logo} alt={site.brand} width={713} height={119} preload className="h-6 w-auto sm:h-8" />
          {/* 모바일: 좁은 화면용 두 줄 */}
          <span className="flex flex-col border-l-2 border-blue pl-2 text-[12px] font-black leading-tight tracking-tight text-navy sm:hidden">
            <span>기업 MRO</span>
            <span>구매상담 전문</span>
          </span>
          <span className="hidden flex-col border-l-2 border-blue pl-2.5 leading-tight sm:flex">
            <span className="text-[11px] font-bold text-blue">담당 {site.managerName}</span>
            <span className="text-[15px] font-black tracking-tight text-navy">기업 MRO 구매상담 전문</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-7">
          {menu.map((n) => {
            const active = pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative py-5 text-[14px] font-bold xl:text-[15px] transition hover:text-blue ${active ? "text-blue" : "text-ink"}`}
              >
                {n.label}
                {active && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 whitespace-nowrap lg:flex">
          <a href={site.phoneHref} className="hidden items-center gap-1.5 text-[15px] font-bold text-ink hover:text-blue xl:flex">
            <PhoneIcon className="h-4 w-4 text-blue" />
            {site.phone}
          </a>
          <Link href="/contact" className="rounded-md bg-brand px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark">
            견적 문의
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      {/* 좁은 화면: 로고 바로 아래에 전체 메뉴 (옆으로 밀어서 보기) */}
      <nav aria-label="주요 메뉴" className="no-scrollbar overflow-x-auto border-t border-line lg:hidden">
        <ul className="flex w-max gap-1 px-2.5">
          {nav.map((n) => {
            const active = pathname.startsWith(n.href);
            const isContact = n.href === "/contact";
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`relative block whitespace-nowrap px-2.5 py-3 text-[14px] font-bold ${
                    isContact ? "text-brand" : active ? "text-blue" : "text-ink"
                  }`}
                >
                  {n.label}
                  {active && <span className="absolute inset-x-2.5 bottom-0 h-0.5 bg-blue" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {open && (
        <nav className="border-t border-line bg-white px-4 pb-5 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line py-4 text-base font-bold ${pathname.startsWith(n.href) ? "text-blue" : ""}`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-md bg-[#03c75a] py-3.5 font-bold text-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-xs font-black text-[#03c75a]">N</span>
            네이버 블로그 바로가기
          </a>
          <a href={site.phoneHref} className="mt-2 flex items-center justify-center gap-2 rounded-md bg-blue py-3.5 font-bold text-white">
            <PhoneIcon className="h-5 w-5" />
            {site.phone} 전화 상담
          </a>
        </nav>
      )}
    </header>
  );
}
