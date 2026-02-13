import Image from "next/image";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const positionClasses: Record<Position, string> = {
  "top-left": "absolute -top-1 -left-1 md:-top-2 md:-left-2 rotate-90",
  "top-right": "absolute -top-1 -right-1 md:-top-2 md:-right-2 scale-x-[-1] -rotate-90",
  "bottom-left": "absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 scale-y-[-1] -rotate-90",
  "bottom-right": "absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 scale-[-1] rotate-90",
};

export default function FloralDecor({ positions = ["top-left", "bottom-right"], flowerSrc }: { positions?: Position[]; flowerSrc?: string }) {
  return (
    <>
      {positions.map((pos) => (
        <div key={pos} className={`${positionClasses[pos]} pointer-events-none z-10 w-24 h-24 md:w-28 md:h-28`}>
          <Image
            src={flowerSrc || "/flower.svg"}
            alt=""
            width={80}
            height={80}
            className={`w-full h-full object-contain ${pos.includes("left") ? "opacity-45" : "opacity-40"}`}
          />
        </div>
      ))}
    </>
  );
}
