import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Maximize2, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ComicMarquee from "../components/ComicMarquee";
import { ComicSticker, ComicTape, ComicBarcode, DoodleArrow } from "../components/ComicDoodles";

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
    title: "Komorebi Tea Co. Brand Launch",
    category: "Sponsor Creative",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
    color: false,
    badgeColor: "lime" as const,
  },
  {
    title: "Hashtag India: Runway & High Fashion Edition",
    category: "Editorial Poster",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    color: false,
    badgeColor: "yellow" as const,
  },
  {
    title: "Typography & Grid Systems Masterclass",
    category: "Design Workshop",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    color: false,
    badgeColor: "blue" as const,
  },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0F0F10] bg-halftone-dark pt-24 md:pt-32 relative overflow-hidden text-white">
      {/* Ambient background glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFE500]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2445EA]/5 rounded-full blur-[140px] -z-10" />

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32 relative z-10">
        
        {/* Top Hero Banner in Archive */}
        <div className="mb-14 md:mb-20">
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-black bg-[#FFE500] hover:bg-white border-[3px] border-black px-5 py-2.5 rounded-2xl comic-shadow hover:translate-y-[-2px] transition-all mb-8 md:mb-12 group"
          >
            <ArrowLeft size={16} className="stroke-[3px] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Headline & Stats */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <ComicSticker text="COMPLETE ARCHIVE // 2026" color="yellow" rotate="-1.5deg" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight leading-none mb-6">
                  <span className="block text-white">B.S.K</span>
                  <span className="block text-stroke-white text-transparent">ARCHIVE</span>
                </h1>
              </motion.div>
              
              {/* Stats Comic Badges */}
              <div className="flex flex-wrap gap-4 md:gap-6 mt-6">
                <div className="bg-[#FAF7EE] text-black p-4 md:p-6 rounded-3xl border-[3.5px] border-black comic-shadow flex-1 min-w-[140px] max-w-[220px]">
                  <span className="text-4xl md:text-5xl font-black block font-display text-black">
                    500+
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-700 mt-1 block font-black font-mono">
                    POSTERS
                  </span>
                </div>

                <div className="bg-[#FFE500] text-black p-4 md:p-6 rounded-3xl border-[3.5px] border-black comic-shadow flex-1 min-w-[140px] max-w-[220px]">
                  <span className="text-4xl md:text-5xl font-black block font-display text-black">
                    6+
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-black mt-1 block font-black font-mono">
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
                className="w-full max-w-sm bg-[#FAF7EE] p-3.5 pb-5 rounded-3xl border-[4px] border-black comic-shadow-lg relative"
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

                <div className="mt-3 flex items-center justify-between px-1 text-black">
                  <span className="font-display font-black text-sm tracking-wide">SUSHANTH KUMAR</span>
                  <span className="text-[9px] font-mono font-bold bg-[#D2FF00] px-2 py-0.5 border border-black rounded uppercase">
                    DIRECTOR
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Marquee Divider */}
        <div className="mb-14">
          <ComicMarquee />
        </div>

        {/* Grid of All 18 Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div className="pt-3 px-1">
                <h3 className="text-base md:text-lg font-black leading-snug font-sans text-neutral-900 group-hover:text-[#2445EA] transition-colors">
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

