"use client";

import { motion } from "framer-motion";
import FloralDecor from "./FloralDecor";

export default function InvitationSection() {
  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="oval-container px-8 py-16 md:px-16 md:py-24 text-center relative overflow-visible"
        >
          <FloralDecor positions={["top-left", "top-right", "bottom-left", "bottom-right"]} />
          {/* Decorative top ornament */}
          <div className="flex justify-center mb-8">
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <path
                d="M0 28 Q15 0 30 15 Q45 0 60 28"
                stroke="#e2be87"
                strokeWidth="0.8"
                fill="none"
              />
              <circle cx="30" cy="15" r="2" fill="#e2be87" opacity="0.5" />
            </svg>
          </div>

          <div className="font-[var(--font-times)] text-lg md:text-xl leading-relaxed text-[#323155] space-y-4 max-w-lg mx-auto">
            <p>
              Истиҥник саныыр
              <br />
              Уруу-аймах дьоннорум,
              <br />
              Бииргэ үөрэммит доҕотторум,
              <br />
              Эйэҕэс-сайаҕас мааны дьүөгэлэрим,
              <br />
              Үтүө дьоро киэһэбэр,
              <br />
              Сылаас алгыс тыллардаах
              <br />
              Истиҥ мичээр кэһиилээх
              <br />
              Кэлэргитин күүтэбин
            </p>
          </div>

          {/* Author */}
          <div className="mt-8 pt-6 border-t border-[#c3aca2]/30">
            <p className="font-[var(--font-times)] text-xl md:text-2xl italic text-[#c3aca2]">
              Саргылана Атласова
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
