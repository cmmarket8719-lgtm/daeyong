import type { Metadata } from "next";
import { ContactBand, PageHero } from "@/components/ui";
import PriceCompare from "@/components/sections/PriceCompare";

export const metadata: Metadata = {
  title: "비교견적",
  description: "일반 쇼핑몰 구매가와 오피스디포 MRO 제안가를 같은 상품, 같은 단위로 비교한 실제 견적을 공개합니다.",
};

export default function PricePage() {
  return (
    <>
      <PageHero
        title="비교견적"
        desc="온라인이 더 싸다고 생각하셨다면, 같은 상품으로 한 번만 비교해 보세요."
        image="/photos/store-inside2.webp"
      />
      <PriceCompare />
      <ContactBand title="우리 회사 품목으로 비교해 보시겠어요?" />
    </>
  );
}
