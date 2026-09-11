import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { ComicBarcode, ComicSticker } from "./ComicDoodles";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-[#0A0A0B] text-white border-t-[4px] border-black overflow-hidden">
      
      {/* Top Warning / Issue Stripe */}
      <div className="bg-[#FFE500] text-black py-2 px-6 border-b-[3px] border-black flex items-center justify-between font-mono font-black text-xs uppercase tracking-wider overflow-hidden">
        <div className="flex items-center gap-3 shrink-0">
          <span className="animate-pulse">●</span>
          <span>ISSUE #2026 // END OF TRANSMISSION</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px]">
          <span>PRINTED IN HYPER-RESOLUTION</span>
          <span>★</span>
          <span>AVAILABLE FOR SELECTIVE COMMISSIONS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        
        {/* Navigation row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b-2 border-white/10">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="font-black tracking-normal text-2xl sm:text-3xl md:text-4xl font-display px-3 py-1 bg-[#FFE500] text-black border-[3px] border-black rounded-xl comic-shadow hover:bg-white transition-colors"
            >
              B.S.K
            </Link>
            <ComicSticker text="DESIGN ARCHIVE" color="lime" rotate="-2deg" />
          </div>

          <button 
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white text-black px-5 py-2.5 rounded-2xl border-[3px] border-black comic-shadow hover:bg-[#FFE500] hover:translate-y-[-2px] transition-all group cursor-pointer"
          >
            <ArrowLeft size={15} className="stroke-[3px] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Big Agency Comic Banner */}
        <div className="relative py-8 md:py-12 text-center">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-normal text-stroke-white text-transparent select-none leading-none"
          >
            B.S.K STUDIO
          </motion.h2>
          
          <div className="mt-3 sm:mt-4 flex flex-col items-center justify-center">
            <p className="text-xs uppercase tracking-[0.25em] md:tracking-[0.35em] text-neutral-400 mb-1.5 font-black font-mono">
              © {new Date().getFullYear()} B.S.K Studio
            </p>
            <p className="text-xs md:text-sm text-[#FFE500] font-black uppercase tracking-wider font-grotesk">
              Designed for the bold and the creative.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Barcode */}
        <div className="pt-6 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <ComicBarcode />
            <div className="text-[10px] font-mono text-neutral-500 font-bold uppercase">
              <p>SERIES: CREATIVE DIRECTION</p>
              <p>AUTH: BOPPANA SUSHANTH KUMAR</p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-neutral-500">
            ALL CREATIVE ASSETS PROTECTED // 2026
          </span>
        </div>

      </div>
    </footer>
  );
}

