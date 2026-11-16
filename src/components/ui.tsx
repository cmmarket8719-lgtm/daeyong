import type { ReactNode } from "react";

type HeadProps = {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
};

/** 섹션 제목: 파란 eyebrow + 큰 제목 + 설명 */
export function SectionHead({ eyebrow, title, desc, dark, align = "center" }: HeadProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className={`inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] ${dark ? "text-sun" : "text-blue"}`}>
        <span className={`h-[3px] w-5 rounded-full ${dark ? "bg-brand" : "bg-brand"}`} />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[26px] font-black leading-snug tracking-tight sm:text-[38px]">{title}</h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-muted"}`}>{desc}</p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function won(n: number) {
  return n.toLocaleString("ko-KR") + "원";
}
