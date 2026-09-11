import { motion } from "motion/react";
import { Send, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { ComicSticker, ComicTape } from "./ComicDoodles";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 bg-[#0F0F10] bg-halftone-dark relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FFE500]/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Social Presence */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <ComicSticker text="FINAL DISPATCH" color="yellow" rotate="-2deg" />
            </div>
            
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FFE500] uppercase tracking-[0.4em] text-xs md:text-sm mb-3 block font-extrabold font-grotesk"
            >
              Get in Touch
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-editorial font-black tracking-tighter mb-8 leading-none"
            >
              LET'S CREATE <br /> 
              <span className="text-white">LEGENDARY</span> <br /> 
              TOGETHER.
            </motion.h2>
            
            <div className="space-y-6 md:space-y-8 mt-8 md:mt-10">
              
              {/* Direct Line Card */}
              <div className="bg-[#FAF7EE] text-black p-5 md:p-6 rounded-3xl border-[3.5px] border-black comic-shadow relative group">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-1.5 font-black font-mono">
                  Direct Line
                </p>
                <a 
                  href="mailto:boppana.sushanthkumar@gmail.com" 
                  className="text-base sm:text-xl md:text-2xl font-black font-display hover:text-[#2445EA] transition-colors break-all flex items-center gap-2"
                >
                  <Mail size={20} className="shrink-0 stroke-[2.5px]" />
                  <span>boppana.sushanthkumar@gmail.com</span>
                </a>
              </div>
              
              {/* Digital Presence */}
              <div className="bg-[#18181A] text-white p-5 md:p-6 rounded-3xl border-[3.5px] border-black comic-shadow">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3 font-black font-mono">
                  Digital Presence
                </p>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {[
                    { name: 'Instagram', href: 'https://www.instagram.com/sushanth_digital_art?igsh=ZTExc3Bmd25waHI3', color: "bg-[#FFE500]" },
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sushanth-kumar-boppana-025825222?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: "bg-white" },
                    { name: 'Pinterest', href: 'https://in.pinterest.com/sushanthboppana/', color: "bg-[#FF2B2B] text-white" }
                  ].map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border-2 border-black comic-shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#000] flex items-center gap-1.5 ${social.color} ${social.name === 'Pinterest' ? 'text-white' : 'text-black'}`}
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight size={14} className="stroke-[3px]" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#FAF7EE] text-black rounded-3xl border-[4px] border-black comic-shadow-lg overflow-hidden"
            >
              {/* Form Header Strip */}
              <div className="bg-[#FFE500] px-6 py-3.5 border-b-[3px] border-black flex items-center justify-between">
                <span className="font-display font-black text-sm tracking-wider uppercase">
                  TRANSMISSION DISPATCH //
                </span>
                <span className="text-[10px] font-mono font-black uppercase bg-black text-white px-2 py-0.5 rounded">
                  PRIORITY
                </span>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  // Fallback to mailto
                  window.location.href = "mailto:boppana.sushanthkumar@gmail.com";
                }}
                className="p-6 md:p-10 space-y-5 md:space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-black text-black block">
                      Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="YOUR NAME"
                      required
                      className="w-full px-4 py-3 bg-white text-black border-[3px] border-black rounded-xl font-bold placeholder:text-neutral-400 text-sm outline-none focus:bg-[#FFFDF0] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-black text-black block">
                      Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="YOUR EMAIL"
                      required
                      className="w-full px-4 py-3 bg-white text-black border-[3px] border-black rounded-xl font-bold placeholder:text-neutral-400 text-sm outline-none focus:bg-[#FFFDF0] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-black text-black block">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                    required
                    className="w-full px-4 py-3 bg-white text-black border-[3px] border-black rounded-xl font-bold placeholder:text-neutral-400 text-sm outline-none focus:bg-[#FFFDF0] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 md:py-5 bg-[#FFE500] text-black border-[3px] border-black rounded-2xl font-black uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-2 group comic-shadow hover:bg-[#D2FF00] transition-all cursor-pointer"
                >
                  <span>Send Transmission</span>
                  <Send size={18} className="stroke-[3px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

