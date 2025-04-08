"use client";

import { SoundEffect } from "../SoundEffect/SoundEffect";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setIsHeaderVisible(headerRect.top >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log({ isHeaderVisible });

  const isHome = pathname === "/";
  return (
    <>
      <header className="flex! justify-between! items-center! w-full! py-12!">
        {isHome ? (
          <span />
        ) : (
          <button className="nes-btn" onClick={() => router.back()}>
            Go Back
          </button>
        )}

        <SoundEffect />
      </header>
      {!isHeaderVisible && (
        <button
          onClick={scrollToTop}
          className="fixed! bottom-8! right-8! nes-btn z-10!"
          aria-label="Go to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
