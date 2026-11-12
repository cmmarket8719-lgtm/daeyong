// 특정 회사 이름을 넣지 않고 "오픈마켓·일반 쇼핑몰" 전체와 비교합니다.
// (비교광고 분쟁 위험 + 오피스디포가 쿠팡 MRO몰에도 공급하는 관계라서)
const rows = [
  { k: "가격", open: "그날그날 최저가를 검색해서 구매", od: "자주 사는 품목은 계약 단가로 고정, 대량 품목은 별도 단가" },
  { k: "판매자·품질", open: "같은 상품도 판매자마다 품질·배송이 다름", od: "오피스디포가 직접 공급, 입고·출고 3단계 검수" },
  { k: "정산", open: "주문마다 결제하고 증빙을 따로 정리", od: "한 달 구매분을 묶어 월 1회 세금계산서" },
  { k: "구매 관리", open: "개인 계정으로 주문, 승인·예산 기능 없음", od: "승인 결재, 부서별 예산, 구매 내역 엑셀 다운로드" },
  { k: "응대", open: "고객센터·판매자에게 건별로 문의", od: "전담 담당자 한 사람이 견적부터 반품까지 처리" },
  { k: "제작·출력", open: "명함·현수막·판촉물은 다른 업체를 따로 찾아야 함", od: "카피센터·판촉팀에서 같은 거래처로 함께 처리" },
  { k: "긴급 대응", open: "택배 일정에 맞출 수밖에 없음", od: "직배송 차량과 가까운 직영점에서 긴급 지원" },
];

export default function Compare() {
  return (
    <section id="compare" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-sun">OPEN MARKET VS OFFICE DEPOT</p>
          <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-4xl">
            “오픈마켓에서 사면 되지 않나요?”
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            한두 개 살 때는 오픈마켓이 편합니다. 하지만 매달 반복해서 사는 회사라면 이야기가 달라집니다.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl ring-1 ring-white/10 md:block">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr>
                <th className="w-36 bg-white/5 px-6 py-4 text-sm font-medium text-white/60">구분</th>
                <th className="bg-white/5 px-6 py-4 font-bold text-white/80">오픈마켓·일반 쇼핑몰</th>
                <th className="bg-brand px-6 py-4 font-black text-white">오피스디포 기업 거래</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="border-t border-white/10">
                  <th className="px-6 py-4 font-bold text-white/90">{r.k}</th>
                  <td className="px-6 py-4 text-white/60">{r.open}</td>
                  <td className="bg-brand/10 px-6 py-4 font-medium text-white">{r.od}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <ul className="mt-10 space-y-3 md:hidden">
          {rows.map((r) => (
            <li key={r.k} className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="font-black text-sun">{r.k}</p>
              <p className="mt-2 text-sm text-white/55">
                <span className="mr-1.5 rounded bg-white/10 px-1.5 py-0.5 text-xs">오픈마켓</span>
                {r.open}
              </p>
              <p className="mt-2 text-[15px] font-medium text-white">
                <span className="mr-1.5 rounded bg-brand px-1.5 py-0.5 text-xs font-bold">오피스디포</span>
                {r.od}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
