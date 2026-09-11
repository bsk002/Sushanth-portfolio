import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Maximize2, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ComicTape, ComicSticker, ComicBarcode } from "./ComicDoodles";

const projects = [
  {
    title: "Rana Daggubati Event",
    category: "banner",
    image: "https://i.ibb.co/VP54ZYN/Whats-App-Image-2026-04-02-at-1-23-27-PM.jpg",
    color: false,
    issue: "VOL. 01",
    stickerColor: "yellow" as const,
  },
  {
    title: "Prashanth Potluri Guest Lecture.",
    category: "Banner",
    image: "https://i.ibb.co/6c20RJRy/Whats-App-Image-2026-04-02-at-1-29-49-PM.jpg",
    color: false,
    issue: "VOL. 02",
    stickerColor: "blue" as const,
  },
  {
    title: "Grave Rave Infinity's flagship Event",
    category: "Banner",
    image: "https://i.ibb.co/xS1g2Zhs/Whats-App-Image-2026-04-02-at-1-23-32-PM.jpg",
    color: false,
    issue: "VOL. 03",
    stickerColor: "red" as const,
  },
  {
    title: "Fright Walk :Halloween Event",
    category: "Poster",
    image: "https://i.ibb.co/LDFvy1VQ/Whats-App-Image-2026-04-02-at-1-23-30-PM.jpg",
    color: false,
    issue: "VOL. 04",
    stickerColor: "lime" as const,
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#0F0F10] bg-halftone-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFE500]/5 rounded-full blur-[140px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-10 md:mb-12 gap-5 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <ComicSticker text="CURATED CUTS" color="red" rotate="-1deg" />
            </div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FFE500] uppercase tracking-[0.25em] md:tracking-[0.35em] text-xs md:text-sm mb-2 block font-extrabold font-grotesk"
            >
              Selected Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-editorial font-black tracking-normal"
            >
              PORTFOLIO<span className="text-[#FFE500]">.</span>
            </motion.h2>
          </div>
          
          <Link 
            to="/portfolio"
            className="group flex items-center gap-2 font-black uppercase tracking-wider text-xs md:text-sm bg-[#FFE500] text-black px-5 md:px-7 py-3 md:py-3.5 rounded-2xl border-[3px] border-black comic-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all self-start md:self-end"
          >
            View All Projects 
            <ArrowUpRight size={18} className="stroke-[3px] group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        {/* 4 Comic Poster Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(project.image)}
              className="group relative bg-[#FAF7EE] text-black border-[3.5px] border-black rounded-3xl p-3 pb-4 comic-shadow hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#000] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Top Strip */}
              <div className="flex items-center justify-between px-1 pb-2 border-b-2 border-black/80 mb-2">
                <span className="font-display font-black text-xs tracking-wider text-neutral-800">
                  {project.issue}
                </span>
                <span className="font-mono text-[9px] uppercase font-bold text-neutral-600">
                  SPECIAL PRINT
                </span>
              </div>

              {/* Poster Image Frame (Full color, always crisp) */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-[2.5px] border-black relative bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Always-visible Category Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <ComicSticker 
                    text={project.category} 
                    color={project.stickerColor} 
                    rotate={i % 2 === 0 ? "-2deg" : "2deg"} 
                  />
                </div>

                {/* Quick zoom button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(project.image);
                  }}
                  className="absolute bottom-2.5 right-2.5 w-9 h-9 bg-[#FAF7EE] text-black border-2 border-black rounded-xl flex items-center justify-center comic-shadow-sm hover:bg-[#FFE500] transition-colors"
                  aria-label="Enlarge image"
                >
                  <Maximize2 size={16} className="stroke-[2.5px]" />
                </button>
              </div>

              {/* Card Bottom: Title and Footer strip */}
              <div className="pt-2.5 px-1">
                <h3 className="text-sm sm:text-base md:text-[17px] font-black leading-snug font-sans text-neutral-900 group-hover:text-[#2445EA] transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enlarged Comic Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-[#FFE500] text-black border-[3px] border-black rounded-2xl flex items-center justify-center comic-shadow z-50 hover:bg-[#FF2B2B] hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              <X size={24} className="stroke-[3px]" />
            </motion.button>

            {/* Modal Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-4xl max-h-[88vh] bg-[#FAF7EE] p-3 md:p-4 rounded-3xl border-[4px] border-black comic-shadow-lg flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between pb-2 mb-2 border-b-2 border-black text-black">
                <span className="font-display font-black text-sm">B.S.K ARCHIVE // HIGH-RES EXHIBIT</span>
                <span className="font-comic text-xs text-[#FF2B2B]">FULL POSTER VIEW</span>
              </div>
              <div className="overflow-hidden rounded-2xl border-[3px] border-black max-h-[75vh]">
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-[75vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

