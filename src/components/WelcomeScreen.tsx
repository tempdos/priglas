"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeScreen({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setEntered(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      <AnimatePresence>
        {!entered && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center px-6"
          >
            {/* Decorative top line */}
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#e2be87] to-transparent mb-8" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <p className="font-[var(--font-times)] text-sm tracking-[0.25em] uppercase text-[#c3aca2] mb-4">
                Ыҥырыы сурук
              </p>

              <h1 className="font-[var(--font-times)] text-3xl md:text-4xl text-[#323155] mb-3">
                Саргылана Иннокентьевна
              </h1>

              <p className="font-[var(--font-times)] text-base text-[#c3aca2] mb-12">
                01.03.2026
              </p>

              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-full border border-[#c3aca2] text-[#323155] font-[var(--font-times)] text-lg tracking-wider transition-colors hover:bg-[#fffcfb] hover:border-[#b94244] hover:text-[#b94244]"
              >
                Открыть приглашение
              </motion.button>
            </motion.div>

            {/* Decorative bottom line */}
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#e2be87] to-transparent mt-12" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={entered ? "" : "overflow-hidden h-screen"}>
        {children}
      </div>
    </>
  );
}
