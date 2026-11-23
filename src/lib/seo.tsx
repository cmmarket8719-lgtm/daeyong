import type { Metadata } from "next";
import { faqs } from "@/lib/content";
import { nav, site } from "@/lib/site";

const SITE_NAME = "오피스디포 기업 MRO 구매상담 · 김대용";

/** 메뉴별 페이지 메타데이터: 제목·설명·대표 주소·공유 미리보기를 한 번에 만듭니다. */
export function pageMeta({
  path,
  title,
  description,
  keywords = [],
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, ...site.keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "ko_KR",
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE_NAME}`, description },
  };
}

/** 구조화 데이터(JSON-LD) 출력: 구글·네이버·AI 검색이 내용을 정확히 이해하도록 돕습니다. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}

/** 사이트 전체: 웹사이트 + 담당자 + 제공 서비스 */
export const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: SITE_NAME,
    url: site.url,
    inLanguage: "ko-KR",
    description: site.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#manager`,
    name: site.managerName,
    jobTitle: "기업 MRO 구매상담 담당",
    worksFor: { "@type": "Organization", name: "㈜오피스디포코리아", url: site.officialMall },
    telephone: "+82-10-9876-6010",
    email: site.email,
    url: site.url,
    sameAs: [site.blogUrl],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/#service`,
    name: "오피스디포 기업 MRO 구매 상담 · 전용몰 구축",
    serviceType: "기업 사무용품·소모품 MRO 공급",
    description:
      "사무용품·복사용지·탕비용품·산업 MRO 자재를 기업 할인가로 공급하고, 회사 전용 B2B 구매몰(승인·예산·정산 관리)을 무료로 구축합니다. 비교견적 무료.",
    provider: { "@id": `${site.url}/#manager` },
    areaServed: { "@type": "Country", name: "대한민국" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${site.url}/contact`,
      servicePhone: { "@type": "ContactPoint", telephone: "+82-10-9876-6010", contactType: "sales", availableLanguage: "Korean" },
    },
  },
];

/** 페이지 위치 표시 (홈 > 메뉴) */
export function breadcrumbJsonLd(path: string) {
  const item = nav.find((n) => n.href === path);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: site.url },
      { "@type": "ListItem", position: 2, name: item?.label ?? path, item: `${site.url}${path}` },
    ],
  };
}

/** 자주 묻는 질문 */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
