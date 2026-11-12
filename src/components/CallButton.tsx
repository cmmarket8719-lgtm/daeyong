import { site } from "@/lib/site";
import { DocIcon, PhoneIcon } from "./icons";

type Props = {
  label?: string;
  size?: "md" | "lg";
  variant?: "brand" | "white" | "outline" | "outline-light";
  icon?: "phone" | "doc";
  showNumber?: boolean;
};

const colors = {
  brand: "bg-brand text-white hover:bg-brand-dark",
  white: "bg-white text-brand hover:bg-white/90",
  outline: "border-2 border-brand text-brand hover:bg-brand-soft",
  "outline-light": "border-2 border-white/70 text-white hover:bg-white/10",
};

export default function CallButton({
  label = "거래 문의",
  size = "md",
  variant = "brand",
  icon = "phone",
  showNumber = true,
}: Props) {
  const sizing = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  const Icon = icon === "doc" ? DocIcon : PhoneIcon;

  return (
    <a
      href={site.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold transition ${sizing} ${colors[variant]}`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {showNumber && <span className="hidden whitespace-nowrap opacity-80 sm:inline">· {site.phone}</span>}
    </a>
  );
}

/** 섹션 끝에 붙이는 견적 의뢰 / 거래 문의 버튼 쌍 */
export function CtaPair({ dark = false, center = true }: { dark?: boolean; center?: boolean }) {
  return (
    <div className={`mt-12 flex flex-col gap-3 sm:flex-row ${center ? "sm:justify-center" : ""}`}>
      <CallButton label="견적 의뢰하기" icon="doc" variant={dark ? "white" : "brand"} showNumber={false} />
      <CallButton label="거래 문의하기" variant={dark ? "outline-light" : "outline"} showNumber={false} />
    </div>
  );
}
