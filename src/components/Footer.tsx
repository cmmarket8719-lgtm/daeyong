import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-24 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2">
              <span className="rounded bg-brand px-2 py-0.5 text-xs font-black text-white">{site.brand}</span>
              <span className="font-bold text-ink">{site.role}</span>
            </p>
            <ul className="mt-4 space-y-1">
              <li>상호 {site.agentName} · 대표 {site.ownerName}</li>
              {site.bizNumber && <li>사업자등록번호 {site.bizNumber}</li>}
              <li>
                상담 전화{" "}
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
          본 사이트는 오피스디포와 세일즈에이전트 계약을 맺은 {site.agentName}이(가) 운영하며,
          오피스디포 본사가 직접 운영하는 사이트가 아닙니다. 오피스디포 및 관련 상표는 해당
          권리자에게 있습니다.
        </p>
      </div>
    </footer>
  );
}
