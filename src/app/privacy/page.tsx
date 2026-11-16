import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${site.title}`,
  description: `${site.agentName} 개인정보처리방침`,
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE_DATE = "2026년 11월 12일";

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-lg font-black text-ink">{children}</h2>;
}

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label={`${site.brand} 홈`}>
            <Image src={site.logo} alt={site.brand} width={713} height={119} className="h-7 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-bold text-muted hover:text-brand">
            ← 홈으로
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 text-[15px] leading-relaxed text-muted sm:px-6">
        <h1 className="text-3xl font-black text-ink">개인정보처리방침</h1>
        <p className="mt-4">
          {site.agentName}(이하 &lsquo;회사&rsquo;)는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을
          신속하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
        </p>

        <H>1. 처리하는 개인정보 항목과 수집 방법</H>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>필수: 회사명, 담당자 성함, 연락처</li>
          <li>선택: 이메일, 배송지 주소, 임직원 수, 관심 품목, 요청사항</li>
          <li>수집 방법: 홈페이지 견적 의뢰 양식</li>
        </ul>

        <H>2. 개인정보의 처리 목적</H>
        <p className="mt-3">견적서 작성·발송, 거래 상담 및 이에 따른 연락. 이 목적 외의 용도로는 이용하지 않습니다.</p>

        <H>3. 보유 및 이용 기간</H>
        <p className="mt-3">
          상담 완료 후 1년간 보유한 뒤 지체 없이 파기합니다. 다만 거래가 시작되면 관계 법령(전자상거래법, 국세기본법 등)에서 정한
          기간 동안 보관합니다.
        </p>

        <H>4. 제3자 제공</H>
        <p className="mt-3">회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 법령에 특별한 규정이 있는 경우는 예외로 합니다.</p>

        <H>5. 처리 위탁 및 국외 이전</H>
        <p className="mt-3">원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하며, 이 과정에서 개인정보가 국외로 이전됩니다.</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead className="bg-paper text-ink">
              <tr>
                {["수탁자", "위탁 업무", "이전 국가", "이전 항목", "보유 기간"].map((h) => (
                  <th key={h} className="border border-line px-3 py-2 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-line px-3 py-2">Resend, Inc.</td>
                <td className="border border-line px-3 py-2">견적 의뢰 내용 이메일 발송</td>
                <td className="border border-line px-3 py-2">미국</td>
                <td className="border border-line px-3 py-2">견적 의뢰 양식 입력 항목 전체</td>
                <td className="border border-line px-3 py-2">발송 후 위탁 계약 종료 시까지</td>
              </tr>
              <tr>
                <td className="border border-line px-3 py-2">Vercel Inc.</td>
                <td className="border border-line px-3 py-2">웹사이트 호스팅</td>
                <td className="border border-line px-3 py-2">미국</td>
                <td className="border border-line px-3 py-2">접속 기록(IP 등)</td>
                <td className="border border-line px-3 py-2">위탁 계약 종료 시까지</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm">이전 시기·방법: 견적 의뢰 제출 및 사이트 접속 시 네트워크를 통해 전송</p>

        <H>6. 개인정보의 파기</H>
        <p className="mt-3">
          보유 기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자 파일은 복구할 수 없는 방법으로 삭제하고,
          출력물은 분쇄하거나 소각합니다.
        </p>

        <H>7. 정보주체의 권리와 행사 방법</H>
        <p className="mt-3">
          이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리 정지를 요구할 수 있습니다. 아래 연락처로 요청하시면 지체 없이
          조치하겠습니다.
        </p>

        <H>8. 안전성 확보 조치</H>
        <p className="mt-3">
          견적 의뢰 내용은 암호화된 통신(HTTPS)으로 전송되며, 홈페이지 서버에 별도로 저장하지 않습니다. 개인정보를 취급하는 인원을
          최소화하여 관리합니다.
        </p>

        <H>9. 개인정보 보호 담당</H>
        <ul className="mt-3 space-y-1">
          <li>회사: {site.agentName}</li>
          <li>주소: {site.supplierAddress}</li>
          <li>
            연락처:{" "}
            <a href={site.phoneHref} className="font-medium text-ink">
              {site.phone}
            </a>
          </li>
          <li>
            이메일:{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-ink">
              {site.email}
            </a>
          </li>
        </ul>
        <p className="mt-3 text-sm">
          개인정보 침해에 대한 신고·상담은 개인정보침해신고센터(국번 없이 118), 개인정보분쟁조정위원회(1833-6972)에 문의하실 수
          있습니다.
        </p>

        <H>10. 시행일</H>
        <p className="mt-3">이 개인정보처리방침은 {EFFECTIVE_DATE}부터 적용됩니다.</p>
      </main>
    </>
  );
}
