"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative ornament */}
          <div className="flex justify-center mb-8">
            <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
              <path
                d="M10 20 Q25 5 50 20 Q75 35 90 20"
                stroke="#e2be87"
                strokeWidth="0.8"
                fill="none"
              />
              <path
                d="M10 20 Q25 35 50 20 Q75 5 90 20"
                stroke="#c3aca2"
                strokeWidth="0.8"
                fill="none"
              />
              <circle
                cx="50"
                cy="20"
                r="3"
                fill="none"
                stroke="#e2be87"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Closing message */}
          <p className="font-[var(--font-times)] text-xl md:text-2xl text-[#323155] mb-4">
            Кэлэргитин күүтэбин!
          </p>
          <p className="font-[var(--font-times)] text-base text-[#c3aca2] italic">
            Саргылана Иннокентьевна
          </p>

          {/* Bottom decorative line */}
          <div className="flex justify-center mt-12">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#e2be87] to-transparent" />
          </div>

          <p className="mt-8 text-xs text-[#c3aca2]/60">2026</p>
        </motion.div>
      </div>
    </footer>
  );
}
