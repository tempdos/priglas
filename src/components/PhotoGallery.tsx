"use client";

import { motion } from "framer-motion";

const photos = [
  { rotate: 3, translateY: 0, zIndex: 1 },
  { rotate: -4, translateY: 20, zIndex: 2 },
  { rotate: 6, translateY: -10, zIndex: 3 },
  { rotate: -2, translateY: 15, zIndex: 1 },
  { rotate: 5, translateY: -5, zIndex: 2 },
];

export default function PhotoGallery() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-times)] text-2xl md:text-3xl font-semibold text-[#323155]">
            Кэм кэрэтэ
          </h2>
          <div className="flex justify-center mt-4">
            <div className="decorative-line" />
          </div>
        </motion.div>

        {/* Photo collage */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:relative md:h-[500px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: photo.rotate,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="relative cursor-pointer transition-shadow duration-300"
              style={{
                zIndex: photo.zIndex,
              }}
            >
              <div
                className={`
                  w-40 h-52 md:w-52 md:h-64
                  bg-[#fffcfb] border border-[#c3aca2]
                  rounded-lg shadow-[0_4px_20px_rgba(195,172,162,0.2)]
                  p-2 md:p-3
                  ${index > 0 ? "md:absolute" : "md:absolute"}
                `}
                style={{
                  left: `${index * 18}%`,
                  top: `${50 + photo.translateY}px`,
                }}
              >
                {/* Photo placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-[#fffcfb] to-[#f0ebe8] rounded flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#c3aca2] opacity-40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
