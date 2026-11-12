"use client";

import { useState } from "react";
import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="rounded bg-brand px-2 py-1 text-sm font-black tracking-tight text-white">
            {site.brand}
          </span>
          <span className="text-[11px] font-medium leading-tight text-muted sm:text-xs">
            공식
            <br className="sm:hidden" /> 세일즈에이전트
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[15px] font-medium text-ink transition hover:text-brand"
            >
              {n.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 pb-5 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 text-base font-medium"
            >
              {n.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-bold text-white"
          >
            <PhoneIcon className="h-5 w-5" />
            전화 상담 {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
