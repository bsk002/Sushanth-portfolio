import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
      <div className="bg-[#FAF7EE] text-black border-[3px] border-black rounded-2xl px-4 md:px-6 h-16 md:h-18 flex items-center justify-between comic-shadow transition-transform">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link 
            to="/" 
            className="flex items-center gap-1.5 group"
          >
            <span className="font-display font-black text-2xl md:text-3xl tracking-tight bg-[#FFE500] px-2 py-0.5 border-2 border-black rotate-[-2deg] group-hover:rotate-0 transition-transform">
              B.S.K
            </span>
            <span className="hidden sm:inline font-comic text-xs uppercase tracking-wider text-[#FF2B2B] ml-1">
              STUDIO
            </span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider font-extrabold text-black hover:bg-[#FFE500] hover:border-2 hover:border-black transition-all block border-2 border-transparent"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider font-extrabold text-black hover:bg-[#FFE500] hover:border-2 hover:border-black transition-all block border-2 border-transparent"
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Info & Avatar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 md:gap-4"
        >
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#D2FF00] border-2 border-black rounded-full text-[10px] uppercase tracking-wider font-black text-black">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <span>Available</span>
          </div>

          <div className="relative group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden border-[3px] border-black bg-white comic-shadow-sm rotate-2 group-hover:rotate-0 transition-transform">
              <img 
                src="https://i.ibb.co/yBmqMLWQ/1000040904.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FFE500] border-2 border-black rounded-full" />
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black bg-[#FFE500] border-2 border-black rounded-lg comic-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="stroke-[3px]" /> : <Menu size={20} className="stroke-[3px]" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden mt-3 bg-[#FAF7EE] text-black border-[3px] border-black rounded-2xl p-6 comic-shadow overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-black tracking-wider uppercase hover:bg-[#FFE500] px-4 py-2.5 rounded-xl border-2 border-black block bg-white comic-shadow-sm transition-all"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-black tracking-wider uppercase hover:bg-[#FFE500] px-4 py-2.5 rounded-xl border-2 border-black block bg-white comic-shadow-sm transition-all"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-2 flex items-center justify-between border-t-2 border-black/10">
                <span className="text-[11px] font-bold text-neutral-600">STATUS</span>
                <span className="px-3 py-1 bg-[#D2FF00] border-2 border-black rounded-full text-[10px] font-black uppercase">
                  Available for Projects
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

