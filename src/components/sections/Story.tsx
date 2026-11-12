export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#161616] py-20 text-white sm:py-28">
      {/* 은은한 배경: 사무실 책상 느낌의 격자 + 빛 번짐 */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div aria-hidden className="absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.25em] text-white/50 sm:text-sm">OUR STORY</p>
          <h2 className="mt-4 text-[30px] font-black leading-[1.3] tracking-tight sm:text-5xl sm:leading-[1.25]">
            회사 소모품 비용,
            <br />
            왜 줄지 않을까요?
          </h2>

          <div className="mt-10 space-y-6 text-[16px] leading-[1.9] text-white/75 sm:text-lg">
            <p>
              기업 총무·구매 담당자분들과 이야기하며 알게 됐습니다. 요즘 많은 회사가 커피·생수 같은 식음료와
              화장지·세제 같은 생활용품, 사무용품까지 <strong className="text-white">인터넷 오픈마켓에서 법인카드로</strong> 삽니다. 빠르고 편하니까요. 필요한 것
              하나를 사러 들어갔다가, 이것저것 함께 담아 결제하는 일이 자연스럽게 생깁니다.
            </p>
            <p>
              문제는 비용을 내는 회사 입장입니다. 누가 무엇을, 얼마짜리를, 몇 개나 사는지 정해진 기준이 없고 확인할
              방법도 마땅치 않습니다. 담당자도 문제인 줄 알지만, 편리함 때문에 그대로 두게 됩니다. 그렇게
              <strong className="text-white"> 비용 통제도, 상품 통제도 되지 않는 구조</strong>가 굳어집니다.
            </p>
            <p>
              누구의 잘못도 아닙니다. 개인 쇼핑처럼 쉬운 <strong className="text-white">구매 방식</strong>이 원인입니다.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-5">
          <p className="relative max-w-full rounded-[2rem] bg-sun px-6 py-4 text-[15px] font-medium text-ink shadow-lg sm:px-8 sm:py-5 sm:text-lg">
            그래서 저희는 <b className="font-black">‘싸게 사는 법’보다 ‘관리하며 사는 법’</b>을 제안합니다
            <span aria-hidden className="absolute -bottom-2 left-8 h-5 w-5 rotate-45 bg-sun" />
          </p>
          <p className="relative max-w-full rounded-[2rem] bg-sun px-6 py-4 text-[15px] font-medium text-ink shadow-lg sm:ml-10 sm:px-8 sm:py-5 sm:text-lg">
            오피스디포와 거래한다는 것은 단순한 비용 절감이 아니라,
            <br className="hidden sm:block" />
            <b className="font-black"> 회사 전체 구매 비용을 통제하고 관리하는 것</b>입니다
            <span aria-hidden className="absolute -bottom-2 left-8 h-5 w-5 rotate-45 bg-sun" />
          </p>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
          {[
            ["비용 통제", "팀별 예산 한도 안에서만 구매"],
            ["상품 통제", "업무에 필요한 품목만 노출"],
            ["내역 관리", "누가 무엇을 샀는지 한눈에"],
          ].map(([k, v]) => (
            <div key={k} className="bg-[#161616]/90 px-6 py-6">
              <dt className="text-lg font-black text-sun">{k}</dt>
              <dd className="mt-1 text-white/70">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
