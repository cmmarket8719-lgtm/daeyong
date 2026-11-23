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

// 검색엔진 소유 확인 코드는 site.ts에 값이 있을 때만 출력합니다.
const verificationOther: Record<string, string> = {};
if (site.verification.naver) verificationOther["naver-site-verification"] = site.verification.naver;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | 오피스디포 MRO 김대용` },
  description: site.description,
  applicationName: "오피스디포 기업 MRO 구매상담",
  keywords: [...site.keywords],
  authors: [{ name: site.managerName, url: site.blogUrl }],
  category: "business",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: "오피스디포 기업 MRO 구매상담 · 김대용",
    type: "website",
    locale: "ko_KR",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  verification: {
    ...(site.verification.google ? { google: site.verification.google } : {}),
    ...(Object.keys(verificationOther).length ? { other: verificationOther } : {}),
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
