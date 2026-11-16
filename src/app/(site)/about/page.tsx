import type { Metadata } from "next";
import { ContactBand, PageHero } from "@/components/ui";
import About from "@/components/sections/About";
import Quality from "@/components/sections/Quality";
import Stores from "@/components/sections/Stores";

export const metadata: Metadata = {
  title: "회사소개",
  description: "사무용품 업계 매출 1위 오피스디포. 회사 개요, 연혁과 수상, 품질 관리와 고객지원, 직영점 현황을 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="회사소개"
        desc="1998년부터 기업 사무용품을 공급해 온 오피스디포를 소개합니다."
        image="/photos/logistics-center.webp"
        tabs={[
          { href: "#about", label: "회사 개요" },
          { href: "#quality", label: "품질·고객지원" },
          { href: "#stores", label: "직영점·카피센터" },
        ]}
      />
      <About />
      <Quality />
      <Stores />
      <ContactBand />
    </>
  );
}
