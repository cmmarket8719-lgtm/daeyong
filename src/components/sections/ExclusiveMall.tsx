import { ArrowIcon, CheckIcon } from "../icons";

// 실제 고객사 화면 대신 구성만 보여주는 목업입니다. 회사명·주문 데이터는 모두 예시입니다.
const SAMPLE_CO = "○○주식회사";

const features = [
  { title: "우리 회사 로고·전용 주소", desc: "로그인 화면부터 회사 로고와 배너가 들어간 전용몰로 열립니다." },
  { title: "필요한 품목만 노출", desc: "자주 사는 품목·카테고리 위주로 구성하고, 불필요한 상품은 숨깁니다." },
  { title: "승인 결재·부서별 예산", desc: "직원이 주문하면 관리자가 승인하고, 부서·직원별 예산 안에서만 구매합니다." },
  { title: "직원 계정 직접 관리", desc: "직원 계정을 만들고, 퇴사·이동 시 바로 사용 중지할 수 있습니다." },
  { title: "구매 내역·정산 엑셀", desc: "누가 무엇을 샀는지 조회하고, 정산 자료를 엑셀로 내려받습니다." },
  { title: "월 1회 세금계산서·법인카드", desc: "한 달 구매분을 묶어 정산하고, 지사·현장은 법인카드로 결제합니다." },
];

const categories = ["복사용지/지류", "식음료", "사무용품", "파일/바인더", "필기구", "생활용품", "사무기기", "산업/MRO자재", "잉크/토너", "출력/인쇄/제작"];

const orders = [
  { date: "11-06", amount: "65,000", status: "배송완료" },
  { date: "11-04", amount: "57,940", status: "배송완료" },
  { date: "11-03", amount: "128,300", status: "승인대기" },
];

const popular = [
  { name: "A4 복사용지", color: "bg-sky-100" },
  { name: "종이컵", color: "bg-amber-100" },
  { name: "미용티슈", color: "bg-emerald-100" },
  { name: "롤화장지", color: "bg-pink-100" },
];

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10">
      <div className="flex items-center gap-2 border-b border-line bg-paper px-3 py-2">
        <span className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 flex-1 truncate rounded bg-white px-2 py-0.5 text-[10px] text-muted ring-1 ring-line sm:text-[11px]">{url}</span>
      </div>
      {children}
    </div>
  );
}

function LoginMock() {
  return (
    <BrowserFrame url="https://○○company.b2b-mall.co.kr">
      <div className="relative h-36 overflow-hidden bg-[#2563eb] p-4 text-white sm:h-44">
        <span className="inline-flex h-7 items-center rounded bg-white px-2 text-[11px] font-black text-[#2563eb]">우리 회사 로고</span>
        <p className="mt-4 text-[11px] font-bold opacity-90 sm:text-xs">임직원 전용 구매몰</p>
        <p className="text-xl font-black leading-tight sm:text-2xl">{SAMPLE_CO}</p>
        <span aria-hidden className="absolute -bottom-6 right-4 h-24 w-28 skew-x-[-8deg] rounded bg-brand shadow-lg sm:h-28 sm:w-36" />
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-2 p-3 sm:p-4">
        <div className="space-y-1.5">
          <div className="h-7 rounded border border-line px-2 text-[11px] leading-7 text-muted">ID</div>
          <div className="h-7 rounded border border-line px-2 text-[11px] leading-7 text-muted">PASSWORD</div>
        </div>
        <div className="flex w-20 items-center justify-center rounded bg-ink text-xs font-bold text-white sm:w-24">로그인</div>
      </div>
      <div className="grid grid-cols-3 border-t border-line text-center text-[10px] text-muted sm:text-[11px]">
        <span className="py-2">회사 소개</span>
        <span className="border-x border-line py-2">B2B 솔루션</span>
        <span className="py-2">원격지원</span>
      </div>
    </BrowserFrame>
  );
}

function MallMock() {
  return (
    <BrowserFrame url="https://○○company.b2b-mall.co.kr/main">
      <div className="flex items-center justify-between gap-2 border-b border-line px-3 py-2">
        <span className="text-xs font-black tracking-tight text-[#1e3a8a] sm:text-sm">우리 회사 로고</span>
        <span className="hidden h-6 flex-1 rounded border border-line sm:block sm:max-w-[40%]" />
        <span className="text-[10px] text-muted sm:text-[11px]">
          <b className="text-brand">{SAMPLE_CO}</b> 김*리 님
        </span>
      </div>
      <div className="flex items-center gap-1 border-b-2 border-ink text-[10px] sm:text-[11px]">
        <span className="bg-ink px-2 py-1.5 font-bold text-white sm:px-3">≡ 상품 카테고리</span>
        <span className="px-1.5 text-muted">장바구니</span>
        <span className="px-1.5 text-muted">주문배송조회</span>
        <span className="ml-auto mr-1 rounded bg-sky-500 px-1.5 py-0.5 font-bold text-white">승인정보</span>
        <span className="mr-1 rounded bg-ink px-1.5 py-0.5 font-bold text-white">관리자</span>
      </div>
      <div className="grid grid-cols-[84px_1fr] sm:grid-cols-[104px_1fr]">
        <ul className="border-r border-line text-[9.5px] text-ink/80 sm:text-[10.5px]">
          {categories.map((c) => (
            <li key={c} className="truncate border-b border-line px-2 py-[5px]">
              · {c}
            </li>
          ))}
        </ul>
        <div className="space-y-2.5 p-2 sm:p-3">
          <div className="flex h-12 items-center rounded bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] px-3 text-[11px] font-bold text-white sm:h-14 sm:text-xs">
            회사 배너 · 공지사항 영역
          </div>
          <div>
            <p className="mb-1 text-[10.5px] font-bold sm:text-[11px]">▌최근 주문 현황</p>
            <table className="w-full text-center text-[9.5px] sm:text-[10.5px]">
              <thead className="bg-paper text-muted">
                <tr>
                  <th className="py-1 font-medium">주문일</th>
                  <th className="font-medium">금액</th>
                  <th className="font-medium">상태</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.date + o.amount} className="border-b border-line">
                    <td className="py-1">{o.date}</td>
                    <td>{o.amount}원</td>
                    <td className={o.status === "승인대기" ? "font-bold text-brand" : ""}>{o.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="mb-1 text-center text-[10.5px] font-bold sm:text-[11px]">
              우리 회사에서 <span className="text-[#2563eb]">많이 구매하는 상품</span>
            </p>
            <div className="grid grid-cols-4 gap-1.5">
              {popular.map((p) => (
                <div key={p.name} className="rounded border border-line p-1 text-center">
                  <div className={`h-8 rounded ${p.color} sm:h-10`} />
                  <p className="mt-1 truncate text-[9px] sm:text-[10px]">{p.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export default function ExclusiveMall() {
  return (
    <section id="mall" className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-brand">EXCLUSIVE B2B MALL</p>
          <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-4xl">
            우리 회사만 쓰는
            <br /> <span className="text-brand">전용 B2B 쇼핑몰</span>을 만들어 드립니다
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            많은 기업이 오피스디포 B2B몰로 사무용품을 구매합니다. 여기에 회사 로고와 우리 회사 품목, 승인·예산 규칙을 입힌
            <strong className="text-ink"> 단독 구매몰</strong>을 열어 드립니다.
          </p>
        </div>

        {/* 로그인 → 전용몰 화면 */}
        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[0.85fr_auto_1.15fr] lg:gap-5">
          <figure>
            <LoginMock />
            <figcaption className="mt-3 text-center text-sm font-bold">
              <span className="mr-1.5 rounded-full bg-brand px-2 py-0.5 text-xs text-white">STEP 1</span>
              회사 로고가 들어간 전용 로그인 화면
            </figcaption>
          </figure>
          <div className="flex justify-center text-brand">
            <span className="flex items-center gap-1.5 rounded-full bg-brand-soft px-4 py-2 text-sm font-bold">
              로그인하면 <ArrowIcon className="h-4 w-4 rotate-90 lg:rotate-0" />
            </span>
          </div>
          <figure>
            <MallMock />
            <figcaption className="mt-3 text-center text-sm font-bold">
              <span className="mr-1.5 rounded-full bg-brand px-2 py-0.5 text-xs text-white">STEP 2</span>
              우리 회사 품목·주문 현황·승인이 한 화면에
            </figcaption>
          </figure>
        </div>
        <p className="mt-4 text-center text-xs text-muted">* 이해를 돕기 위한 예시 화면입니다. 실제 화면은 회사별 구성에 따라 다릅니다.</p>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="flex gap-3 rounded-2xl bg-paper p-5">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-bold">{f.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-brand/40 px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-4">
          <span className="rounded-full bg-brand px-3 py-1 text-sm font-black text-white">구축 기간</span>
          <p className="font-bold">
            계약 후 <span className="text-brand">약 20일 이내</span> 전용몰을 열고, 담당자가 품목·단가 등록까지 세팅해 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
