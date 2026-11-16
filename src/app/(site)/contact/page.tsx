import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { Note, PageHero } from "@/components/ui";
import { prep } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "견적·상담 문의",
  description: "회사 정보와 자주 사는 품목을 남겨 주시면 현재 구매가와 비교한 견적서를 무료로 보내 드립니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="견적·상담 문의"
        desc="견적은 무료이고, 받아 보신 뒤 결정하셔도 됩니다."
        image="/photos/warehouse.webp"
      />

      <section id="quote" className="bg-paper py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 ring-1 ring-line sm:p-7">
              <p className="text-sm font-bold text-muted">바로 통화하실 분</p>
              <a href={site.phoneHref} className="mt-1 flex items-center gap-2 text-3xl font-black tracking-tight text-blue">
                <PhoneIcon className="h-7 w-7" />
                {site.phone}
              </a>
              <p className="mt-1 text-[15px] text-muted">
                {site.managerName} · {site.managerTitle.split(" · ")[0]}
              </p>
              <a href={`mailto:${site.email}`} className="mt-4 flex items-center gap-2 font-bold hover:text-blue">
                <MailIcon className="h-5 w-5 text-muted" />
                {site.email}
              </a>
              <p className="mt-4 rounded bg-blue-soft px-3 py-2 text-sm text-blue-dark">
                통화가 어려우시면 문자 남겨 주세요. 확인하는 대로 연락드립니다.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 ring-1 ring-line sm:p-7">
              <p className="font-black">이런 걸 같이 보내 주시면 빨라요</p>
              <ul className="mt-4 space-y-3">
                {prep.map((p, i) => (
                  <li key={p.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-black text-white">{i + 1}</span>
                    <span>
                      <span className="block font-bold">{p.title}</span>
                      <span className="text-sm text-muted">{p.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Note className="mt-4 block">없어도 괜찮아요, 같이 정리해 드릴게요!</Note>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <Contact />
      <Faq />
    </>
  );
}
