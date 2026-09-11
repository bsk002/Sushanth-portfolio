import { motion } from "motion/react";

interface ComicMarqueeProps {
  items?: string[];
  direction?: "left" | "right";
  speed?: number;
  variant?: "yellow" | "black" | "red";
  className?: string;
}

export default function ComicMarquee({
  items = [
    "GRAPHIC DESIGN",
    "BRAND IDENTITY",
    "SOCIAL MEDIA STRATEGY",
    "500+ POSTERS CRAFTED",
    "DIGITAL ART DIRECTION",
    "EDITORIAL DESIGN",
    "CLUB INFINITY STUDIOS",
    "HIGH IMPACT VISUALS",
  ],
  direction = "left",
  speed = 25,
  variant = "yellow",
  className = "",
}: ComicMarqueeProps) {
  const styles = {
    yellow: "bg-[#FFE500] text-black border-y-[3px] border-black",
    black: "bg-black text-[#FFE500] border-y-[3px] border-[#FFE500]",
    red: "bg-[#FF2B2B] text-white border-y-[3px] border-black",
  }[variant];

  // Repeat items so it loops without breaks
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 font-display select-none ${styles} ${className}`}>
      <motion.div
        className="inline-flex items-center gap-8 text-sm md:text-base font-black tracking-widest uppercase"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((text, i) => (
          <span key={i} className="inline-flex items-center gap-6">
            <span>{text}</span>
            <span className="text-base font-comic">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
