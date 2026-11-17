import type { Metadata } from "next";
import { ContactBand, PageHero } from "@/components/ui";
import Products from "@/components/sections/Products";
import Logistics from "@/components/sections/Logistics";

export const metadata: Metadata = {
  title: "상품·배송",
  description: "약 8만여 종 상품과 자체 물류센터, 약 60여 대의 직배송 차량으로 주문 다음 날 배송합니다.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="상품·배송"
        desc="사무용품부터 현장 자재까지 약 8만여 종. 오늘 주문하시면 내일 받으십니다."
        image="/photos/fleet.webp"
        tabs={[
          { href: "#products", label: "취급 상품" },
          { href: "#delivery", label: "물류·배송" },
        ]}
      />
      <Products />
      <Logistics />
      <ContactBand title="찾는 상품이 있는지 먼저 물어보셔도 돼요" />
    </>
  );
}
