"use client";

import { motion } from "framer-motion";
import FloralDecor from "./FloralDecor";

const schedule = [
  { time: "15:00", text: "Ыҥырыылаах ыалдьыттар мустуулара" },
  { time: "16:00", text: "АЛГЫС" },
  { time: "17:00", text: "Бастыкы остуол" },
  { time: "19:30", text: "Уопсай хаартыскаҕа түһүү" },
  { time: "22:00", text: "Үнкүү-битии" },
];

export default function ProgramSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="oval-container px-8 py-14 md:px-16 md:py-20 relative overflow-visible"
        >
          <FloralDecor positions={["top-left", "bottom-right"]} flowerSrc="/flower2.svg" />
          {/* Section title */}
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-times)] text-2xl md:text-3xl font-semibold text-[#323155]">
              Убүлүөй былаана
            </h2>
            <div className="flex justify-center mt-4">
              <div className="decorative-line" />
            </div>
          </div>

          {/* Schedule items */}
          <div className="space-y-6 max-w-md mx-auto">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-baseline gap-4 md:gap-6"
              >
                <span className="font-[var(--font-times)] text-2xl md:text-3xl font-bold text-[#b94244] whitespace-nowrap min-w-[80px] text-right">
                  {item.time}
                </span>
                <span className="w-8 h-px bg-[#c3aca2] flex-shrink-0 mt-3" />
                <span className="font-[var(--font-times)] text-base md:text-lg text-[#323155]">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
