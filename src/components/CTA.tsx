import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:gap-20 px-6 sm:px-8 lg:grid-cols-2">
        {/* Images on the left */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-2">
          {/* Small image 1 */}
          <div className="rounded-3xl bg-white p-6 flex items-center justify-center aspect-[3/4] sm:aspect-auto">
            <Image src="/images/box1.png" alt="Partner logo" width={480} height={240} className="w-full h-full object-contain" />
          </div>
          {/* Tall image spans two rows on sm+ */}
          <div className="rounded-3xl bg-white p-4 flex items-center justify-center aspect-[3/4] sm:aspect-auto sm:row-span-2">
            <Image src="/images/long1.png" alt="Partner logo" width={480} height={640} className="w-full h-full object-contain" />
          </div>
          {/* Small image 2 */}
          <div className="rounded-3xl bg-white p-6 flex items-center justify-center aspect-[3/4] sm:aspect-auto">
            <Image src="/images/box2.png" alt="Partner logo" width={480} height={240} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Content on the right */}
        <div className="flex flex-col justify-center gap-7 order-1 lg:order-1 text-left" dir="ltr">
          <h3 className="text-[30px] sm:text-[40px] font-semibold leading-tight text-left">
            Are you ready to elevate your upcoming events?
          </h3>
          <p className="text-white/70 max-w-xl text-left text-base sm:text-lg">
            Join the speakers platform today and discover the elite speakers in the Arab world.
          </p>

          <div className="mt-4 flex flex-col gap-4 items-start">
            <a href="#" className="inline-flex items-center justify-between rounded-2xl bg-[#2D2A20] px-7 py-5 text-base sm:text-lg hover:bg-[#3a3628] transition-colors self-start w-full sm:w-[560px]">
              <span>Explore Speakers</span>
              <span className="ml-4">→</span>
            </a>
            <a href="#" className="inline-flex items-center justify-between rounded-2xl bg-[#2D2A20] px-7 py-5 text-base sm:text-lg hover:bg-[#3a3628] transition-colors self-start w-full sm:w-[560px]">
              <span>Register as a Speaker</span>
              <span className="ml-4">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


