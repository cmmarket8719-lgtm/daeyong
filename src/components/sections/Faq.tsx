import { Container, SectionHead } from "@/components/ui";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="bg-paper py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHead title="자주 묻는 질문" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="group rounded-lg bg-white ring-1 ring-line open:ring-blue/40" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-base font-bold sm:p-6 sm:text-lg">
                <span className="flex gap-3">
                  <span className="text-blue">Q</span>
                  {f.q}
                </span>
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper text-lg leading-none text-muted transition group-open:rotate-45 group-open:bg-brand group-open:text-white">
                  +
                </span>
              </summary>
              <p className="flex gap-3 px-5 pb-6 text-[15px] leading-relaxed text-muted sm:px-6 sm:text-base">
                <span className="font-bold text-brand">A</span>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
