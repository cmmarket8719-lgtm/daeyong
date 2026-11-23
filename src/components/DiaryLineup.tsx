"use client";

import Image from "next/image";
import { useState } from "react";
import type { DiaryLine } from "@/lib/diary";

/** 양장 · 트윈링 · 시스템 탭 + 모델 카드 */
export default function DiaryLineup({ lines }: { lines: DiaryLine[] }) {
  const [active, setActive] = useState(lines[0].id);
  const line = lines.find((l) => l.id === active) ?? lines[0];

  return (
    <div>
      <div role="tablist" aria-label="다이어리 종류" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {lines.map((l) => (
          <button
            key={l.id}
            role="tab"
            type="button"
            aria-selected={l.id === active}
            onClick={() => setActive(l.id)}
            className={`shrink-0 rounded-md px-5 py-3 text-left transition ${
              l.id === active ? "bg-navy text-white" : "bg-white text-ink ring-1 ring-line hover:ring-blue"
            }`}
          >
            <span className={`block text-xs font-bold ${l.id === active ? "text-sun" : "text-blue"}`}>{l.en}</span>
            <span className="block text-[17px] font-black">{l.name}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-6">
        <div className="rounded-lg bg-white p-5 ring-1 ring-line sm:p-7">
          <p className="text-[17px] leading-relaxed text-ink/85">{line.summary}</p>
          <p className="mt-2 text-sm font-bold text-blue">내지 형식 · {line.formats}</p>
        </div>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {line.models.map((m) => (
            <li key={m.code} className="overflow-hidden rounded-lg bg-white ring-1 ring-line">
              <div className="relative aspect-[4/3] bg-paper">
                <Image src={m.image} alt={`디와이오피스 ${m.code} ${m.name}`} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 text-sm font-black text-navy">{m.code}</span>
              </div>
              <div className="p-5">
                <h3 className="font-black">{m.name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{m.point}</p>
                <dl className="mt-4 grid grid-cols-[52px_1fr] gap-y-1 border-t border-line pt-3 text-sm">
                  <dt className="font-bold text-muted">표지</dt>
                  <dd>{m.cover}</dd>
                  <dt className="font-bold text-muted">내지</dt>
                  <dd>{m.inner}</dd>
                  <dt className="font-bold text-muted">형식</dt>
                  <dd>{m.format}</dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted">대표 모델만 골라 실었어요. 다른 모델과 색상은 카탈로그로 보여 드립니다.</p>
      </div>
    </div>
  );
}
