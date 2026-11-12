import Image from "next/image";
import { ArrowIcon, CheckIcon } from "../icons";

// 실제 오피스디포 B2B몰 화면. 공개용으로 고객사명·담당자·주문번호·본사 연락처 영역은 흐리게 처리했습니다.
const features = [
  { title: "우리 회사 로고·전용 주소", desc: "로그인 화면부터 회사 로고와 배너가 들어간 전용몰로 열립니다." },
  { title: "필요한 품목만 노출", desc: "자주 사는 품목·카테고리 위주로 구성하고, 불필요한 상품은 숨깁니다." },
  { title: "승인 결재·부서별 예산", desc: "직원이 주문하면 관리자가 승인하고, 부서·직원별 예산 안에서만 구매합니다." },
  { title: "직원 계정 직접 관리", desc: "직원 계정을 만들고, 퇴사·이동 시 바로 사용 중지할 수 있습니다." },
  { title: "구매 내역·정산 엑셀", desc: "누가 무엇을 샀는지 조회하고, 정산 자료를 엑셀로 내려받습니다." },
  { title: "월 1회 세금계산서·법인카드", desc: "한 달 구매분을 묶어 정산하고, 지사·현장은 법인카드로 결제합니다." },
];


function Shot({ src, alt, width, height, url }: { src: string; alt: string; width: number; height: number; url: string }) {
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
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" sizes="(min-width: 1024px) 560px, 100vw" />
    </div>
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
        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1.15fr] lg:gap-5">
          <figure>
            <Shot src="/mall/login.webp" alt="오피스디포 B2B 전용몰 로그인 화면" width={804} height={622} url="오피스디포 B2B 전용몰 · 로그인" />
            <figcaption className="mt-3 text-center text-sm font-bold">
              <span className="mr-1.5 rounded-full bg-brand px-2 py-0.5 text-xs text-white">STEP 1</span>
              오피스디포 B2B 전용몰 로그인 화면
            </figcaption>
          </figure>
          <div className="flex justify-center text-brand">
            <span className="flex items-center gap-1.5 rounded-full bg-brand-soft px-4 py-2 text-sm font-bold">
              로그인하면 <ArrowIcon className="h-4 w-4 rotate-90 lg:rotate-0" />
            </span>
          </div>
          <figure>
            <Shot src="/mall/mall.webp" alt="로그인 후 오피스디포 B2B 전용몰 메인 화면" width={1008} height={819} url="오피스디포 B2B 전용몰 · 메인" />
            <figcaption className="mt-3 text-center text-sm font-bold">
              <span className="mr-1.5 rounded-full bg-brand px-2 py-0.5 text-xs text-white">STEP 2</span>
              우리 회사 품목·주문 현황·승인이 한 화면에
            </figcaption>
          </figure>
        </div>
        <p className="mt-4 text-center text-xs text-muted">* 실제 오피스디포 B2B몰 화면이며, 고객사 정보는 가렸습니다. 회사별 구성에 따라 화면은 다를 수 있습니다.</p>

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
