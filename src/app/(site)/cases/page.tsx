import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { ContactBand, PageHero } from "@/components/ui";
import Cases from "@/components/sections/Cases";

export const metadata: Metadata = pageMeta({
  path: "/cases",
  title: "도입사례",
  description: "직원 30명 소프트웨어 회사부터 4개 사업장을 둔 제조사까지, 직접 상담하고 견적한 MRO 도입 사례입니다.",
  keywords: ["MRO 도입 사례", "사무용품 구매 사례", "기업 구매 개선"],
});

export default function CasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/cases")} />
      <PageHero
        title="도입사례"
        desc="회사마다 사정이 달라서, 사례도 하나하나 다릅니다. 직접 찾아가 상담했던 곳들이에요."
        image="/photos/callcenter.webp"
      />
      <Cases />
      <ContactBand title="비슷한 고민이 있으시면 연락 주세요" />
    </>
  );
}
