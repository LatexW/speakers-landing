import Image from "next/image";

export default function HowTo() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-90"
        style={{ backgroundImage: "url('/images/imag-background.png')" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        {/* Heading row: title right-aligned, description centered next to it */}
        <div className="flex items-start gap-6">
          <h2 className="text-[26px] sm:text-[36px] font-bold whitespace-nowrap text-right">
            كيف تعمل المنصة
          </h2>
          <p className="flex-1 text-white/80 text-sm sm:text-base text-center">
            تعرف على آلية عمل منصة متحدثون وكيفية الاستفادة من خدماتنا
          </p>
        </div>

        {/* Cards images */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image src="/images/Card-1.png" alt="Speaker steps" width={760} height={430} className="w-full h-auto rounded-2xl" />
          </div>
          <div className="flex justify-center">
            <Image src="/images/Card-2.png" alt="Organizer steps" width={760} height={430} className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}


