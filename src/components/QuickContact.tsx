import Link from "next/link";
import { site } from "@/lib/site";
import { DocIcon, PhoneIcon } from "./icons";

/** 데스크톱: 오른쪽 고정 퀵메뉴 / 모바일: 하단 고정 바 */
export default function QuickContact() {
  return (
    <>
      <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block" aria-label="빠른 문의">
        <div className="w-[92px] overflow-hidden rounded-lg border border-line bg-white text-center shadow-lg">
          <p className="bg-navy py-2 text-[11px] font-bold text-white">빠른 문의</p>
          <Link href="/contact" className="flex flex-col items-center gap-1 border-b border-line px-2 py-3.5 text-xs font-bold hover:bg-brand-soft">
            <DocIcon className="h-6 w-6 text-brand" />
            견적 문의
          </Link>
          <a href={site.phoneHref} className="flex flex-col items-center gap-1 border-b border-line px-2 py-3.5 text-xs font-bold hover:bg-blue-soft">
            <PhoneIcon className="h-6 w-6 text-blue" />
            전화 상담
          </a>
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-line px-2 py-3 text-xs font-bold text-[#03c75a] hover:bg-paper"
          >
            블로그
          </a>
          <a href="#top" className="block px-2 py-2.5 text-[11px] font-bold text-muted hover:text-ink">
            TOP ↑
          </a>
        </div>
      </aside>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line bg-white md:hidden">
        <Link href="/contact" className="flex items-center justify-center gap-1.5 bg-brand py-4 text-[15px] font-bold text-white">
          <DocIcon className="h-5 w-5" />
          견적 문의
        </Link>
        <a href={site.phoneHref} className="flex items-center justify-center gap-1.5 bg-blue py-4 text-[15px] font-bold text-white">
          <PhoneIcon className="h-5 w-5" />
          전화 상담
        </a>
      </div>
    </>
  );
}
