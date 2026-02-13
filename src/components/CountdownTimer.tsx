"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-01T15:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const labels = [
  { key: "days", label: "Күн" },
  { key: "hours", label: "Чаас" },
  { key: "minutes", label: "Мүнүүтэ" },
  { key: "seconds", label: "Сөкүүндэ" },
] as const;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2 className="font-[var(--font-times)] text-2xl md:text-3xl font-semibold text-[#323155] mb-10">
            Убүлүөйгө диэри...
          </h2>

          {/* Timer blocks */}
          <div className="flex justify-center gap-3 md:gap-6">
            {labels.map(({ key, label }) => (
              <div key={key} className="flex flex-col items-center">
                <div className="oval-container w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
                  <span className="font-[var(--font-times)] text-2xl md:text-4xl font-bold text-[#b94244]">
                    {timeLeft ? String(timeLeft[key]).padStart(2, "0") : "--"}
                  </span>
                </div>
                <span className="font-[var(--font-times)] text-xs md:text-sm text-[#323155] uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Date reminder */}
          <div className="mt-10">
            <p className="font-[var(--font-times)] text-lg text-[#c3aca2]">
              01.03.2026 — 15:00
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
