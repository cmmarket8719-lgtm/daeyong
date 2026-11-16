import { Container, SectionHead } from "@/components/ui";
import { ArrowIcon } from "@/components/icons";
import { blogPosts, steps } from "@/lib/content";
import { site } from "@/lib/site";

/** 진행 순서 + 블로그 최신 글 */
export default function Contact() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="진행 순서" title="문의 주시면 이렇게 진행돼요" />
            <ol className="mt-8 space-y-0 border-l-2 border-blue/20">
              {steps.map((s, i) => (
                <li key={s.title} className="relative pb-7 pl-8 last:pb-0">
                  <span
                    className={`absolute -left-[15px] top-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-black text-white ${
                      i === steps.length - 1 ? "bg-brand" : "bg-blue"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-black">{s.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex items-end justify-between">
              <SectionHead eyebrow="블로그" title="구매 담당자분들이 많이 본 글" />
            </div>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {blogPosts.map((p) => (
                <li key={p.href}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="text-xs text-muted">{p.date}</span>
                      <span className="mt-0.5 block font-bold leading-snug group-hover:text-blue">{p.title}</span>
                    </span>
                    <ArrowIcon className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-blue" />
                  </a>
                </li>
              ))}
            </ul>
            <a href={site.blogUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-[15px] font-bold text-blue hover:underline">
              블로그 전체 보기 <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
