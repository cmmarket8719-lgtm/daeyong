import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import QuoteForm from "@/components/QuoteForm";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MallCompare from "@/components/sections/MallCompare";
import Features from "@/components/sections/Features";
import PriceCompare from "@/components/sections/PriceCompare";
import Cases from "@/components/sections/Cases";
import Products from "@/components/sections/Products";
import Logistics from "@/components/sections/Logistics";
import Quality from "@/components/sections/Quality";
import Stores from "@/components/sections/Stores";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import { CheckIcon, DocIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <MallCompare />
        <Features />
        <PriceCompare />
        <Cases />

        {/* 중간 CTA */}
        <section className="bg-brand">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center text-white sm:px-6 md:flex-row md:text-left">
            <div>
              <p className="text-xl font-black sm:text-2xl">지금 쓰는 단가, 비교만 해 보셔도 됩니다</p>
              <p className="mt-2 text-white/85">비교견적과 전용몰 구축은 무료이며, 위약 조항이 없습니다.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton kind="quote" variant="white" size="lg" />
              <CallButton kind="call" variant="outline-light" size="lg" showNumber={false} />
            </div>
          </div>
        </section>

        <About />
        <Products />
        <Logistics />
        <Quality />
        <Stores />
        <Contact />
        <Faq />

        {/* 견적 의뢰 */}
        <section id="quote" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,#0a1f4d_0%,#10307a_60%,#1652d8_100%)]" />
          <div aria-hidden className="absolute left-0 top-0 h-1.5 w-full bg-brand" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-sun">FREE QUOTE</p>
              <h2 className="mt-3 text-[28px] font-black leading-snug tracking-tight sm:text-4xl">
                MRO 도입·비교견적
                <br />
                문의하기
              </h2>
              <p className="mt-4 leading-relaxed text-white/85 sm:text-lg">
                회사 정보와 자주 사는 품목을 남겨 주시면 현재 구매가와 비교한 견적서를 보내 드립니다. 견적은 무료이며 거래를
                강요하지 않습니다.
              </p>
              <ul className="mt-8 space-y-3">
                {["품목별 단가 비교 견적서", "월간·연간 예상 절감액", "전용몰 구성안과 내부 보고용 도입 기안"].map((t) => (
                  <li key={t} className="flex items-center gap-2 font-bold">
                    <CheckIcon className="h-5 w-5 text-sun" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
                <p className="text-sm text-white/75">
                  바로 통화하고 싶으시면 · {site.managerName} {site.managerTitle.split(" · ")[0]}
                </p>
                <a href={site.phoneHref} className="mt-1 inline-flex items-center gap-2 text-2xl font-black tracking-tight hover:text-sun sm:text-3xl">
                  <PhoneIcon className="h-6 w-6 text-sun" />
                  {site.phone}
                </a>
                <p className="mt-1 text-sm text-white/70">통화가 어려우면 문자나 이메일({site.email})을 남겨 주세요.</p>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />

      {/* 모바일 하단 고정 바 */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white p-3 md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a href="#quote" className="flex items-center justify-center gap-1.5 rounded-lg bg-brand py-3.5 text-[15px] font-bold text-white">
            <DocIcon className="h-5 w-5" />
            비교견적 문의
          </a>
          <a href={site.phoneHref} className="flex items-center justify-center gap-1.5 rounded-lg bg-blue py-3.5 text-[15px] font-bold text-white">
            <PhoneIcon className="h-5 w-5" />
            전화 상담
          </a>
        </div>
      </div>
    </>
  );
}
