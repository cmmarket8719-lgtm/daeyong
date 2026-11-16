// 사이트 전체에서 쓰는 담당자·연락처 정보는 이 파일 한 곳에서만 관리합니다.

export const site = {
  // 사이트 주소 (도메인을 연결하면 여기만 바꾸면 됩니다)
  url: "https://daeyong.vercel.app",

  // 운영 주체 (견적 폼 동의 문구·개인정보처리방침에 표시)
  agentName: "오피스디포 B2B영업팀 김대용",
  managerName: "김대용",
  managerTitle: "오피스디포 B2B영업팀 · MRO 플랫폼 매니저",
  role: "오피스디포 기업 MRO 전담 영업",

  // 브랜드
  brand: "오피스디포",
  logo: "/brand/officedepot-logo.png", // 713x119
  footerRole: "기업 MRO 구매 상담",
  supplierAddress: "서울 강남구 언주로 711 건설회관 10층/15층 (㈜오피스디포코리아)",

  // 연락처
  phone: "010-9876-6010",
  phoneHref: "tel:01098766010",
  email: "dyoffice82@naver.com",

  // 외부 링크
  blogUrl: "https://blog.naver.com/dyoffice82",
  officialMall: "https://www.officedepot.co.kr",
  mroMall: "https://b2b.officedepot.co.kr/",

  // SEO
  title: "오피스디포 MRO | 기업 사무용품·소모품 구매 전용몰 무료 구축 · 비교견적",
  description:
    "사무용품·복사용지·탕비용품·산업 MRO 8만여 종. 오피스디포 기업 전용 MRO몰을 무료로 구축하고 승인·예산·정산까지 한 곳에서 관리하세요. 현재 구매 단가와 비교한 견적을 무료로 보내 드립니다.",
} as const;

export const nav = [
  { href: "#about", label: "회사소개" },
  { href: "#mall", label: "MRO몰 기능" },
  { href: "#price", label: "비교견적" },
  { href: "#cases", label: "도입사례" },
  { href: "#logistics", label: "물류·배송" },
  { href: "#faq", label: "FAQ" },
] as const;
