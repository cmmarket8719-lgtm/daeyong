import { Container, SectionHead } from "@/components/ui";
import { ArrowIcon, ExternalIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { blogPosts, prep, steps } from "@/lib/content";
import { site } from "@/lib/site";

/** 거래 절차 + 담당자 소개 + 블로그 최신 글 */
export default function Contact() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="PROCESS"
          title="문의부터 전용몰 오픈까지"
          desc="부담 없이 문의 주세요. 전담 담당자가 1:1로 상담하고, 비교견적과 내부 보고자료까지 함께 준비합니다."
        />

        <ol className="mt-14 grid gap-3 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-line p-6">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-black text-white ${
                  i === steps.length - 1 ? "bg-brand" : "bg-blue"
                }`}
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-black">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-3xl bg-blue-soft p-6 sm:p-8">
          <h3 className="text-lg font-black">견적 받을 때 있으면 좋은 것</h3>
          <p className="mt-1 text-sm text-muted">없어도 괜찮습니다. 대략 알려 주시면 함께 정리해 드립니다.</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {prep.map((p, i) => (
              <li key={p.title} className="rounded-2xl bg-white p-5">
                <p className="text-sm font-black text-brand">0{i + 1}</p>
                <p className="mt-1 font-bold">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 담당자 + 블로그 */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white sm:p-9">
            <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue/40" />
            <div aria-hidden className="absolute -bottom-10 right-10 h-24 w-24 rounded-full bg-brand/70" />
            <p className="relative text-sm font-bold text-sun">YOUR MRO MANAGER</p>
            <p className="relative mt-3 text-3xl font-black">{site.managerName}</p>
            <p className="relative mt-1 text-white/75">{site.managerTitle}</p>
            <p className="relative mt-5 leading-relaxed text-white/85">
              “구매 방식은 바꾸고 싶은데 보고자료 만들 시간이 없다”는 말씀을 가장 많이 듣습니다. 견적부터 도입 기안, 시범
              운영안까지 같이 준비해 드리겠습니다.
            </p>
            <ul className="relative mt-7 space-y-3">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-xl font-black hover:text-sun">
                  <PhoneIcon className="h-5 w-5 text-sun" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-bold hover:text-sun">
                  <MailIcon className="h-5 w-5 text-sun" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.blogUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold hover:text-sun">
                  <ExternalIcon className="h-5 w-5 text-sun" /> 네이버 블로그 바로가기
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-line p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black">구매 담당자를 위한 블로그</h3>
              <a href={site.blogUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue hover:text-blue-dark">
                전체 보기
              </a>
            </div>
            <ul className="mt-4 divide-y divide-line">
              {blogPosts.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="text-xs font-bold text-muted">{p.date}</span>
                      <span className="mt-0.5 block font-bold leading-snug group-hover:text-blue">{p.title}</span>
                    </span>
                    <ArrowIcon className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-blue" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
