// 사이트에 공개하는 대표 품목 단가 (전체 70개 단가표는 공개하지 않고, 견적 의뢰 시 개별 발송)
// 단가가 바뀌면 이 파일만 고치면 됩니다.

export const priceBasis = {
  date: "2026년 11월",
  vat: "부가세 포함",
  note: "수량·배송지·거래 조건에 따라 달라질 수 있습니다.",
  fullListCount: 70,
};

// image: public/products/{code}.webp (오피스디포 공식몰 상품 이미지). 없으면 아이콘으로 표시
export type PriceItem = { code: string; category: string; name: string; spec: string; price: number; image?: boolean };

export const samplePrices: PriceItem[] = [
  { code: "100800", category: "복사용지", name: "오피스디포 복사용지 A4 75g", spec: "500매×5권 / 박스", price: 19900, image: true },
  { code: "100810", category: "복사용지", name: "오피스디포 복사용지 A4 80g", spec: "500매×5권 / 박스", price: 20500, image: true },
  { code: "314030", category: "문구", name: "포스트-잇 알뜰팩 653-9A", spec: "3M", price: 4300, image: true },
  { code: "500021", category: "필기구", name: "모나미 플러스펜 3000 (흑)", spec: "12자루", price: 3600, image: true },
  { code: "312140", category: "문구", name: "스카치 매직테이프 810D", spec: "18mm×30M / 3M", price: 3700 },
  { code: "313311", category: "포장", name: "박스테이프 (투명)", spec: "50mm×40M", price: 700, image: true },
  { code: "503341", category: "필기구", name: "보드마카 (흑색)", spec: "1자루 / FORAY", price: 350 },
  { code: "800540", category: "생활용품", name: "에너자이저 맥스 건전지 AA", spec: "12+4입 / 알카라인", price: 12380, image: true },
  { code: "803380", category: "탕비·위생", name: "깨끗한나라 3겹 데코화장지", spec: "28m×30롤", price: 18300, image: true },
  { code: "831399", category: "탕비·위생", name: "베스토 물티슈 100매", spec: "캡형", price: 990, image: true },
];
