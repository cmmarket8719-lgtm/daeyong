import Image from "next/image";
import Link from "next/link";
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
              <li>{site.supplierAddress}</li>
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
        <div className="mt-8 border-t border-line pt-6">
          <Link href="/privacy" className="text-xs font-bold text-ink hover:text-brand">
            개인정보처리방침
          </Link>
        </div>
        <p className="mt-3 text-xs leading-relaxed">
          본 사이트는 {site.brand} 세일즈에이전시가 운영하는 상담 사이트입니다. 상품 공급과 배송은 {site.brand}가 담당합니다.
        </p>
      </div>
    </footer>
  );
}
