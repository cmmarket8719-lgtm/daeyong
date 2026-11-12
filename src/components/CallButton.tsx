import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

type Props = {
  label?: string;
  size?: "md" | "lg";
  variant?: "brand" | "white";
};

export default function CallButton({ label = "전화 상담하기", size = "md", variant = "brand" }: Props) {
  const sizing = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  const color =
    variant === "white"
      ? "bg-white text-brand hover:bg-white/90"
      : "bg-brand text-white hover:bg-brand-dark";

  return (
    <a
      href={site.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold shadow-sm transition ${sizing} ${color}`}
    >
      <PhoneIcon className="h-5 w-5" />
      <span>{label}</span>
      <span className="hidden whitespace-nowrap opacity-80 sm:inline">· {site.phone}</span>
    </a>
  );
}
