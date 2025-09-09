"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase = "px-1 transition-colors text-white/60 hover:text-white";

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;
    const classes = isActive ? `${linkBase} text-white` : linkBase;
    return (
      <a href={href} className={classes} aria-current={isActive ? "page" : undefined} onClick={() => setOpen(false)}>
        {label}
      </a>
    );
  };

  return (
    <div>
      <header className="flex items-center justify-between py-5 text-sm text-neutral-300">
        <nav className="hidden gap-12 sm:flex">
          {navLink("/", "Home")}
          {navLink("/speakers", "Speakers")}
          {navLink("/events", "Events")}
        </nav>

        <div className="flex flex-1 justify-center sm:justify-center ml-14 sm:ml-0">
          <Image
            src="/images/main-logo.png"
            alt="Speakers logo"
            width={100}
            height={100}
            priority
          />
        </div>

        <nav className="hidden gap-12 sm:flex">
          {navLink("/blog", "Blog")}
          {navLink("/map", "Map")}
          {navLink("/contact", "Contact Us")}
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden ml-3 rounded-md p-2 text-white/70 hover:text-white hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile fullscreen overlay */}
      {open && (
        <div role="dialog" aria-modal="true" id="mobile-menu" className="sm:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70">
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-6 pt-6">
            <div className="flex items-center justify-between">
              <Image src="/images/main-logo.png" alt="Speakers logo" width={80} height={80} priority />
              <button className="rounded-md p-2 text-white/70 hover:text-white hover:bg-white/10" aria-label="Close menu" onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-y-4 gap-x-6 text-lg">
              {navLink("/", "Home")}
              {navLink("/speakers", "Speakers")}
              {navLink("/events", "Events")}
              {navLink("/blog", "Blog")}
              {navLink("/map", "Map")}
              {navLink("/contact", "Contact Us")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


