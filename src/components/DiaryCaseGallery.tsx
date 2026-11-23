"use client";

import Image from "next/image";
import { useState } from "react";
import type { DiaryCase } from "@/lib/diary";

/** 고객사 제작 사례: 큰 사진 1장 + 썸네일로 넘겨 보기 */
export default function DiaryCaseGallery({ item }: { item: DiaryCase }) {
  const [i, setI] = useState(0);
  const caption = (n: number) => `${item.label}_${item.industry}_제작사례${n + 1}`;

  return (
    <article className="overflow-hidden rounded-lg bg-white ring-1 ring-line">
      <div className="relative aspect-[4/5] bg-paper">
        <Image src={item.photos[i]} alt={caption(i)} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        <span className="absolute bottom-3 left-3 rounded bg-black/55 px-2.5 py-1 text-xs font-bold text-white">{caption(i)}</span>
      </div>
      {item.photos.length > 1 && (
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto p-2">
          {item.photos.map((p, n) => (
            <button
              key={p}
              type="button"
              onClick={() => setI(n)}
              aria-label={`${caption(n)} 보기`}
              aria-pressed={n === i}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded ${n === i ? "ring-2 ring-brand" : "opacity-70 hover:opacity-100"}`}
            >
              <Image src={p} alt="" fill sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
      <div className="p-5">
        <p className="text-sm font-bold text-blue">
          {item.label} · {item.industry}
        </p>
        <h3 className="mt-1 text-lg font-black">{item.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.desc}</p>
      </div>
    </article>
  );
}
