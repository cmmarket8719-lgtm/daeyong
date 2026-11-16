import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton, { CtaPair } from "@/components/CallButton";
import QuoteForm from "@/components/QuoteForm";
import Benefit from "@/components/sections/Benefit";
import Compare from "@/components/sections/Compare";
import ExclusiveMall from "@/components/sections/ExclusiveMall";
import Story from "@/components/sections/Story";
import PriceSample from "@/components/sections/PriceSample";
import DirectContract from "@/components/sections/DirectContract";
import { ProposalPoints } from "@/components/sections/Proposal";
import {
  ArrowIcon,
  CheckIcon,
  DocIcon,
  PhoneIcon,
  TruckIcon,
} from "@/components/icons";
import { brandStats, site, statsNote } from "@/lib/site";

const steps = [
  { title: "견적 의뢰", desc: "견적 의뢰서를 남기시거나 전화로 문의해 주세요." },
  { title: "품목 리스트 전달", desc: "자주 사는 품목과 월 사용량을 보내 주세요." },
  { title: "비교 견적", desc: "현재 단가와 비교한 품목별 견적서를 드립니다." },
  { title: "거래 시작", desc: "오피스디포 본사와 계약하고 주문 계정을 엽니다." },
  { title: "정기 공급", desc: "반복 품목은 정기 공급, 이후 관리는 담당자가." },
];

const prep = [
  { title: "품목 리스트", desc: "자주 사는 품목명·규격 (기존 거래명세서나 엑셀이면 충분합니다)" },
  { title: "월 사용량", desc: "품목별 대략적인 월 구매 수량 또는 월 구매 금액" },
  { title: "배송지", desc: "배송 받을 사무실 주소와 지점 수" },
];


const faqs = [
  {
    q: "직원이 몇 명 안 되는 작은 회사도 거래할 수 있나요?",
    a: "가능합니다. 규모보다 꾸준히 구매하는 품목이 있는지가 중요합니다. 우선 전화 주시면 맞는 방식을 안내해 드립니다.",
  },
  {
    q: "지금 거래처와 비교해 보고 결정하고 싶어요.",
    a: "최근 구매 내역이나 자주 사는 품목 목록만 있으면 비교견적을 무료로 만들어 드립니다. 비교해 보고 결정하셔도 됩니다.",
  },
  {
    q: "주문하면 언제 받을 수 있나요?",
    a: "서울·경기 직배송 지역은 15시, 그 외 택배 지역은 11시까지 주문하면 다음 날 받으실 수 있습니다. 도서·산간 지역은 3~4일 정도 걸립니다.",
  },
  {
    q: "오피스디포 공식몰에서 사는 것과 무엇이 다른가요?",
    a: "기업 고객 전용 단가, 승인·예산·계정 같은 구매 관리 기능, 월 통합 정산, 담당자 직통 응대를 받을 수 있다는 점이 다릅니다.",
  },
  {
    q: "불량품이나 잘못 온 상품은 어떻게 하나요?",
    a: "오피스디포의 A/S·반품 전담 파트에서 회수하고, 접수 후 5일 이내 정상 상품으로 교환해 드립니다.",
  },
  {
    q: "공식 세일즈에이전시는 어떤 역할인가요?",
    a: "오피스디포와 계약을 맺고 기업 고객의 거래 상담, 견적, 도입, 이후 관리를 맡습니다. 거래 계약과 세금계산서 발행, 배송·반품, 전용 B2B몰은 모두 오피스디포 본사가 직접 제공합니다.",
  },
];

function SectionHead({ eyebrow, title, desc, light }: { eyebrow: string; title: React.ReactNode; desc?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold tracking-wide text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-muted"}`}>{desc}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand text-white">
          <svg aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none">
            <path d="M-50 120C150 160 260 260 230 380 200 500 120 560 60 640" stroke="#ffc20e" strokeOpacity=".7" />
            <path d="M860 -20c120 60 160 140 160 240 0 120 60 200 220 290" stroke="#ffc20e" strokeOpacity=".7" />
          </svg>
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sun" />
              {site.role}
            </p>
            <h1 className="mt-6 text-[34px] font-black leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">
              기업 소모품 비용,
              <br />
              <span className="text-sun">구매 방식</span>을 바꾸면
              <br />
              줄어듭니다
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              식음료·생활용품부터 사무용품까지. 업계 1위 오피스디포의 기업 전용 단가와 B2B 구매몰, 월 통합
              정산으로 지금보다 얼마나 줄어드는지 숫자로 보여 드립니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CallButton kind="quote" variant="white" size="lg" label="무료 견적 의뢰하기" />
              <CallButton kind="call" variant="outline-light" size="lg" />
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              {["비교 견적 무료", "소규모 기업도 거래 가능", "다음 날 배송", "월 정산·세금계산서"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-sun" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {brandStats.map((s) => (
                <div key={s.label} className="flex flex-col text-center">
                  <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
                  <dd className="text-3xl font-black tracking-tight text-brand sm:text-4xl">
                    {s.value}
                    <span className="ml-0.5 text-base font-bold text-ink">{s.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-center text-xs text-muted">{statsNote}</p>
          </div>
        </section>

        <Story />
        <Benefit />
        <ExclusiveMall />
        <Compare />
        <PriceSample />
        <DirectContract />

        {/* Delivery */}
        <section id="delivery" className="bg-ink py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              light
              eyebrow="DELIVERY"
              title="오늘 주문하면 내일 도착"
              desc="업계 최대 규모 물류센터와 자체 배송 차량으로 빠르고 정확하게 보내 드립니다."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                { area: "서울·경기", sub: "직배송 지역", cut: "15시", when: "다음 날 도착" },
                { area: "그 외 전국", sub: "택배 배송", cut: "11시", when: "다음 날 도착" },
                { area: "도서·산간", sub: "택배 배송", cut: "11시", when: "3~4일 이내" },
              ].map((d) => (
                <div key={d.area} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <TruckIcon className="h-7 w-7 text-sun" />
                  <h3 className="mt-4 text-xl font-bold">{d.area}</h3>
                  <p className="text-sm text-white/60">{d.sub}</p>
                  <p className="mt-6 text-sm text-white/70">주문 마감</p>
                  <p className="text-3xl font-black text-sun">{d.cut}</p>
                  <p className="mt-2 font-bold">{d.when}</p>
                </div>
              ))}
            </div>
            <ul className="mt-10 grid gap-3 text-[15px] text-white/80 sm:grid-cols-3">
              {["출하 성공률 99.5% 이상", "급한 물품은 가까운 직영점에서 긴급 지원", "불량·오배송은 접수 후 5일 이내 교환"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-sun" /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/45">물량 과다, 기상 악화, 명절 등 특수한 상황에서는 배송이 늦어질 수 있습니다.</p>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="bg-sun">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:text-left">
            <div>
              <p className="text-xl font-black text-ink sm:text-2xl">지금 쓰는 단가, 비교만 해 보셔도 됩니다</p>
              <p className="mt-2 text-ink/75">비교견적은 무료이며, 거래를 강요하지 않습니다.</p>
            </div>
            <CallButton kind="quote" size="lg" />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead eyebrow="PROCESS" title="거래 절차" desc="전화 한 통에서 정기 공급까지, 담당자가 함께 진행합니다." />
            <ol className="mt-14 grid gap-4 md:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl bg-paper p-6 md:bg-transparent md:p-0 md:text-center">
                  <div className="flex items-center gap-4 md:flex-col">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-black text-white md:h-14 md:w-14">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted md:px-2">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <span aria-hidden className="absolute right-[-14%] top-7 hidden h-px w-[28%] bg-brand/30 md:block" />
                  )}
                </li>
              ))}
            </ol>
            <ProposalPoints />
            <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-cream p-6 sm:p-8">
              <h3 className="text-lg font-black sm:text-xl">견적 받을 때 준비하면 좋은 것</h3>
              <p className="mt-1 text-sm text-muted">없어도 괜찮습니다. 견적 의뢰서 요청사항에 대략 적어 주시면 담당자가 함께 정리해 드립니다.</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {prep.map((p, i) => (
                  <li key={p.title} className="rounded-xl bg-white p-5">
                    <p className="text-sm font-bold text-brand">0{i + 1}</p>
                    <p className="mt-1 font-bold">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <CtaPair />
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              eyebrow="CLIENTS"
              title={<>1,300여 법인이<br className="sm:hidden" /> 오피스디포와 거래합니다</>}
              desc="23년간 MRO 사업을 운영하며 대기업부터 금융사, 제조사, 스타트업까지 다양한 기업의 구매를 맡아 왔습니다."
            />
            <figure className="mt-12">
              <div className="overflow-x-auto rounded-2xl bg-white p-4 shadow-sm ring-1 ring-line sm:p-8">
                <Image
                  src="/brand/clients.webp"
                  alt="오피스디포 주요 고객사: 은행, 증권, 보험, 전자·화학·기계, 식음·제약·유통 분야 기업 로고"
                  width={982}
                  height={459}
                  className="h-auto w-full min-w-[760px]"
                  sizes="(min-width: 1152px) 1088px, 100vw"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                * 오피스디포 전체 거래 고객사 중 일부입니다 (오피스디포 2026 B2B 제안서 기준).
                <span className="sm:hidden"> 옆으로 밀어서 보세요.</span>
              </figcaption>
            </figure>
            <a
              href={site.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-10 flex max-w-md items-center justify-between gap-4 rounded-2xl bg-white p-6 ring-1 ring-line transition hover:ring-brand"
            >
              <span>
                <span className="block text-sm text-muted">실제 거래 사례와 상품 소식</span>
                <span className="mt-1 block text-lg font-bold">블로그에서 더 보기</span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <ArrowIcon className="h-5 w-5" />
              </span>
            </a>
            <CtaPair />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHead eyebrow="FAQ" title="자주 묻는 질문" />
            <div className="mt-12 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold sm:text-lg">
                    <span>
                      <span className="mr-2 text-brand">Q.</span>
                      {f.q}
                    </span>
                    <span className="mt-1 text-xl leading-none text-muted transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pl-7 text-[15px] leading-relaxed text-muted sm:text-base">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section id="quote" className="bg-brand py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <p className="text-sm font-bold tracking-wide text-sun">FREE QUOTE</p>
              <h2 className="mt-3 text-[28px] font-black leading-snug tracking-tight sm:text-4xl">
                무료 견적 의뢰
              </h2>
              <p className="mt-4 leading-relaxed text-white/85 sm:text-lg">
                회사 정보와 요청사항을 남겨 주시면, 현재 구매 내역과 비교한 견적서를 보내 드립니다. 견적은 무료이며
                거래를 강요하지 않습니다.
              </p>
              <ul className="mt-8 space-y-3">
                {["품목별 단가 비교 견적서", "월간·연간 예상 절감액", "우리 회사에 맞는 구매 방식 제안"].map((t) => (
                  <li key={t} className="flex items-center gap-2 font-bold">
                    <CheckIcon className="h-5 w-5 text-sun" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-white/10 p-6">
                <p className="text-sm text-white/75">바로 통화하고 싶으시면</p>
                <a href={site.phoneHref} className="mt-1 inline-flex items-center gap-2 text-2xl font-black tracking-tight hover:text-sun sm:text-3xl">
                  <PhoneIcon className="h-6 w-6 text-sun" />
                  {site.phone}
                </a>
                <p className="mt-1 text-sm text-white/70">거래 문의 · 통화가 어려우면 문자를 남겨 주세요.</p>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />

      {/* Mobile sticky bar: 견적 의뢰(폼) / 거래 문의(전화) */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white p-3 md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a href="#quote" className="flex items-center justify-center gap-1.5 rounded-lg bg-brand py-3.5 text-[15px] font-bold text-white">
            <DocIcon className="h-5 w-5" />
            견적 의뢰
          </a>
          <a href={site.phoneHref} className="flex items-center justify-center gap-1.5 rounded-lg bg-ink py-3.5 text-[15px] font-bold text-white">
            <PhoneIcon className="h-5 w-5" />
            거래 문의
          </a>
        </div>
        
      </div>
    </>
  );
}
