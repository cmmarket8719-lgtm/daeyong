import { CheckIcon } from "../icons";

// 에이전시를 통해도 거래 당사자는 오피스디포 본사라는 점을 보여 주는 블록.
// ※ 단가는 본사 직거래와 동일하지 않으므로 '단가 동일'이라는 표현은 쓰지 않습니다.
const items = [
  { k: "계약", v: "오피스디포 본사와 직접 체결" },
  { k: "세금계산서", v: "오피스디포 본사 발행" },
  { k: "배송", v: "오피스디포 물류센터·직배송" },
  { k: "반품·A/S", v: "오피스디포 전담 파트 처리" },
  { k: "전용 B2B몰", v: "오피스디포 본사 시스템 제공" },
];

export default function DirectContract() {
  return (
    <section id="direct" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 rounded-3xl bg-ink p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14">
          <div>
            <p className="text-sm font-bold tracking-wide text-sun">DIRECT CONTRACT</p>
            <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-4xl">
              계약부터 세금계산서까지,
              <br />
              <span className="text-sun">오피스디포 본사</span>와 직접 거래합니다
            </h2>
            <p className="mt-5 leading-relaxed text-white/75 sm:text-lg">
              에이전시를 통한다고 중간 업체와 거래하는 것이 아닙니다. 계약과 정산, 배송과 반품은 모두 오피스디포 본사가
              직접 맡고, 저희는 상담·견적·도입·이후 관리를 1:1로 책임집니다.
            </p>
          </div>

          <div>
            <ul className="divide-y divide-white/10 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              {items.map((it) => (
                <li key={it.k} className="flex items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5">
                  <CheckIcon className="h-5 w-5 shrink-0 text-sun" />
                  <span className="w-[4.5rem] shrink-0 text-xs text-white/60 sm:w-24 sm:text-sm">{it.k}</span>
                  <span className="font-bold">{it.v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-3 rounded-2xl bg-brand px-4 py-4 sm:gap-4 sm:px-5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-brand">+</span>
              <span className="w-[4.5rem] shrink-0 text-xs text-white/80 sm:w-24 sm:text-sm">여기에 더해</span>
              <span className="font-black">전담 담당자 1:1 관리</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
