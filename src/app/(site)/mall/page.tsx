import type { Metadata } from "next";
import { ContactBand, PageHero } from "@/components/ui";
import MallCompare from "@/components/sections/MallCompare";
import Features from "@/components/sections/Features";

export const metadata: Metadata = {
  title: "MRO몰 기능",
  description: "기업 전용 MRO몰의 구매 승인, 예산 관리, 계정 관리, 정산·세금계산서, 구매대행, 명함 신청 기능을 소개합니다.",
};

export default function MallPage() {
  return (
    <>
      <PageHero
        title="MRO몰 기능"
        desc="직원은 담고, 관리자는 승인하고, 총무팀은 월말에 엑셀 한 번. 회사 전용 구매몰은 무료로 만들어 드립니다."
        image="/photos/store-inside.webp"
      />
      <Features />
      <MallCompare />
      <ContactBand title="우리 회사에 맞게 세팅하려면 어떻게 하냐고요?" />
    </>
  );
}
