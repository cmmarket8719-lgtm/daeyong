import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DiaryLineup from "@/components/DiaryLineup";
import DiaryCaseGallery from "@/components/DiaryCaseGallery";
import { ContactBand, Container, Note, PageHero, SectionHead } from "@/components/ui";
import { CheckIcon, DocIcon, PhoneIcon } from "@/components/icons";
import { JsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import {
  customOptions,
  diaryCases,
  diaryFaqs,
  diaryLines,
  maker,
  makerSteps,
  orderNotes,
  orderSteps,
  realPhotos,
  whyDiary,
} from "@/lib/diary";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  path: "/diary",
  title: "기업다이어리제작",
  description:
    "회사 로고를 넣은 2027 기업 다이어리, 디와이오피스가 제작부터 납품까지 전담합니다. 양장·트윈링·시스템 다이어리, 금박·은박·형압 로고 인쇄, 실물 사진과 고객사 제작 사례, 주문 방법까지 한눈에 보세요.",
  keywords: [
    "기업 다이어리 제작",
    "회사 다이어리 제작",
    "2027 다이어리 제작",
    "로고 다이어리",
    "신년 다이어리",
    "판촉 다이어리",
    "양장 다이어리",
    "트윈링 다이어리",
    "시스템 다이어리",
    "다이어리 금박 인쇄",
    "업무 수첩 제작",
    "디와이오피스",
    "에이블플래너",
  ],
});

const diaryJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "기업 다이어리 주문 제작",
    serviceType: "기업 로고 다이어리·업무 수첩 주문 제작",
    description: "기업 로고 다이어리 주문 제작. 디와이오피스가 디자인·인쇄·후가공·제본부터 납품까지 제작·유통을 전담합니다.",
    provider: { "@type": "Organization", name: "디와이오피스" },
    areaServed: { "@type": "Country", name: "대한민국" },
    url: `${site.url}/diary`,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "디와이오피스 2027 기업 다이어리 대표 모델",
    itemListElement: diaryLines.flatMap((l) => l.models).map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${m.code} ${m.name}`,
        brand: { "@type": "Brand", name: "디와이오피스" },
        image: `${site.url}${m.image}`,
        description: `${m.point}. 표지 ${m.cover}, 내지 ${m.inner}, ${m.format}.`,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: diaryFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function DiaryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/diary")} />
      <JsonLd data={diaryJsonLd} />

      <PageHero
        title="기업다이어리제작"
        desc="회사 이름이 들어간 다이어리 한 권, 1년 내내 책상 위에 놓입니다. 고르기 쉽게, 받기 편하게 만들어 드려요."
        image="/diary/hero.webp"
        tabs={[
          { href: "#maker", label: "디와이오피스 소개" },
          { href: "#real", label: "실물 사진" },
          { href: "#lineup", label: "다이어리 종류" },
          { href: "#custom", label: "로고·맞춤 제작" },
          { href: "#cases", label: "제작 사례" },
          { href: "#order", label: "주문 방법" },
        ]}
      />

      {/* 왜 다이어리인가 */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <SectionHead
                eyebrow="2027 기업 다이어리"
                title={
                  <>
                    연말 선물, 올해는
                    <br />
                    <span className="text-brand">회사 이름 새긴 다이어리</span>로
                  </>
                }
              />
              <ul className="mt-8 space-y-5">
                {whyDiary.map((w, i) => (
                  <li key={w.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-black text-white">{i + 1}</span>
                    <span>
                      <span className="block text-lg font-black">{w.title}</span>
                      <span className="mt-1 block leading-relaxed text-muted">{w.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 font-bold text-white transition hover:bg-brand-dark">
                  <DocIcon className="h-5 w-5" />
                  다이어리 견적 문의
                </Link>
                <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-md border-2 border-blue px-6 py-4 font-bold text-blue transition hover:bg-blue-soft">
                  <PhoneIcon className="h-5 w-5" />
                  {site.phone}
                </a>
              </div>
            </div>
            <figure className="relative">
              <div className="relative aspect-[8/7] overflow-hidden rounded-lg">
                <Image src="/diary/collection.webp" alt="창가 책상 위에 색깔별로 세워 둔 2027 다이어리 컬렉션" fill preload sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
              <figcaption className="absolute -bottom-4 right-4 rotate-[2deg] rounded bg-white px-4 py-2 shadow-md">
                <Note>색상만 해도 이렇게 많아요</Note>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* 협력사 소개 */}
      <section id="maker" className="scroll-mt-32 bg-blue-soft py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <SectionHead
                eyebrow="협력사 소개"
                title={
                  <>
                    다이어리 제작·유통은
                    <br />
                    <span className="text-blue">{maker.name}</span>가 전담합니다
                  </>
                }
              />
              <p className="mt-5 text-[17px] leading-[1.85] text-ink/85">
                기업 다이어리는 별도의 협력사 <b>{maker.name}</b>가 제작과 유통을 전담합니다.
                {" "}
                {maker.intro}
              </p>
              <p className="mt-4 text-[17px] leading-[1.85] text-ink/85">
                문의는 이 사이트의 견적·상담 창구 하나로 주시면 됩니다. 샘플 확인부터 시안, 제작, 납품 일정까지 디와이오피스가 챙겨 드리니
                담당자님은 고르고 확인만 하시면 됩니다.
              </p>
              <p className="mt-5 font-pen text-[26px] leading-tight text-navy">“{maker.slogan}”</p>
            </div>
            <div>
              <ol className="grid grid-cols-2 gap-3">
                {makerSteps.map((s) => (
                  <li key={s.no} className="rounded-lg bg-white p-5 ring-1 ring-line">
                    <span className="text-sm font-black text-brand">{s.no}</span>
                    <p className="mt-1 text-lg font-black">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </li>
                ))}
              </ol>
              <figure className="mt-3 overflow-hidden rounded-lg bg-white ring-1 ring-line">
                <Image src="/diary/factory.webp" alt="다이어리 제작사 전경과 인쇄·제본 설비, 샘플실" width={1256} height={605} sizes="(min-width: 1024px) 520px, 100vw" className="h-auto w-full" />
                <figcaption className="px-4 py-2.5 text-xs text-muted">제작사 전경 · 인쇄·제본 설비 · 샘플실</figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* 실물 사진 */}
      <section id="real" className="scroll-mt-32 py-14 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionHead eyebrow="실물 사진" title="카탈로그 사진 말고, 실제로 받아 본 모습" />
            <Note>직접 찍었어요. 색이 생각보다 더 예뻐요!</Note>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {realPhotos.map((p, i) => (
              <div key={p.src} className={`relative overflow-hidden rounded-lg bg-paper ${i === 0 ? "col-span-2 row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-[3/4]"}`}>
                <Image src={p.src} alt={p.alt} fill sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"} className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 라인업 */}
      <section id="lineup" className="scroll-mt-32 bg-paper py-14 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="다이어리 종류"
            title="양장 · 트윈링 · 시스템, 쓰임에 맞게 고르세요"
            desc="2027년 신제품까지 디와이오피스 대표 모델을 골라 실었습니다. 탭을 눌러 종류별로 보세요."
          />
          <div className="mt-8">
            <DiaryLineup lines={diaryLines} />
          </div>
        </Container>
      </section>

      {/* 맞춤 제작 */}
      <section id="custom" className="scroll-mt-32 py-14 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="로고·맞춤 제작"
            title={
              <>
                표지부터 포장까지,
                <br />
                <span className="text-blue">우리 회사 것</span>으로 바꿀 수 있어요
              </>
            }
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {customOptions.map((o) => (
              <li key={o.title} className="grid grid-cols-[120px_1fr] overflow-hidden rounded-lg ring-1 ring-line sm:grid-cols-[160px_1fr]">
                <div className="relative min-h-[140px] bg-paper">
                  <Image src={o.image} alt={o.title} fill sizes="160px" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black">{o.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{o.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["/diary/custom-1.webp", "/diary/custom-3.webp", "/diary/custom-4.webp", "/diary/lineup-all.webp"].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-paper">
                <Image src={src} alt="디와이오피스 맞춤 제작 다이어리·캘린더 세트 사례" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 제작 사례 */}
      <section id="cases" className="scroll-mt-32 bg-blue-soft py-14 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="제작 사례"
            title="이런 회사들이 다이어리를 만들었어요"
            desc="실제 납품한 다이어리 사진입니다. 썸네일을 누르면 다른 사진도 볼 수 있어요."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {diaryCases.map((c) => (
              <DiaryCaseGallery key={c.id} item={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* 주문 방법 */}
      <section id="order" className="scroll-mt-32 py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <SectionHead eyebrow="주문 방법" title="이 순서로 정하시면 됩니다" />
              <ol className="mt-8 border-l-2 border-blue/20">
                {orderSteps.map((s, i) => (
                  <li key={s.title} className="relative pb-6 pl-8 last:pb-0">
                    <span className={`absolute -left-[15px] top-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-black text-white ${i === orderSteps.length - 1 ? "bg-brand" : "bg-blue"}`}>
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-black">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="self-start rounded-lg bg-navy p-6 text-white sm:p-8">
              <p className="text-lg font-black">주문 전에 알아 두시면 좋아요</p>
              <ul className="mt-4 space-y-3">
                {orderNotes.map((n) => (
                  <li key={n} className="flex gap-2.5 text-[15px] leading-relaxed text-white/85">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sun" />
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/15 pt-4 text-sm text-white/70">가격은 수량·크기·인쇄 방법에 따라 달라져서 견적으로 안내해 드립니다.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-xl font-black sm:text-2xl">다이어리 제작, 자주 묻는 질문</h3>
            <div className="mt-6 space-y-3">
              {diaryFaqs.map((f, i) => (
                <details key={f.q} className="group rounded-lg bg-white ring-1 ring-line open:ring-blue/40" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-bold sm:text-lg">
                    <span className="flex gap-3">
                      <span className="text-blue">Q</span>
                      {f.q}
                    </span>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper text-lg leading-none text-muted transition group-open:rotate-45 group-open:bg-brand group-open:text-white">
                      +
                    </span>
                  </summary>
                  <p className="flex gap-3 px-5 pb-5 text-[15px] leading-relaxed text-muted">
                    <span className="font-bold text-brand">A</span>
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactBand title="2027 다이어리, 지금 미리 상담하세요" />
    </>
  );
}
