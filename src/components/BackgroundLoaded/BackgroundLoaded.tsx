"use client";

import { ReactNode, useEffect, useState } from "react";

export default function BackgroundLoaded({
  children,
}: {
  children: ReactNode;
}) {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const background = new Image();
    const profile = new Image();
    background.src = "/background.png";
    profile.src = "/pixel_profile.png";

    // Fake progress bar (0 → 90%)
    setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + 10;
        return prev;
      });
    }, 100);

    const handleLoadBg = () => {
      // small delay to allow UI to finish animation
      setTimeout(() => {
        setBgLoaded(true);
      }, 300);
    };

    const handleLoadProfile = () => {
      // small delay to allow UI to finish animation
      setTimeout(() => {
        setBgLoaded(true);
      }, 300);
    };

    background.onload = handleLoadBg;
    profile.onload = handleLoadProfile;
  }, []);

  if (!bgLoaded || !profileLoaded) {
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
