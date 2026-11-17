import { ArrowIcon, ExternalIcon } from "./icons";
import { blogPosts } from "@/lib/content";
import { site } from "@/lib/site";

/** 네이버 블로그 표시용 초록 N 마크 */
export function NaverMark({ className = "h-6 w-6 text-sm", inverted = false }: { className?: string; inverted?: boolean }) {
  const color = inverted ? "bg-white text-[#03c75a]" : "bg-[#03c75a] text-white";
  return (
    <span aria-hidden className={`inline-flex shrink-0 items-center justify-center rounded font-black ${color} ${className}`}>
      N
    </span>
  );
}

/** 메인: 네이버 블로그 바로가기 + 최근 글 */
export default function BlogSection() {
  const posts = blogPosts.slice(0, 4);

  return (
    <section className="border-t border-line bg-[#f2fbf6] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        <div>
          <p className="flex items-center gap-2 text-[15px] font-bold text-[#03a24a]">
            <NaverMark className="h-6 w-6 text-sm" />
            네이버 블로그
          </p>
          <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-[32px]">
            상담 이야기는
            <br />
            블로그에 더 자세히 써 두었어요
          </h2>
          <p className="mt-4 leading-relaxed text-muted sm:text-[17px]">
            실제 견적 비교표, 고객사 방문 후기, 예산관리·승인 기능 사용법까지. 결정하시기 전에 한 번 둘러보시면 많이
            도움 되실 거예요.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm font-bold text-[#03824a]">
            {["#비교견적 사례", "#MRO 도입 후기", "#예산관리", "#웰컴키트"].map((t) => (
              <li key={t} className="rounded-full bg-white px-3 py-1.5 ring-1 ring-[#03c75a]/30">
                {t}
              </li>
            ))}
          </ul>
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-between gap-4 rounded-md bg-[#03c75a] px-6 py-5 text-white transition hover:bg-[#02b350] sm:max-w-md"
          >
            <span className="flex items-center gap-3">
              <NaverMark inverted className="h-9 w-9 text-lg" />
              <span>
                <span className="block text-sm text-white/85">blog.naver.com/dyoffice82</span>
                <span className="block text-xl font-black">블로그 바로가기</span>
              </span>
            </span>
            <ExternalIcon className="h-6 w-6" />
          </a>
        </div>

        <div className="rounded-lg bg-white p-6 ring-1 ring-[#03c75a]/20 sm:p-8">
          <p className="font-black">최근 올린 글</p>
          <ul className="mt-3 divide-y divide-line">
            {posts.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4">
                  <span>
                    <span className="text-xs text-muted">{p.date}</span>
                    <span className="mt-0.5 block text-[16px] font-bold leading-snug group-hover:text-[#03a24a]">{p.title}</span>
                  </span>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-[#03a24a]" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[15px] font-bold text-[#03a24a] hover:underline"
          >
            글 전체 보기 <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
