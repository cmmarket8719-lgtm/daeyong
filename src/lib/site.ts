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
  logo: "/brand/officedepot-logo.png", // 713x119
  footerRole: "공식 세일즈에이전시",
  // 상품 공급사(본사) 정보 — 푸터에 '공급사'로 표시
  supplierName: "(주)오피스디포코리아",
  supplierAddress: "서울시 강남구 언주로 711, 10층(논현동, 건설회관)",
  brandEn: "Office Depot",

  // 연락처 (전화 하나만 사용, 이메일 없음)
  phone: "02-2038-9996", // 임시 번호 (이전: 010-7575-8949)
  phoneHref: "tel:0220389996",

  // 외부 링크
  blogUrl: "https://blog.naver.com/helpoffice1",

  // SEO
  title: "오피스디포 공식 세일즈에이전트 | 기업 사무용품·MRO 구매 상담",
  description:
    "오피스디포 공식 세일즈에이전트가 기업 사무용품, 소모품, MRO 구매와 구매대행을 1:1로 상담해 드립니다. 비교견적부터 MRO몰 도입까지 전화 한 통으로 시작하세요.",
} as const;

export const nav = [
  { href: "#benefit", label: "도입 효과" },
  { href: "#mall", label: "전용몰" },
  { href: "#compare", label: "오픈마켓 비교" },
  { href: "#services", label: "취급 품목" },
  { href: "#process", label: "거래 절차" },
  { href: "#clients", label: "고객사" },
] as const;

// 오피스디포 브랜드 지표 (출처: 2026 오피스디포 B2B 제안서). 수치가 바뀌면 여기만 고치면 됩니다.
export const brandStats = [
  { value: "1998", unit: "년", label: "설립" },
  { value: "1,830", unit: "억원", label: "연 매출 · 업계 1위" },
  { value: "1,300", unit: "여 곳", label: "거래 법인 고객" },
  { value: "8만", unit: "여 종", label: "취급 상품" },
  { value: "20", unit: "개", label: "직영점 (업계 최다)" },
  { value: "68", unit: "대", label: "직배송 차량" },
] as const;

export const statsNote = "오피스디포 2026 B2B 제안서 기준 (매출은 2024년 결산)";
