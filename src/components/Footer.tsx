import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-4 border-blue bg-white pb-28 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-end gap-2">
              <Image src={site.logo} alt={site.brand} width={713} height={119} className="h-7 w-auto" />
              <span className="pb-0.5 text-xs font-medium text-muted">{site.footerRole}</span>
            </div>
            <ul className="mt-5 space-y-1">
              <li>{site.supplierAddress}</li>
              <li>
                담당 : {site.agentName}</li>
              <li>
                전화 :{" "}
                <a href={site.phoneHref} className="font-medium text-ink">
                  {site.phone}
                </a>
              </li>
              <li>
                이메일 :{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-ink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-full border border-line px-4 py-2 font-medium text-ink hover:border-brand hover:text-brand"
          >
            네이버 블로그
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6 text-xs font-bold text-ink">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-blue">
              {n.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:text-blue">
            개인정보처리방침
          </Link>
        </div>
        <p className="mt-3 text-xs leading-relaxed">
          본 사이트는 {site.agentName}이 운영하는 기업 MRO 구매 상담 사이트입니다. 거래 계약과 세금계산서 발행, 상품 공급·배송은 ㈜오피스디포코리아가 담당합니다.
        </p>
      </div>
    </footer>
  );
}
