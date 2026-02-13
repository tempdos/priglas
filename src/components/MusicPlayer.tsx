"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleClick = () => {
      if (!playing) {
        audio.play().then(() => setPlaying(true)).catch(() => {});
      }
    };

    document.addEventListener("click", handleClick, { once: true });
    return () => document.removeEventListener("click", handleClick);
  }, [playing]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music-opt.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur border border-[#c3aca2] shadow-[0_4px_20px_rgba(195,172,162,0.3)] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        aria-label={playing ? "Выключить музыку" : "Включить музыку"}
      >
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b94244" strokeWidth="2">
            <path d="M12 6v12M8 8.5v7M16 8.5v7M4 11v2M20 11v2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c3aca2" strokeWidth="2">
            <path d="M12 6v12M8 10v4M16 10v4" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </>
  );
}
