"use client";

import Image from "next/image";

const flowers = [
  { top: "2%", left: "1%", rotate: 22, opacity: 0.11, size: 105 },
  { top: "8%", right: "5%", rotate: -48, opacity: 0.09, size: 85 },
  { top: "18%", left: "-2%", rotate: 135, opacity: 0.1, size: 115 },
  { top: "31%", right: "-1%", rotate: -12, opacity: 0.08, size: 95 },
  { top: "27%", left: "6%", rotate: 68, opacity: 0.07, size: 75 },
  { top: "44%", right: "3%", rotate: -72, opacity: 0.1, size: 110 },
  { top: "53%", left: "-3%", rotate: 195, opacity: 0.09, size: 90 },
  { top: "62%", right: "7%", rotate: 38, opacity: 0.08, size: 80 },
  { top: "71%", left: "2%", rotate: -155, opacity: 0.11, size: 100 },
  { top: "83%", right: "0%", rotate: 88, opacity: 0.09, size: 95 },
  { top: "76%", left: "-1%", rotate: -28, opacity: 0.07, size: 70 },
  { top: "93%", right: "4%", rotate: 162, opacity: 0.1, size: 105 },
];

export default function BackgroundFlowers() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {flowers.map((f, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: f.top,
            left: "left" in f ? f.left : undefined,
            right: "right" in f ? f.right : undefined,
            transform: `rotate(${f.rotate}deg)`,
            opacity: f.opacity,
            width: f.size,
            height: f.size,
          }}
        >
          <Image
            src="/flower3.svg"
            alt=""
            width={f.size}
            height={f.size}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
