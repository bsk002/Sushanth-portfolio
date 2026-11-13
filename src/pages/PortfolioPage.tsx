import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Maximize2, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ComicMarquee from "../components/ComicMarquee";
import { ComicSticker, ComicTape } from "../components/ComicDoodles";

type BadgeColor = "yellow" | "blue" | "red" | "lime";

const badgeColors: BadgeColor[] = ["yellow", "blue", "red", "lime"];

const hashtagMagazineImages = [
  "/assets/aistudio/2_f037dd96.png",
  "/assets/aistudio/3_532413b9.png",
  "/assets/aistudio/6_6627b75a.png",
  "/assets/aistudio/7_6d1e27a7.png",
  "/assets/aistudio/8_c874ef28.png",
  "/assets/aistudio/9_29ce28de.png",
  "/assets/aistudio/10_4e7fd8b8.png",
  "/assets/aistudio/12_724247f8.png",
  "/assets/aistudio/13_d815d27e.png",
  "/assets/aistudio/14_14108b20.png",
  "/assets/aistudio/15_598e9623.png",
  "/assets/aistudio/16_95bdc1a8.png",
  "/assets/aistudio/17_2b791105.png",
  "/assets/aistudio/18_b0427168.png",
  "/assets/aistudio/19_f518d385.png",
  "/assets/aistudio/20_a7d693fd.png",
  "/assets/aistudio/21_8e688b31.png",
  "/assets/aistudio/22_e61c4cc6.png",
  "/assets/aistudio/23_f2d4c1cd.png",
  "/assets/aistudio/24_c71db1b7.png",
  "/assets/aistudio/25_548b4f11.png",
  "/assets/aistudio/26_86177eed.png",
  "/assets/aistudio/28_44d10029.png",
];

const allProjects = [
  {
    title: "Rana Daggubati Event",
    category: "banner",
    image: "https://i.ibb.co/VP54ZYN/Whats-App-Image-2026-04-02-at-1-23-27-PM.jpg",
    color: false,
    badgeColor: "yellow" as const,
  },
  {
    title: "Prashanth Potluri Guest Lecture.",
    category: "Banner",
    image: "https://i.ibb.co/6c20RJRy/Whats-App-Image-2026-04-02-at-1-29-49-PM.jpg",
    color: false,
    badgeColor: "blue" as const,
  },
  {
    title: "Grave Rave Infinity's flagship Event",
    category: "Banner",
    image: "https://i.ibb.co/xS1g2Zhs/Whats-App-Image-2026-04-02-at-1-23-32-PM.jpg",
    color: false,
    badgeColor: "red" as const,
  },
  {
    title: "Fright Walk :Halloween Event",
    category: "Poster",
    image: "https://i.ibb.co/LDFvy1VQ/Whats-App-Image-2026-04-02-at-1-23-30-PM.jpg",
    color: false,
    badgeColor: "lime" as const,
  },
  {
    title: "Pista House Hyderabad",
    category: "Sponsor banner",
    image: "https://i.ibb.co/3yP2Q7Vr/Whats-App-Image-2026-04-02-at-1-23-16-PM-2.jpg",
    color: false,
    badgeColor: "yellow" as const,
  },
  {
    title: "Node Zero",
    category: "Sponsor banner",
    image: "https://i.ibb.co/LXNdGjHX/Whats-App-Image-2026-04-02-at-1-23-16-PM-1.jpg",
    color: false,
    badgeColor: "blue" as const,
  },
  {
    title: "Teaching Kids Creating Content and Graphic Designing.",
    category: "Workshop",
    image: "https://i.ibb.co/99jnnG2d/canva-workshop-20260313-205422-0000-2.png",
    color: false,
    badgeColor: "lime" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster",
    image: "https://i.ibb.co/HD1QJnxY/1.png",
    color: false,
    badgeColor: "red" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster.",
    image: "https://i.ibb.co/s9W3tBj2/2.png",
    color: false,
    badgeColor: "yellow" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster.",
    image: "https://i.ibb.co/ZRQj9kDF/Red-and-White-Simple-Beauty-Magazine-Cover-Instagram-Post-45-anf.png",
    color: false,
    badgeColor: "blue" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster.",
    image: "https://i.ibb.co/9kZYfsqt/1.png",
    color: false,
    badgeColor: "lime" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster.",
    image: "https://i.ibb.co/WNL19G45/Red-and-White-Simple-Beauty-Magazine-Cover-Instagram-Post-45.png",
    color: false,
    badgeColor: "red" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster.",
    image: "https://i.ibb.co/FkNvZ1YS/Red-and-White-Simple-Beauty-Magazine-Cover-Instagram-Post-45-as-c.png",
    color: false,
    badgeColor: "yellow" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster.",
    image: "https://i.ibb.co/5gngwSbc/sdvdsvsv.png",
    color: false,
    badgeColor: "blue" as const,
  },
  {
    title: "Hashtag Magazine India.",
    category: "Advertisement poster.",
    image: "https://i.ibb.co/rgKCG5w/fwf.png",
    color: false,
    badgeColor: "lime" as const,
  },
  {
    title: "Chromatic Conversation Edition 3.",
    category: "Promotion poster.",
    image: "https://i.ibb.co/M5PPg2Q2/Whats-App-Image-2026-04-02-at-2-37-24-PM.jpg",
    color: false,
    badgeColor: "yellow" as const,
  },
  {
    title: "Chromatic Conversation Edition 3.",
    category: "Sponsor Invite Poster.",
    image: "https://i.ibb.co/XRrw03p/Whats-App-Image-2026-04-02-at-2-37-54-PM.jpg",
    color: false,
    badgeColor: "blue" as const,
  },
  {
    title: "Chromatic Conversations Edition 3.",
    category: "Sponsor Invite poster.",
    image: "https://i.ibb.co/vCMVHn5x/Whats-App-Image-2026-04-02-at-2-38-08-PM.jpg",
    color: false,
    badgeColor: "red" as const,
  },
  {
    title: "the FNF arena Logo Redesign",
    category: "Logo Re-design",
    image: "https://i.ibb.co/G3C5YdsP/black-background-red-font.png",
    color: false,
    badgeColor: "red" as const,
  },
  {
    title: "FNF arena Billboard Concept",
    category: "Billboard design",
    image: "https://i.ibb.co/HTkghY0m/food-area.png",
    color: false,
    badgeColor: "yellow" as const,
  },
  {
    title: "FNF Venue Logo Presentation Concept",
    category: "Venue concept",
    image: "https://i.ibb.co/RGvjTzB9/Venue-Presentation-red-white.png",
    color: false,
    badgeColor: "blue" as const,
  },
  {
    title: "Project Hail Mary poster",
    category: "Poster",
    image: "https://i.ibb.co/VycqgbN/Project-Hail-Mary-poster.png",
    color: false,
    badgeColor: "lime" as const,
  },
  {
    title: "Concept Art",
    category: "Poster",
    image: "https://i.ibb.co/whwWJPKh/Whats-App-Image-2026-08-24-at-11-19-17-PM-3.jpg",
    color: false,
    badgeColor: "red" as const,
  },
  {
    title: "Banner Concept for Delight Building Solutions",
    category: "Banner Concept",
    image: "https://i.ibb.co/FbLpkxH4/banner.png",
    color: false,
    badgeColor: "blue" as const,
  },
  ...hashtagMagazineImages.map((image, idx) => ({
    title: "Hashtag Magazine India",
    category: "Advertisement Poster",
    image,
    color: false,
    badgeColor: badgeColors[idx % badgeColors.length],
  })),
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0F0F10] bg-halftone-dark pt-20 sm:pt-24 md:pt-28 relative overflow-hidden text-white">
      {/* Ambient background glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFE500]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2445EA]/5 rounded-full blur-[140px] -z-10" />

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 relative z-10">
        
        {/* Top Hero Banner in Archive */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black bg-[#FFE500] hover:bg-white border-[3px] border-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl comic-shadow hover:translate-y-[-2px] transition-all mb-5 sm:mb-7 group"
          >
            <ArrowLeft size={16} className="stroke-[3px] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Headline & Stats */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <ComicSticker text="COMPLETE ARCHIVE // 2026" color="yellow" rotate="-1.5deg" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-normal leading-none mb-4 sm:mb-5">
                  <span className="block text-white">B.S.K</span>
                  <span className="block text-stroke-white text-transparent">ARCHIVE</span>
                </h1>
              </motion.div>
              
              {/* Stats Comic Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-5">
                <div className="bg-[#FAF7EE] text-black p-3.5 sm:p-5 rounded-3xl border-[3.5px] border-black comic-shadow flex-1 min-w-[130px] max-w-[200px]">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black block font-display text-black leading-none">
                    500+
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-700 mt-1.5 block font-black font-mono">
                    POSTERS
                  </span>
                </div>

                <div className="bg-[#FFE500] text-black p-3.5 sm:p-5 rounded-3xl border-[3.5px] border-black comic-shadow flex-1 min-w-[130px] max-w-[200px]">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black block font-display text-black leading-none">
                    4+
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider text-black mt-1.5 block font-black font-mono">
                    YEARS EXP.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Character / Hero Cutout */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-xs sm:max-w-sm bg-[#FAF7EE] p-3 pb-4 rounded-3xl border-[4px] border-black comic-shadow-lg relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <ComicTape text="LEAD CREATIVE" />
                </div>

                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border-[3px] border-black bg-black">
                  <img 
                    src="https://i.ibb.co/0Tnp2b7/3.png" 
                    alt="Sushanth Kumar" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between px-1 text-black">
                  <span className="font-display font-black text-xs sm:text-sm tracking-wide">SUSHANTH KUMAR</span>
                  <span className="text-[9px] font-mono font-bold bg-[#D2FF00] px-2 py-0.5 border border-black rounded uppercase">
                    DIRECTOR
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Marquee Divider */}
        <div className="mb-8 sm:mb-10">
          <ComicMarquee />
        </div>

        {/* Grid of All Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {allProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(project.image)}
              className="group relative bg-[#FAF7EE] text-black border-[3.5px] border-black rounded-3xl p-3 pb-4 comic-shadow hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#000] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Top Strip */}
              <div className="flex items-center justify-between px-1 pb-2 border-b-2 border-black/80 mb-2">
                <span className="font-display font-black text-xs tracking-wider text-neutral-800">
                  VOL. {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[9px] uppercase font-bold text-neutral-600">
                  COMMISSION
                </span>
              </div>

              {/* Poster Image Frame */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border-[2.5px] border-black relative bg-black">
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
                    color={project.badgeColor} 
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

              {/* Card Bottom */}
              <div className="pt-2.5 px-1">
                <h3 className="text-sm sm:text-base md:text-[17px] font-black leading-snug font-sans text-neutral-900 group-hover:text-[#2445EA] transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Enlarged Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-[#FFE500] text-black border-[3px] border-black rounded-2xl flex items-center justify-center comic-shadow z-50 hover:bg-[#FF2B2B] hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              <X size={24} className="stroke-[3px]" />
            </motion.button>

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
    </main>
  );
}

