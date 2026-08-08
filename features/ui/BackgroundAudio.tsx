"use client";

import { useState, useRef } from "react";

export default function BackgroundAudio() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  async function toggle() {
    if (!audioRef.current) {
      const a = new Audio("/audio/bg.mp3");
      a.loop = true;
      a.volume = 0.18;
      a.preload = "none";
      audioRef.current = a;
      try {
        await a.play();
        setPlaying(true);
      } catch (e) {
        setPlaying(false);
      }
      return;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (e) {
        setPlaying(false);
      }
    }
  }

  return (
    <button
      aria-pressed={playing}
      aria-label={playing ? "Tắt nhạc nền" : "Bật nhạc nền"}
      onClick={toggle}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-white/90 p-3 shadow"
    >
      {playing ? "🔊" : "🔈"}
    </button>
  );
}
