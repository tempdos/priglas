"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4 pt-10 pb-16">
      {/* Decorative floral elements */}
      <div className="absolute top-8 left-8 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path
            d="M60 10 C30 30, 10 60, 60 110 C110 60, 90 30, 60 10Z"
            stroke="#c3aca2"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M40 20 C20 40, 15 70, 50 100"
            stroke="#e2be87"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#c3aca2"
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="#e2be87"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M50 10 L50 90 M10 50 L90 50"
            stroke="#c3aca2"
            strokeWidth="0.3"
          />
        </svg>
      </div>
      <div className="absolute top-1/4 right-12 opacity-15">
        <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
          <path
            d="M40 0 C20 40, 10 80, 40 160 M40 0 C60 40, 70 80, 40 160"
            stroke="#c3aca2"
            strokeWidth="0.8"
            fill="none"
          />
          <ellipse
            cx="40"
            cy="40"
            rx="15"
            ry="20"
            stroke="#e2be87"
            strokeWidth="0.5"
            fill="none"
          />
          <ellipse
            cx="40"
            cy="80"
            rx="12"
            ry="16"
            stroke="#e2be87"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        {/* Decorative line */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#e2be87] to-transparent" />
        </div>

        {/* Title */}
        <h1 className="font-[var(--font-times)] text-3xl md:text-4xl font-light tracking-normal gold-gradient-text mb-8">
          Ыҥырыы сурук
        </h1>

        {/* Photo placeholder - oval frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative mx-auto mb-8"
        >
          <div className="relative w-[85vw] h-[140vw] md:w-[40vw] md:h-[65vw] max-w-[500px] max-h-[800px] mx-auto rounded-[50%] border border-[#c3aca2] bg-[#fffcfb] overflow-hidden shadow-[0_8px_40px_rgba(195,172,162,0.15)]">
            <Image
              src="/one.jpg"
              alt="Саргылана Иннокентьевна"
              fill
              className="object-cover object-[center_5%]"
              sizes="(max-width: 768px) 224px, 288px"
              priority
            />
          </div>
          {/* Decorative circle around photo */}
          <div className="absolute -inset-3 rounded-[1000px] border border-[#e2be87]/20 pointer-events-none" />
        </motion.div>

        {/* Decorative line */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#e2be87] to-transparent" />
        </div>
      </motion.div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-[#c3aca2] flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#c3aca2]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
