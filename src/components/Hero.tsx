"use client";

import Image from "next/image";
import Header from "@/components/Header";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[110vh] w-full overflow-hidden bg-black text-white">
      {/* Background image (as-is, no overlays) */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-top bg-no-repeat bg-[length:140%_auto] md:bg-[length:95%_auto]"
        style={{
          backgroundImage: "url('/images/Hero Image.png')",
        }}
      />

      {/* Overlay image */}
      {/* <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/images/Background Shape.png')",
          backgroundPosition: "center -60px",
          backgroundSize: "120% auto",
          opacity: 0.9,
        }}
      /> */}

      {/* No overlays/vignettes per design */}

      {/* Navigation + content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 sm:px-8">
        {/* Top navigation */}
        <Header />

        {/* Centered headline */}
        <div className="flex flex-1 flex-col items-center justify-center text-center translate-y-8 sm:translate-y-12">
          <h1 className="text-[48px] sm:text-[80px] md:text-[104px] lg:text-[128px] leading-[1] font-bold tracking-tight">
            صوت الحدث ...
          </h1>
          <h2 className="mt-4 sm:mt-5 text-[48px] sm:text-[80px] md:text-[104px] lg:text-[128px] leading-[1] font-bold tracking-tight">
            وقوّة الحضور.
          </h2>
          <p className="mt-6 max-w-2xl text-xs text-neutral-400 sm:text-sm"><br /><br />
            المنصة الأولى للمتحدثين العرب؛ تربطك بنخبة من المتحدثين والخبراء في مختلف القطاعات.
          </p>
        </div>
      </div>
    </section>
  );
}


