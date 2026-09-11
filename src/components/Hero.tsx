import { motion } from "motion/react";
import { ArrowUpRight, Instagram, Linkedin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ComicTape, ComicBarcode, ComicSticker, DoodleArrow } from "./ComicDoodles";

const PinterestIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.397 2.965 7.397 6.93 0 4.135-2.607 7.462-6.223 7.462-1.214 0-2.354-.63-2.745-1.369l-.747 2.848c-.27 1.031-1.001 2.324-1.488 3.117 1.127.347 2.32.535 3.554.535 6.622 0 11.988-5.365 11.988-11.987C24.005 5.367 18.639 0 12.017 0z"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 w-full overflow-hidden bg-halftone-dark">
      
      {/* Decorative comic background ambient elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFE500]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF2B2B]/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 relative z-10">
            
            {/* Comic Top Stickers */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 sm:mb-5">
              <ComicSticker text="★ ISSUE #01" color="yellow" rotate="-2deg" />
              <ComicSticker text="VISUAL ARCHIVE" color="white" rotate="1.5deg" />
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#FFE500] font-bold">
                <Sparkles size={13} /> HYDERABAD, IN
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-huge font-black mb-5 md:mb-6 leading-none tracking-normal select-none">
                <span className="block text-[#FFE500] drop-shadow-[4px_4px_0px_#000000]">
                  B.S.K
                </span>
                <span className="block text-white">
                  STUDIO
                </span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 md:gap-6 sm:items-center"
            >
              <Link
                to="/portfolio"
                className="px-7 md:px-9 py-3.5 md:py-4 bg-[#FFE500] text-black border-[3px] border-black rounded-2xl font-black uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-2 group comic-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_#000] transition-all"
              >
                Explore Work
                <ArrowUpRight size={20} className="stroke-[3px] group-hover:rotate-45 transition-transform" />
              </Link>

              <div className="flex justify-center sm:justify-start gap-2.5 sm:gap-3">
                {[
                  { Icon: Instagram, href: 'https://www.instagram.com/sushanth_digital_art?igsh=ZTExc3Bmd25waHI3', label: "Instagram" },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/sushanth-kumar-boppana-025825222?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: "LinkedIn" },
                  { Icon: PinterestIcon, href: 'https://in.pinterest.com/sushanthboppana/', label: "Pinterest" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? -4 : 4 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-2xl bg-[#FAF7EE] text-black border-[3px] border-black comic-shadow-sm flex items-center justify-center transition-all hover:bg-[#FFE500]"
                  >
                    <social.Icon size={19} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards - Comic Panels */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-7 sm:mt-8 md:mt-10 grid grid-cols-2 gap-3.5 sm:gap-4 md:gap-6"
            >
              {/* 500+ Posters Panel */}
              <div className="relative bg-[#18181A] border-[3px] border-black rounded-3xl p-4 sm:p-5 md:p-6 comic-shadow group hover:border-[#FFE500] transition-colors">
                <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[#FFE500] text-black border-2 border-black rounded-full text-[9px] font-black uppercase tracking-wider rotate-3">
                  VOLUME
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black block text-[#FFE500] font-display tracking-tight leading-none">
                  500+
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-300 mt-2 block font-extrabold font-grotesk">
                  Posters Crafted
                </span>
              </div>

              {/* 6+ Years Experience Panel */}
              <div className="relative bg-[#18181A] border-[3px] border-black rounded-3xl p-4 sm:p-5 md:p-6 comic-shadow group hover:border-[#FF2B2B] transition-colors">
                <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[#FF2B2B] text-white border-2 border-black rounded-full text-[9px] font-black uppercase tracking-wider -rotate-2">
                  TENURE
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black block text-white font-display tracking-tight leading-none">
                  6+
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-300 mt-2 block font-extrabold font-grotesk">
                  Years Experience
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Featured Image as Comic Issue Cover */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Scotch Tape Graphic at Top */}
              <div className="flex justify-center -mb-3 relative z-30">
                <ComicTape text="SUSHANTH // 2026 EDITION" className="shadow-md" />
              </div>

              {/* Comic Panel Container */}
              <div className="bg-[#FAF7EE] p-3 md:p-4 rounded-[2.5rem] border-[4px] border-black comic-shadow-lg relative overflow-hidden group">
                
                {/* Comic Header Strip inside card */}
                <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b-2 border-black text-black">
                  <span className="font-display font-black text-sm tracking-wider">ISSUE #01</span>
                  <span className="font-comic text-[10px] text-[#FF2B2B] uppercase">COLLECTOR'S EDITION</span>
                  <span className="font-mono text-xs font-black">VOL. 26</span>
                </div>

                {/* Portrait Image Frame */}
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden border-[3px] border-black bg-black relative">
                  <img 
                    src="https://i.ibb.co/0Tnp2b7/3.png" 
                    alt="Sushanth Kumar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Comic Badge inside picture */}
                  <div className="absolute bottom-3 left-3 bg-[#FFE500] text-black border-2 border-black px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider comic-shadow-sm rotate-[-2deg]">
                    BOOPANA SUSHANTH
                  </div>
                </div>

                {/* Bottom Barcode and metadata */}
                <div className="flex items-center justify-between pt-3 px-2">
                  <ComicBarcode />
                  <div className="text-right text-[9px] font-mono text-neutral-800 font-bold leading-tight">
                    <div>DIGITAL HEAD</div>
                    <div>AUTHENTICATED ★</div>
                  </div>
                </div>

              </div>

              {/* Little doodle arrow pointing to portrait */}
              <div className="hidden sm:flex absolute -bottom-8 -left-10 z-20 items-center gap-2 text-[#FFE500]">
                <DoodleArrow direction="up" className="text-[#FFE500]" />
                <span className="font-comic text-xs text-[#FFE500] bg-black px-2 py-0.5 border border-[#FFE500]">THE DESIGNER</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

