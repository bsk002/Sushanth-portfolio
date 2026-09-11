import { motion } from "motion/react";
import { ComicTape, ComicSticker, DoodleArrow } from "./ComicDoodles";
import { Wrench, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 overflow-hidden bg-[#0F0F10] bg-halftone-dark">
      
      {/* Decorative backdrop shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFE500]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2445EA]/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <ComicSticker text="DOSSIER // 01" color="yellow" rotate="-1.5deg" />
          </div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#FFE500] uppercase tracking-[0.4em] text-xs md:text-sm mb-3 font-extrabold font-grotesk"
          >
            The Visionary
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-editorial font-black tracking-tighter uppercase"
          >
            SUSHANTH <span className="text-white">KUMAR</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left: Artist Portrait as Comic Polaroid */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-sm bg-[#FAF7EE] p-4 pb-6 rounded-3xl border-[4px] border-black comic-shadow-lg"
            >
              {/* Scotch Tape at top corner */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <ComicTape text="PORTRAIT // 2026" />
              </div>

              {/* Photo Frame */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border-[3px] border-black bg-black">
                <img 
                  src="https://i.ibb.co/Y4Sn7F9J/Whats-App-Image-2026-04-02-at-12-58-19-PM.jpg" 
                  alt="Artist Portrait" 
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Polaroid Caption */}
              <div className="mt-4 flex items-center justify-between text-black px-1">
                <div>
                  <p className="font-display font-black text-lg leading-none">BOPPANA SUSHANTH</p>
                  <p className="font-mono text-[10px] text-neutral-600 font-bold uppercase mt-1">Digital Head & Designer</p>
                </div>
                <span className="px-2.5 py-1 bg-[#FFE500] border-2 border-black rounded-lg text-[10px] font-black uppercase tracking-wider">
                  VERIFIED ★
                </span>
              </div>
            </motion.div>

            {/* Hand-drawn doodle annotation */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 z-20 items-center gap-2 text-[#FFE500]">
              <span className="font-comic text-xs bg-black text-[#FFE500] px-2 py-1 border border-[#FFE500]">THE MIND</span>
              <DoodleArrow direction="left" className="text-[#FFE500]" />
            </div>
          </div>

          {/* Right: Bio & Technical Specs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF7EE] text-black p-6 md:p-10 rounded-3xl border-[4px] border-black comic-shadow relative"
            >
              {/* Comic Speech Indicator */}
              <div className="inline-block px-3 py-1 bg-[#FFE500] border-2 border-black rounded-lg text-xs font-black uppercase tracking-wider mb-4 rotate-[-1deg]">
                CREATIVE STATEMENT //
              </div>

              <p className="text-base md:text-lg font-medium leading-relaxed text-neutral-900">
                Hi, I’m <strong className="bg-[#FFE500] px-1.5 py-0.5 border border-black text-black font-black">Boppana Sushanth Kumar</strong>. A graphic designer focused on creating clean, impactful visuals that don’t just look good but communicate with purpose.
                <br /><br />
                From promotional posters and ad creatives to concept-driven designs, I build visuals that elevate brand identity and leave a lasting impression. Alongside design, I strategize and optimize social media presence to drive reach, engagement, and conversions.
                <br /><br />
                As the <strong className="bg-[#D2FF00] px-1.5 py-0.5 border border-black text-black font-black">Digital Head</strong> of <strong className="bg-black text-white px-1.5 py-0.5 font-bold">Club Infinity Studios</strong>, I lead the creative direction for event promotions, managing content strategy and crafting compelling campaigns.
              </p>
            </motion.div>
            
            {/* Technical Arsenal & Expertise Panels */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {/* Technical Arsenal */}
              <div className="bg-[#18181A] text-white p-5 md:p-6 rounded-3xl border-[3px] border-black comic-shadow group hover:border-[#FFE500] transition-colors relative">
                <span className="absolute -top-3 left-6 px-2.5 py-0.5 bg-[#FFE500] text-black border-2 border-black rounded-full text-[9px] font-black uppercase tracking-wider">
                  TOOLS
                </span>
                <h4 className="text-[#FFE500] font-black uppercase tracking-wider text-xs md:text-sm mb-2 font-display">
                  Technical Arsenal
                </h4>
                <p className="text-xs md:text-sm text-neutral-300 font-bold leading-relaxed font-sans">
                  Photoshop, Affinity, Canva, Premiere Pro
                </p>
              </div>

              {/* Expertise */}
              <div className="bg-[#18181A] text-white p-5 md:p-6 rounded-3xl border-[3px] border-black comic-shadow group hover:border-[#FF2B2B] transition-colors relative">
                <span className="absolute -top-3 left-6 px-2.5 py-0.5 bg-[#FF2B2B] text-white border-2 border-black rounded-full text-[9px] font-black uppercase tracking-wider">
                  SKILLS
                </span>
                <h4 className="text-[#FF2B2B] font-black uppercase tracking-wider text-xs md:text-sm mb-2 font-display">
                  Expertise
                </h4>
                <p className="text-xs md:text-sm text-neutral-300 font-bold leading-relaxed font-sans">
                  Social Media Strategy, High-Impact Visuals, Brand Identity
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

