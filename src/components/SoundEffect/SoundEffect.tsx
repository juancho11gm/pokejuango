"use client";

import { useEffect, useRef, useState } from "react";

export function SoundEffect() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(true);

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
    audioRef.current!.play();

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

      audioRef.current!.pause();
    };
  }, []);

  console.log({ playing });

  return (
    <div className="p-4">
      <audio
        ref={audioRef}
        src="/background-song.mp3"
        loop={true}
        autoPlay={true}
        muted={false}
      />
      <button
        onClick={handlePlayPause}
        id="mute-toggle"
        className="nes-btn is-primary"
      >
        {playing ? "Mute" : "Unmute"}
      </button>
    </div>
  );
}
