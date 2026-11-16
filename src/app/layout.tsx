import type { Metadata, Viewport } from "next";
import { Nanum_Pen_Script, Noto_Sans_KR } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const notoKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// 손글씨 메모·서명용
const pen = Nanum_Pen_Script({
  variable: "--font-nanum-pen",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | 오피스디포 MRO 김대용` },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1f4d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoKr.variable} ${pen.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
