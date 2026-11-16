import Image from "next/image";
import { Container, SectionHead } from "@/components/ui";
import { HeadsetIcon, ShieldIcon } from "@/components/icons";
import { qualityItems, qualitySteps, supportItems } from "@/lib/content";

export default function Quality() {
  return (
    <section id="quality" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="품질·고객지원"
          title={
            <>
              3단계 검수로 보내고,
              <br />
              <span className="text-blue">전담 고객센터</span>가 끝까지 챙깁니다
            </>
          }
        />

        {/* 3단계 검수 */}
        <ol className="mt-14 grid gap-3 md:grid-cols-3">
          {qualitySteps.map((q, i) => (
            <li key={q.step} className="relative overflow-hidden rounded-lg border border-line p-7">
              <span aria-hidden className="absolute -right-3 -top-6 text-[110px] font-black leading-none text-blue-soft">
                {i + 1}
              </span>
              <ShieldIcon className="relative h-7 w-7 text-blue" />
              <p className="relative mt-4 text-xl font-black">{q.step}</p>
              <p className="relative mt-1 text-muted">{q.where}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg">
              <Image src="/photos/callcenter.webp" alt="오피스디포 고객지원팀 사무실" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-paper">
              <Image src="/photos/packing.webp" alt="에어백 완충재로 포장한 배송 상자" fill sizes="(min-width: 1024px) 230px, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-paper">
              <Image src="/photos/packing2.webp" alt="소형 주문 건 파손 방지 포장" fill sizes="(min-width: 1024px) 230px, 50vw" className="object-cover" />
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {qualityItems.map((q) => (
              <li key={q.title} className="rounded-lg bg-paper p-5">
                <p className="font-black">{q.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{q.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 고객지원 */}
        <div className="mt-6 rounded-lg bg-navy p-6 text-white sm:p-10">
          <div className="flex items-center gap-3">
            <HeadsetIcon className="h-8 w-8 text-sun" />
            <h3 className="text-xl font-black sm:text-2xl">업계 최대 규모 전문 고객센터 · A/S 반품 전담반</h3>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supportItems.map((s) => (
              <li key={s.title} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                <p className="font-bold text-sun">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
