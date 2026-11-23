// 기업다이어리제작 페이지 데이터
// 출처: 디와이오피스 2027 상품 카탈로그(A·B), 디와이오피스 실물·제작 사례 사진.
// 가격은 수량·인쇄 사양에 따라 달라서 사이트에 싣지 않고 견적으로 안내합니다.

export const maker = {
  name: "디와이오피스",
  slogan: "좋은 기억을 담아, 기록의 가치를 만드는 기업",
  headline: "품질을 설계하고, 신뢰를 완성합니다",
  intro:
    "디자인부터 인쇄, 제본, 후가공, 납품까지 한 번에 맡아 진행합니다. 합리적인 가격과 탁월한 품질, 그리고 믿을 수 있는 납기로 최선을 다합니다.",
};

export const makerSteps = [
  { no: "01", title: "디자인", desc: "다이어리·캘린더·노트·책자·브로셔 디자인" },
  { no: "02", title: "인쇄", desc: "옵셋 2색·4색·5색, 로터리 프레스 인쇄" },
  { no: "03", title: "후가공", desc: "박(마킹)·톰슨·각종 코팅·표지 가공 일체·수작업" },
  { no: "04", title: "제본", desc: "트윈링·무선·양장·중철 제본" },
] as const;

export const whyDiary = [
  { title: "1년 내내 책상 위에", desc: "판촉물은 서랍에 들어가도, 다이어리는 365일 펼쳐집니다. 회사 이름도 그만큼 자주 보입니다." },
  { title: "신년 인사로 딱 좋은 선물", desc: "임직원 연말 선물, 거래처 신년 인사, 신입사원 웰컴 선물로 부담 없이 고급스럽습니다." },
  { title: "우리 회사만의 디자인", desc: "표지 색, 로고 박 인쇄, 내지 구성, 회사 소개 페이지까지 원하는 대로 바꿀 수 있습니다." },
] as const;

export type DiaryModel = {
  code: string;
  name: string;
  image: string;
  point: string;
  cover: string; // 표지 크기
  inner: string; // 내지 구성
  format: string; // 노트식·하루식 등
};

export type DiaryLine = {
  id: string;
  name: string;
  en: string;
  summary: string;
  formats: string;
  cover: string;
  models: DiaryModel[];
};

export const diaryLines: DiaryLine[] = [
  {
    id: "hardcover",
    name: "양장 다이어리",
    en: "Hardcover",
    summary: "책처럼 단단하게 제본한 가장 기본형. 깔끔하고 오래 써도 모양이 잘 유지돼 기업 다이어리로 가장 많이 찾습니다.",
    formats: "노트식 · 하루식 · 주간식 · 포켓 수첩",
    cover: "/diary/hc-ap14.webp",
    models: [
      { code: "AP14", name: "A5 양장 다이어리", image: "/diary/hc-ap14.webp", point: "고급스러운 커버, 다양한 컬러와 수납공간. 가장 무난하게 많이 고르는 제품", cover: "150×210mm", inner: "백색모조 80g · 272p", format: "노트식" },
      { code: "AP9", name: "A5 양장 다이어리", image: "/diary/hc-ap9.webp", point: "심플하고 모던한 디자인. IT·화학·테크·미디어 업종에서 선호", cover: "134×210mm", inner: "백색모조 80g · 224p", format: "노트식" },
      { code: "AP19", name: "32절 양장 다이어리", image: "/diary/hc-ap19.webp", point: "투톤 커버 디자인에 내부 포켓, 밴드로 마무리", cover: "128×190mm", inner: "백색모조 80g · 240p", format: "노트식" },
      { code: "AP34", name: "A5 양장 다이어리", image: "/diary/hc-ap34.webp", point: "표지 밴딩에 휴대폰·펜을 끼울 수 있는 유니크한 디자인. 내지 옆면 컬러 인쇄", cover: "144×215mm", inner: "백색모조 80g · 224p", format: "노트식" },
      { code: "AP24", name: "32절 양장 다이어리", image: "/diary/hc-ap24.webp", point: "고주파·PVC 포켓 끼움식. 가볍고 실용적인 소프트커버", cover: "135×190mm", inner: "백색모조 100g · 224p", format: "노트식" },
      { code: "AP12", name: "48절 포켓 수첩", image: "/diary/hc-ap12.webp", point: "주머니에 쏙 들어가는 크기. 주간형 내지로 일정 관리가 쉬움", cover: "90×175mm", inner: "코트지 60g · 160p", format: "주간식" },
    ],
  },
  {
    id: "twinring",
    name: "트윈링 다이어리",
    en: "Twin Ring",
    summary: "스프링 제본이라 끝까지 평평하게 펼쳐져 필기하기 편합니다. 자석 덮개·포인트 커버 등 디자인 선택지가 많습니다.",
    formats: "노트식 · 이틀식 · 하루식",
    cover: "/diary/tr-ap3.webp",
    models: [
      { code: "AP3", name: "25절 트윈링 다이어리", image: "/diary/tr-ap3.webp", point: "깔끔한 디자인으로 관공서·은행·연구·보험 업종에서 선호", cover: "165×230mm", inner: "노트식 · 이틀식 · 하루식 선택", format: "노트식 / 이틀식 / 하루식" },
      { code: "AP5", name: "25절 트윈링 다이어리", image: "/diary/tr-ap5.webp", point: "포인트 커버 디자인과 다양한 수납. 외국계·CEO·VIP 선물로 선호", cover: "165×230mm", inner: "미색모조 80g 224p ~ 코트지 60g 376p", format: "노트식 / 이틀식 / 하루식" },
      { code: "AP21", name: "25절 트윈링 다이어리", image: "/diary/tr-ap21.webp", point: "투톤 컬러에 자석 고정. 한 번 보면 기억에 남는 디자인", cover: "165×230mm", inner: "노트식 · 이틀식 · 하루식 선택", format: "노트식 / 이틀식 / 하루식" },
      { code: "AP22", name: "A5 트윈링 다이어리", image: "/diary/tr-ap22.webp", point: "디자인·컬러·실용성을 모두 갖춘 자석 덮개형", cover: "153×215mm", inner: "백색모조 100g · 208p", format: "노트식" },
    ],
  },
  {
    id: "system",
    name: "시스템 다이어리",
    en: "System",
    summary: "6공 바인더 방식이라 내지를 빼고 끼울 수 있습니다. 다음 해에는 리필 내지만 바꿔 계속 쓸 수 있어 임원·VIP 선물로 좋습니다.",
    formats: "노트식 · 하루식 (리필 내지 별도)",
    cover: "/diary/sy-ap7.webp",
    models: [
      { code: "AP7", name: "A5 6공 시스템 다이어리", image: "/diary/sy-ap7.webp", point: "고급스러운 디자인, 눈금자·내지 보호대 포함. 내지 교체가 가능한 실속형", cover: "180×233mm", inner: "미색모조 80g 224p / 코트지 60g 376p", format: "노트식 / 하루식" },
      { code: "AP6", name: "32절 6공 시스템 다이어리", image: "/diary/sy-ap6.webp", point: "눈금자·내지 보호대 포함, 다양한 수납공간. 내지 교체 가능", cover: "155×200mm", inner: "미색모조 80g · 224p", format: "노트식" },
    ],
  },
];

export const customOptions = [
  { title: "표지 박 인쇄", desc: "로고와 회사명을 금박·은박·동박·먹박이나 형압으로 새깁니다. 두 가지 박을 섞어 쓸 수도 있어요.", image: "/diary/foil.webp" },
  { title: "내지 구성", desc: "월간+노트식, 하루식, 주간식, 이틀식 중에 고르고, 회사 소개·연간 일정·광고 페이지를 넣을 수 있습니다.", image: "/diary/real-monthly.webp" },
  { title: "케이스 · 포장", desc: "쉬링크(압축비닐), 터널 케이스, 상자형, 파우치 등. 선물용 세트 박스도 만들 수 있습니다.", image: "/diary/custom-2.webp" },
  { title: "가름끈 · 수납", desc: "가름끈 색을 표지에 맞춰 고르고, 카드·명함 포켓, 펜 꽂이 구성도 모델마다 다르게 고를 수 있습니다.", image: "/diary/real-pocket.webp" },
] as const;

export const orderSteps = [
  { title: "원단·컬러 선택", desc: "표지 원단과 색을 고릅니다. 실물 샘플을 보고 결정하셔도 됩니다." },
  { title: "다이어리 종류·디자인", desc: "양장·트윈링·시스템 중에서 모델과 크기(절수)를 정합니다." },
  { title: "내지 구성 선택", desc: "노트식·하루식·주간식 등 내지와 추가 페이지를 정합니다." },
  { title: "인쇄 사양", desc: "로고 박 종류, 1도·4도·별색 인쇄 등 표지와 내지 인쇄를 정합니다." },
  { title: "포장·배송", desc: "케이스와 포장 방법, 화물·택배 배송 방법을 정하면 제작이 시작됩니다." },
] as const;

export const orderNotes = [
  "인쇄 기본 수량: 트윈링(스프링)·시스템 200부, 양장·수첩 500부",
  "기본 수량보다 적게 주문하셔도 제작할 수 있습니다 (소량 인쇄 비용이 추가돼요)",
  "광고 삽입 페이지는 접지가 가능하도록 인쇄해 주시고, 여분을 넉넉히 준비해 주세요",
  "연말에는 주문이 몰리니 일정은 미리 상담해 주시는 게 좋습니다",
] as const;

export type DiaryCase = {
  id: string;
  label: string; // A고객사
  industry: string;
  title: string;
  desc: string;
  photos: string[];
};

// 사진 파일 이름 기준: A고객사_건설사_제작사례1~8, B고객사_도매회사_제작사례1~6, C고객사_협회사_제작사례1~2
export const diaryCases: DiaryCase[] = [
  {
    id: "a",
    label: "A고객사",
    industry: "건설사",
    title: "세 가지 색으로 고른 양장 다이어리",
    desc: "그린·블루·핑크 세 가지 색 표지에 회사 로고를 박으로 넣었습니다. 2026년에 이어 2027년 다이어리도 함께 만든 곳입니다.",
    photos: ["/diary/case-a-7.webp", "/diary/case-a-2.webp", "/diary/case-a-4.webp", "/diary/case-a-5.webp", "/diary/case-a-1.webp", "/diary/case-a-3.webp", "/diary/case-a-6.webp", "/diary/case-a-8.webp"],
  },
  {
    id: "b",
    label: "B고객사",
    industry: "도매회사",
    title: "회사 로고 색에 맞춘 오렌지 다이어리",
    desc: "로고 색과 같은 오렌지로 표지를 고르고, 로고와 회사 슬로건을 표지에 새겼습니다. 안쪽은 카드 포켓과 이름표 창이 있는 트윈링 구성이고, 2026년에 이어 두 해째 함께했습니다.",
    photos: ["/diary/case-b-6.webp", "/diary/case-b-1.webp", "/diary/case-b-2.webp", "/diary/case-b-5.webp", "/diary/case-b-4.webp", "/diary/case-b-3.webp"],
  },
  {
    id: "c",
    label: "C고객사",
    industry: "협회사",
    title: "짙은 그린에 기관명을 형압으로",
    desc: "격식 있는 짙은 그린 원단에 기관 로고와 국·영문 이름을 형압으로 깔끔하게 넣었습니다. 펜 꽂이가 달린 양장 다이어리입니다.",
    photos: ["/diary/case-c-1.webp", "/diary/case-c-2.webp"],
  },
];

export const realPhotos = [
  { src: "/diary/real-colors.webp", alt: "디와이오피스 2027 기성 다이어리 8종 실물을 색깔별로 늘어놓은 사진" },
  { src: "/diary/real-stack.webp", alt: "가름끈이 달린 다이어리 여러 권을 쌓아 놓은 실물 사진" },
  { src: "/diary/real-cover.webp", alt: "네이비 가죽 질감 트윈링 다이어리 표지 실물" },
  { src: "/diary/real-pocket.webp", alt: "다이어리 안쪽 카드 포켓과 이름표 창 실물" },
  { src: "/diary/real-monthly.webp", alt: "트윈링 다이어리 월간 일정 페이지 실물" },
  { src: "/diary/real-open.webp", alt: "그린·베이지 다이어리와 펼친 노트 페이지 실물" },
] as const;

export const diaryFaqs = [
  {
    q: "몇 권부터 주문할 수 있나요?",
    a: "인쇄 기본 수량은 트윈링·시스템 200부, 양장·수첩 500부입니다. 그보다 적게도 만들 수 있고, 이 경우 소량 인쇄 비용이 조금 추가됩니다. 인쇄 없이 기성 다이어리만 필요하시면 더 적은 수량도 상담해 드려요.",
  },
  {
    q: "로고는 어떻게 들어가나요?",
    a: "표지에 금박·은박·동박·먹박 같은 박 인쇄나 형압(눌러 찍기)으로 넣습니다. 로고 파일(ai 권장)을 보내 주시면 시안을 먼저 보여 드리고 진행합니다.",
  },
  {
    q: "실물을 보고 고를 수 있나요?",
    a: "네. 카탈로그와 기성 다이어리 샘플을 보시고 결정하실 수 있도록 안내해 드립니다. 원단 색상표도 함께 확인하실 수 있어요.",
  },
  {
    q: "내지에 회사 일정이나 소개 페이지를 넣을 수 있나요?",
    a: "가능합니다. 회사 소개, 연간 행사 일정, 조직도, 광고 페이지 등을 앞뒤에 추가할 수 있습니다. 내지 구성은 노트식·하루식·주간식 중에서 고르실 수 있습니다.",
  },
  {
    q: "견적은 어떻게 받나요?",
    a: "원하시는 모델(또는 크기), 수량, 로고 인쇄 방식, 납품 희망일을 알려 주시면 디와이오피스에서 확인해 견적을 보내 드립니다. 사무용품 상담과 함께 문의하셔도 됩니다.",
  },
] as const;
