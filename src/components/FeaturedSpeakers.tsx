import Image from "next/image";

type CardProps = {
  name: string;
  city: string;
  org: string;
};

function SpeakerCard({ name, city, org }: CardProps) {
  return (
    <div className="relative overflow-hidden rounded-[26px] ring-1 ring-white/10 bg-black/20 backdrop-blur-sm flex flex-col h-full en-card">
      {/* Image */}
      <div className="relative z-0 w-full overflow-hidden rounded-t-[26px] bg-neutral-900">
        <Image
          src="/images/speaker1.png"
          alt={name}
          width={400}
          height={400}
          className="h-[260px] w-full object-cover sm:h-[280px]"
          priority
        />
      </div>

      {/* Full-card gold overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(160% 140% at -10% 110%, rgba(255,225,103,0.9) 0%, rgba(255,225,103,0.6) 30%, rgba(255,225,103,0.25) 60%, rgba(0,0,0,0) 85%)",
        }}
      />

      {/* Gradient info panel */}
      <div
        className="relative z-[2] rounded-b-[26px] p-5 pt-6 text-black flex flex-col min-h-[190px] text-left"
        dir="ltr"
        style={{ background: "transparent", fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="flex items-center gap-2 text-[13px] text-black/80">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFE167" className="h-4 w-4">
            <path fillRule="evenodd" d="M12 2.25c-4 0-7.25 3.25-7.25 7.25 0 5.25 7.25 12.25 7.25 12.25s7.25-7 7.25-12.25c0-4-3.25-7.25-7.25-7.25Zm0 9.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" clipRule="evenodd" />
          </svg>
          <span>{city}</span>
        </div>
        <h3 className="mt-2 text-[26px] sm:text-[28px] font-semibold tracking-tight">{name}</h3>
        <p className="mt-2 text-[13px] text-black/75">{org}</p>
      </div>
    </div>
  );
}

export default function FeaturedSpeakers() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 pt-8 pb-10 -mt-40 sm:-mt-36 lg:-mt-32 bg-transparent">
      <div className="flex items-center gap-6">
        <h2 className="text-white text-[22px] sm:text-[34px] font-medium whitespace-nowrap">فئات المتحدثين</h2>
        <p className="mx-auto max-w-3xl text-center text-[12px] sm:text-sm text-white/70">
          نوفر وصولاً إلى ثلاث فئات رئيسية من الخبراء لتلبية كافة متطلبات الفعاليات
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SpeakerCard name="Dr. Shrooq A. Alsenan" city="Riyadh" org="Princess Nourah Bint Abdulrahman University" />
        <SpeakerCard name="Abdulrhman Abdulaziz Alodhayb" city="Riyadh" org="Senior Technology Advisor" />
        <SpeakerCard name="Faisal M Alotaibi" city="Al Kharj" org="Cyber Security Consultant" />
      </div>
    </section>
  );
}


