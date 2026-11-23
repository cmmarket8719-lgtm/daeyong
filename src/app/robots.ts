import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// 모든 검색엔진과 AI 검색 봇(ChatGPT·Perplexity·Claude 등)에 사이트를 공개합니다.
// 네이버(Yeti)·다음(Daumoa)·구글·빙도 기본 규칙(*)으로 허용됩니다.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: ["Yeti", "Daumoa", "Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot"],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
