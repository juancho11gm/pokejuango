"use client";

import { ReactNode, useEffect, useState } from "react";

export default function BackgroundLoaded({
  children,
}: {
  children: ReactNode;
}) {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = "/background.png";

    // Fake progress bar (0 → 90%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + 1;
        return prev;
      });
    }, 20);

    img.onload = () => {
      clearInterval(interval);
      setProgress(100);

      // small delay to allow UI to finish animation
      setTimeout(() => {
        setBgLoaded(true);
      }, 300);
    };
  }, []);

  if (!bgLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center  text-white text-2xl">
        <div className="max-w-[1042px] mx-auto flex flex-col gap-8">
          <progress className="nes-progress" value={progress} max="100" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}
