import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white/80 pt-10 pb-8">
      {/* Top divider line (not full width) */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="h-px w-full max-w-[1260px] bg-white/15" />

        {/* Disclaimer */}
        <div className="mt-4 text-sm text-left" dir="ltr">Disclaimer <span className="ml-2">＋</span></div>

        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-12 items-start">
          {/* Content (left side) */}
          <div className="lg:col-span-8 col-span-1 lg:order-2 order-2 text-left" dir="ltr">
            {/* Links */}
            <nav className="flex flex-wrap justify-start gap-x-12 gap-y-4 text-sm">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">Speakers</a>
              <a href="#" className="hover:text-white">Events</a>
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Map</a>
              <a href="#" className="hover:text-white">Contact Us</a>
            </nav>

            {/* Contact rows */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/50">Sign Up</div>
                <div className="mt-3 text-base">+000 0000 0000</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/50">Opening Hours</div>
                <div className="mt-3 text-base">24/7</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-[11px] uppercase tracking-widest text-white/50">Email</div>
                <div className="mt-3 text-base">youremail@mail.com</div>
              </div>
            </div>
          </div>

          {/* Logo and copyright (right side) */}
          <div className="lg:col-span-4 col-span-1 lg:order-1 order-1 flex flex-col items-end justify-between text-right lg:pl-16" dir="ltr">
            <Image src="/images/logo-footer.png" alt="Speakers logo" width={130} height={130} className="opacity-70" />
            <div className="mt-12 text-[13px] sm:text-[14px] text-white/50">© 2025 — Copyright</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


