"use client";

import { useEffect, useRef, useState } from "react";

export function SoundEffect() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
    } else {
      audioRef.current?.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    const playSound = () => {
      audioContextRef.current = new window.AudioContext();

      if (audioContextRef.current) {
        const oscillator = audioContextRef.current.createOscillator();
        oscillator.type = "square";
        oscillator.frequency.setValueAtTime(
          440,
          audioContextRef.current.currentTime
        ); // 440 Hz = A4 note

        const gainNode = audioContextRef.current.createGain();
        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContextRef.current.currentTime + 0.1
        );

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.start();
        oscillator.stop(audioContextRef.current.currentTime + 0.1);
      }
    };

    document.addEventListener("click", playSound);

    return () => {
      document.removeEventListener("click", playSound);
      audioContextRef.current?.close();

      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="p-4 flex justify-end">
      <audio
        ref={audioRef}
        src="/background-song.mp3"
        loop={true}
        autoPlay={true}
        muted={false}
      />
      <button onClick={handlePlayPause} id="mute-toggle" className="nes-btn">
        {playing ? (
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path
              d="M15 2h2v20h-2v-2h-2v-2h2V6h-2V4h2V2zm-4 6V6h2v2h-2zm-2 2h2V8H7v8h4v2h2v-2h-2v-2H9v-4z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path
              d="M11 2h2v20h-2v-2H9v-2h2V6H9V4h2V2zM7 8V6h2v2H7zm0 8H3V8h4v2H5v4h2v2zm0 0v2h2v-2H7zm10-6h-2v4h2v-4zm2-2h2v8h-2V8zm0 8v2h-4v-2h4zm0-10v2h-4V6h4z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
