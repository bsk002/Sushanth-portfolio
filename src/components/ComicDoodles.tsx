import React from "react";

export function ComicTape({ className = "", text = "" }: { className?: string; text?: string }) {
  return (
    <div
      className={`inline-block px-3 py-0.5 bg-[#FFF9D2]/90 border border-black/30 text-[9px] font-mono tracking-widest text-black/80 font-bold uppercase shadow-sm rotate-[-2deg] select-none ${className}`}
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      {text || "••• TAPE •••"}
    </div>
  );
}

export function DoodleArrow({ className = "", direction = "right" }: { className?: string; direction?: "right" | "left" | "down" | "up" }) {
  const rotation = direction === "left" ? "scale-x-[-1]" : direction === "down" ? "rotate-90" : direction === "up" ? "-rotate-90" : "";
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 54 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${rotation} ${className}`}
    >
      <path d="M4 18C16 12 28 8 46 16" />
      <path d="M36 6L48 16L34 26" />
    </svg>
  );
}

export function ComicSpeechBubble({
  children,
  className = "",
  tailPosition = "bottom-left",
  variant = "yellow",
}: {
  children: React.ReactNode;
  className?: string;
  tailPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  variant?: "yellow" | "white" | "red" | "dark";
}) {
  const bgStyles = {
    yellow: "bg-[#FFE500] text-black border-black",
    white: "bg-[#FAF7EE] text-black border-black",
    red: "bg-[#FF2B2B] text-white border-black",
    dark: "bg-[#18181A] text-white border-black",
  }[variant];

  return (
    <div className={`relative inline-block border-[3px] rounded-2xl p-4 font-bold ${bgStyles} comic-shadow ${className}`}>
      {children}
      {/* Speech bubble tail */}
      {tailPosition === "bottom-left" && (
        <span className="absolute -bottom-3 left-6 w-0 h-0 border-x-[8px] border-x-transparent border-t-[12px] border-t-black" />
      )}
      {tailPosition === "bottom-right" && (
        <span className="absolute -bottom-3 right-6 w-0 h-0 border-x-[8px] border-x-transparent border-t-[12px] border-t-black" />
      )}
    </div>
  );
}

export function StarburstBadge({
  text = "500+",
  subtext = "POSTERS",
  className = "",
  color = "yellow",
}: {
  text: string;
  subtext?: string;
  className?: string;
  color?: "yellow" | "red" | "blue" | "lime";
}) {
  const bgColors = {
    yellow: "bg-[#FFE500] text-black",
    red: "bg-[#FF2B2B] text-white",
    blue: "bg-[#2445EA] text-white",
    lime: "bg-[#B8FF00] text-black",
  }[color];

  return (
    <div className={`relative inline-flex flex-col items-center justify-center p-3 rounded-full border-[3px] border-black ${bgColors} comic-shadow font-black select-none ${className}`}>
      <span className="font-display text-2xl md:text-3xl leading-none">{text}</span>
      {subtext && <span className="text-[8px] tracking-wider uppercase font-sans font-black mt-0.5">{subtext}</span>}
    </div>
  );
}

export function ComicSticker({
  text,
  className = "",
  color = "yellow",
  rotate = "-3deg",
}: {
  text: string;
  className?: string;
  color?: "yellow" | "red" | "blue" | "lime" | "white";
  rotate?: string;
}) {
  const colorMap = {
    yellow: "bg-[#FFE500] text-black",
    red: "bg-[#FF2B2B] text-white",
    blue: "bg-[#2445EA] text-white",
    lime: "bg-[#B8FF00] text-black",
    white: "bg-[#FAF7EE] text-black",
  }[color];

  return (
    <span
      style={{ transform: `rotate(${rotate})` }}
      className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wider border-2 border-black ${colorMap} comic-shadow-sm select-none ${className}`}
    >
      {text}
    </span>
  );
}

export function ComicBarcode({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[2px] bg-white p-1.5 border-2 border-black inline-block ${className}`}>
      {[4, 2, 8, 1, 6, 2, 4, 1, 7, 3, 2, 5, 2, 8, 3, 1, 5, 2, 6, 1, 4, 2].map((w, i) => (
        <span key={i} className="inline-block bg-black h-5" style={{ width: `${w}px` }} />
      ))}
    </div>
  );
}
