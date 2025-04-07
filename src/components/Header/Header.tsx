"use client";

import Link from "next/link";
import { SoundEffect } from "../SoundEffect/SoundEffect";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <header className="flex! justify-between! items-center! w-full! py-12!">
      {isHome ? (
        <span />
      ) : (
        <Link className="nes-btn" href="/">
          Go Back
        </Link>
      )}

      <SoundEffect />
    </header>
  );
}
