"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/foto1.jpg", rotate: 3, translateY: 0, zIndex: 1 },
  { src: "/foto2.jpg", rotate: -4, translateY: 30, zIndex: 2 },
  { src: "/foto3.jpg", rotate: 5, translateY: -10, zIndex: 3 },
];

export default function PhotoGallery() {
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:relative md:h-[420px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative cursor-pointer transition-shadow duration-300"
              style={{ zIndex: photo.zIndex }}
            >
              <div
                className="w-52 h-64 md:w-60 md:h-72 bg-[#fffcfb] border border-[#c3aca2] rounded-lg shadow-[0_4px_20px_rgba(195,172,162,0.2)] p-2 md:p-3 md:absolute"
                style={{
                  left: `${index * 30}%`,
                  top: `${40 + photo.translateY}px`,
                  transform: `rotate(${photo.rotate}deg)`,
                }}
              >
                <div className="relative w-full h-full rounded overflow-hidden">
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 208px, 240px"
                    loading="lazy"
                  />
                  <Image
                    src="/frame.png"
                    alt=""
                    fill
                    className="object-cover scale-250 pointer-events-none z-10 opacity-50"
                    sizes="(max-width: 768px) 208px, 240px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
