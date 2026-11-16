import Image from "next/image";
import Link from "next/link";
import { Note } from "@/components/ui";
import { ArrowIcon, DocIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";

const strengths = [
  {
    no: "01",
    title: "같은 물건, 더 낮은 단가",
    body: "기업 할인가에 자주 사는 품목은 따로 견적을 냅니다. 서울 용산의 한 IT기업은 쓰던 품목 그대로 비교했더니 쿠팡보다 17% 낮게 나왔어요.",
    figure: "-17%",
    figureNote: "쿠팡 대비, 실제 견적",
    href: "/price",
    link: "단가 비교 보기",
  },
  {
    no: "02",
    title: "우리 회사 전용 구매몰, 무료",
    body: "직원은 몰에서 담고, 팀장님이 승인하고, 총무팀은 월말에 엑셀 한 번 받으면 끝납니다. 부서별 예산도 걸어 둘 수 있어요.",
    figure: "0원",
    figureNote: "구축·운영비, 위약 조항 없음",
    href: "/mall",
    link: "MRO몰 기능 보기",
  },
  {
    no: "03",
    title: "오늘 주문, 내일 도착",
    body: "서울·경기·부산은 오피스디포 배송 기사님이 직접 갖다 드립니다. 그 외 지역은 CJ대한통운으로 나가고, 배송비는 받지 않아요.",
    figure: "68대",
    figureNote: "자체 배송 차량",
    href: "/products#delivery",
    link: "상품·배송 보기",
  },
];

const miniCases = [
  { who: "서울 용산 · 소프트웨어 회사 30명", what: "사업자등록만으로 개설, 아이디 하나로 본사·용인 사업장 같이 주문", href: "/cases" },
  { who: "경기 남양주 · 제조사 150명", what: "할인 0%·건별 배송비 내던 구매를 기업가·무료배송으로", href: "/cases" },
  { who: "인천 · 제조유통사 200명", what: "본사·서울사무소·연구소·제주공장을 몰 하나로 묶음", href: "/cases" },
];

export default function Home() {
  return (
    <>
      {/* 첫 화면 */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div>
            <p className="text-[15px] font-bold text-blue">오피스디포 기업 MRO 담당 김대용</p>
            <h1 className="mt-4 text-[34px] font-black leading-[1.28] tracking-tight sm:text-[46px]">
              회사에서 쓰는 소모품,
              <br />
              <span className="text-brand">한 곳에서</span> 싸고 편하게
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              복사용지, 탕비실 커피, 화장지부터 현장 공구까지. 지금 사시는 품목 그대로 단가를 비교해 드리고, 회사 전용
              구매몰도 무료로 열어 드립니다.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/contact" className="flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 text-lg font-bold text-white transition hover:bg-brand-dark">
                <DocIcon className="h-5 w-5" />
                무료 견적 받기
              </Link>
              <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-md border-2 border-blue px-6 py-4 text-lg font-bold text-blue transition hover:bg-blue-soft">
                <PhoneIcon className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-3 text-sm text-muted">통화가 어려우시면 문자 남겨 주세요. 확인하는 대로 연락드립니다.</p>
          </div>

          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/photos/warehouse.webp"
                alt="오피스디포 물류센터 내부. 랙마다 상품이 쌓여 있다"
                fill
                preload
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-4 rotate-[-2deg] rounded bg-white px-4 py-2 shadow-md sm:left-6">
              <Note>주문하신 물건은 여기서 출발해요</Note>
            </figcaption>
          </figure>
        </div>

        {/* 신뢰 지표: 한 줄로 */}
        <div className="border-t border-line bg-paper">
          <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-10 gap-y-2 px-4 py-5 text-[15px] sm:px-6">
            <li>
              사무용품 업계 매출 <b className="text-ink">1위</b> <span className="text-muted">(2024년 1,830억원)</span>
            </li>
            <li>
              거래 법인 <b className="text-ink">1,300여 곳</b>
            </li>
            <li>
              MRO 운영 <b className="text-ink">25년</b>
            </li>
            <li>
              취급 상품 <b className="text-ink">8만여 종</b>
            </li>
          </ul>
        </div>
      </section>

      {/* 대표 강점 3가지 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-[26px] font-black leading-snug tracking-tight sm:text-[34px]">
            바꾸시면 이 세 가지가 달라집니다
          </h2>
          <ol className="mt-10 border-t-2 border-ink">
            {strengths.map((s) => (
              <li key={s.no} className="grid gap-4 border-b border-line py-8 md:grid-cols-[64px_1fr_220px] md:items-center md:gap-8">
                <span className="text-sm font-black text-blue">{s.no}</span>
                <div>
                  <h3 className="text-xl font-black sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.body}</p>
                  <Link href={s.href} className="mt-3 inline-flex items-center gap-1 text-[15px] font-bold text-blue hover:underline">
                    {s.link} <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
                <div className="md:text-right">
                  <p className="text-4xl font-black tracking-tight text-brand sm:text-5xl">{s.figure}</p>
                  <p className="mt-1 text-sm text-muted">{s.figureNote}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 담당자 인사 */}
      <section className="bg-blue-soft py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[26px] font-black leading-snug tracking-tight sm:text-[32px]">
              견적만 받아 보셔도 괜찮습니다
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-[1.85] text-ink/85">
              <p>안녕하세요, 오피스디포에서 기업 구매를 맡고 있는 김대용입니다.</p>
              <p>
                상담하다 보면 가장 많이 듣는 말이 “바꾸고는 싶은데 보고서 만들 시간이 없다”입니다. 그래서 견적서만 드리지
                않고, 위에 올릴 도입 기안이랑 몇 개 부서만 먼저 써 보는 시범 운영안까지 같이 만들어 드려요.
              </p>
              <p>
                최근 몇 달 치 구매 내역이나 장바구니 캡처만 보내 주시면 됩니다. 비교해 보시고 아니다 싶으면 그걸로
                끝이에요.
              </p>
            </div>
            <p className="mt-6 font-pen text-[34px] leading-none text-navy">김대용 드림</p>
          </div>

          <div className="self-start rounded-lg bg-white p-6 shadow-sm ring-1 ring-line sm:p-8">
            <p className="text-sm font-bold text-muted">담당자 직통</p>
            <a href={site.phoneHref} className="mt-1 flex items-center gap-2 text-3xl font-black tracking-tight text-blue">
              <PhoneIcon className="h-7 w-7" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-2 font-bold text-ink hover:text-blue">
              <MailIcon className="h-5 w-5 text-muted" />
              {site.email}
            </a>
            <hr className="my-6 border-line" />
            <p className="font-bold">견적 받을 때 이것만 있으면 돼요</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px] text-muted">
              <li>자주 사는 품목 (거래명세서·엑셀·캡처 아무거나)</li>
              <li>한 달에 대략 얼마나 사시는지</li>
              <li>배송 받을 주소, 사업장 수</li>
            </ol>
            <Link href="/contact" className="mt-6 flex items-center justify-center gap-2 rounded-md bg-brand py-4 text-lg font-bold text-white transition hover:bg-brand-dark">
              견적 문의 남기기
            </Link>
          </div>
        </div>
      </section>

      {/* 사례 맛보기 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[26px] font-black leading-snug tracking-tight sm:text-[32px]">직접 상담했던 회사들</h2>
            <Link href="/cases" className="inline-flex items-center gap-1 text-[15px] font-bold text-blue hover:underline">
              사례 전체 보기 <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-lg bg-line ring-1 ring-line md:grid-cols-3">
            {miniCases.map((c) => (
              <li key={c.who} className="bg-white">
                <Link href={c.href} className="block h-full p-6 transition hover:bg-paper">
                  <p className="text-sm font-bold text-blue">{c.who}</p>
                  <p className="mt-2 text-[17px] font-bold leading-snug">{c.what}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 마지막 문의 */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <Link href="/contact" className="group flex items-center justify-between gap-6 border-b border-white/10 px-4 py-10 transition hover:bg-white/5 sm:px-6 md:border-b-0 md:border-r md:py-14">
            <span>
              <span className="block text-sm text-white/65">회사 정보와 품목만 남겨 주세요</span>
              <span className="mt-1 block text-2xl font-black sm:text-3xl">견적 문의</span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand transition group-hover:translate-x-1">
              <ArrowIcon className="h-6 w-6" />
            </span>
          </Link>
          <a href={site.phoneHref} className="group flex items-center justify-between gap-6 px-4 py-10 transition hover:bg-white/5 sm:px-6 md:py-14">
            <span>
              <span className="block text-sm text-white/65">바로 물어보고 싶으시면</span>
              <span className="mt-1 block text-2xl font-black sm:text-3xl">{site.phone}</span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue transition group-hover:translate-x-1">
              <PhoneIcon className="h-6 w-6" />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
