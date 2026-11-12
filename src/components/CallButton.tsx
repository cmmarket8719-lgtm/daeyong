import { site } from "@/lib/site";
import { DocIcon, PhoneIcon } from "./icons";

type Props = {
  label?: string;
  size?: "md" | "lg";
  variant?: "brand" | "white" | "outline" | "outline-light";
  /** "call" = 전화 연결(tel:), "quote" = 견적 의뢰 폼(#quote)으로 이동 */
  kind?: "call" | "quote";
  showNumber?: boolean;
};

const colors = {
  brand: "bg-brand text-white hover:bg-brand-dark",
  white: "bg-white text-brand hover:bg-white/90",
  outline: "border-2 border-brand text-brand hover:bg-brand-soft",
  "outline-light": "border-2 border-white/70 text-white hover:bg-white/10",
};

export default function CallButton({ label, size = "md", variant = "brand", kind = "call", showNumber = true }: Props) {
  const sizing = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  const isQuote = kind === "quote";
  const Icon = isQuote ? DocIcon : PhoneIcon;

  return (
    <a
      href={isQuote ? "#quote" : site.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold transition ${sizing} ${colors[variant]}`}
    >
      <Icon className="h-5 w-5" />
      <span>{label ?? (isQuote ? "견적 의뢰하기" : "거래 문의하기")}</span>
      {!isQuote && showNumber && <span className="hidden whitespace-nowrap opacity-80 sm:inline">· {site.phone}</span>}
    </a>
  );
}

/** 섹션 끝에 붙이는 견적 의뢰(폼) / 거래 문의(전화) 버튼 쌍 */
export function CtaPair({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
      <CallButton kind="quote" variant={dark ? "white" : "brand"} />
      <CallButton kind="call" variant={dark ? "outline-light" : "outline"} showNumber={false} />
    </div>
  );
}
