// 사이트 전체에서 쓰는 회사·연락처 정보는 이 파일 한 곳에서만 관리합니다.
// [ ]로 표시된 값은 아직 확정되지 않은 임시 값입니다.

export const site = {
  // 운영 주체
  agentName: "[상호명]", // 예: ○○상사 — 확정되면 교체
  ownerName: "[대표자명]", // 확정되면 교체
  bizNumber: "", // 에이전트 본인 사업자등록번호(선택). 비워 두면 표시하지 않음
  role: "오피스디포 공식 세일즈에이전트",

  // 브랜드
  brand: "오피스디포",
  brandEn: "Office Depot",

  // 연락처 (전화 하나만 사용, 이메일 없음)
  phone: "010-7575-8949",
  phoneHref: "tel:01075758949",

  // 외부 링크
  blogUrl: "https://blog.naver.com/helpoffice1",

  // SEO
  title: "오피스디포 공식 세일즈에이전트 | 기업 사무용품·MRO 구매 상담",
  description:
    "오피스디포 공식 세일즈에이전트가 기업 사무용품, 소모품, MRO 구매와 구매대행을 1:1로 상담해 드립니다. 비교견적부터 MRO몰 도입까지 전화 한 통으로 시작하세요.",
} as const;

export const nav = [
  { href: "#about", label: "소개" },
  { href: "#services", label: "서비스" },
  { href: "#process", label: "진행 절차" },
  { href: "#cases", label: "도입 사례" },
  { href: "#contact", label: "문의" },
] as const;
