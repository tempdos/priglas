"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-times)] text-2xl md:text-3xl font-semibold text-[#323155]">
              Буолар сирэ
            </h2>
            <div className="flex justify-center mt-4">
              <div className="decorative-line" />
            </div>
          </div>

          {/* Map image */}
          <div className="rounded-3xl border border-[#c3aca2] overflow-hidden shadow-[0_8px_40px_rgba(195,172,162,0.15)]">
            <Image
              src="/map.png"
              alt="Карта — с. Майя, ул. Сыроватского 9, банкетный зал Лира"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Address */}
          <div className="text-center mt-8">
            <p className="font-[var(--font-times)] text-lg md:text-xl text-[#323155]">
              с. Майя, ул. Сыроватского 9
            </p>
            <p className="font-[var(--font-times)] text-base text-[#b94244] mt-1">
              Банкетный зал «Лира»
            </p>
          </div>

          {/* 2GIS button */}
          <div className="text-center mt-6">
            <a
              href="https://go.2gis.com/6rjb6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1.5 rounded-full border border-[#c3aca2] bg-[#fffcfb] transition-all hover:scale-105 hover:border-[#b94244] active:scale-95 shadow-[0_4px_15px_rgba(195,172,162,0.15)]"
            >
              <Image
                src="/2gis.png"
                alt="Открыть в 2ГИС"
                width={120}
                height={40}
                className="h-5 w-auto"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
