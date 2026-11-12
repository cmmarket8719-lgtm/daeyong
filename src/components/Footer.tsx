import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-28 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-end gap-2">
              <Image src={site.logo} alt={site.brand} width={713} height={119} className="h-7 w-auto" />
              <span className="pb-0.5 text-xs font-medium text-muted">{site.footerRole}</span>
            </div>
            <ul className="mt-5 space-y-1">
              <li>
                <span className="font-bold text-ink">{site.supplierName}</span>
              </li>
              <li>{site.supplierAddress}</li>
              <li className="pt-2">
                운영 {site.agentName} · 대표 {site.ownerName}
                {site.bizNumber && <> · 사업자등록번호 {site.bizNumber}</>}
              </li>
              <li>
                견적문의 :{" "}
                <a href={site.phoneHref} className="font-medium text-ink">
                  {site.phone}
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
        <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed">
          본 사이트는 {site.supplierName}와 세일즈에이전트 계약을 맺은 {site.agentName}이(가) 운영하는 상담 사이트입니다.
          상품 공급과 배송은 {site.supplierName}가 담당합니다.
        </p>
      </div>
    </footer>
  );
}
