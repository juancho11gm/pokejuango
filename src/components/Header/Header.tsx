"use client";

import { SoundEffect } from "../SoundEffect/SoundEffect";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";
  return (
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
  );
}
