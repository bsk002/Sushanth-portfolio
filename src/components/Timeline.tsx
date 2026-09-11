import { motion } from "motion/react";
import { Briefcase, Calendar, BookOpen, Sparkles } from "lucide-react";
import { ComicSticker, ComicTape } from "./ComicDoodles";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  type: "work" | "workshop";
  chapter: string;
  headerColor: string;
  badgeBg: string;
}

const timelineData: TimelineItem[] = [
  {
    company: "Club Infinity Studios",
    role: "Digital Head",
    period: "2024 - PRESENT",
    chapter: "CHAPTER 01 // LEADERSHIP",
    headerColor: "bg-[#2445EA] text-white",
    badgeBg: "bg-[#FFE500] text-black",
    description: [
      "Pioneered creative direction for landmark social events, driving digital identity from conception to experiential viral promotion.",
      "Designed and executed high-impact promotional banners and immersive posters for major events such as the Fright Walk, Grave Rave, and high-profile celebrity events (e.g., Rana Daggubati, Prashanth Potluri).",
      "Strategized multi-channel content rollout that boosted general audience engagement, community reach, and brand loyalty."
    ],
    skills: ["Creative Direction", "Campaign Strategy", "Social Media Optimization", "Event Brand Identity"],
    type: "work",
  },
  {
    company: "Hashtag India Magazine",
    role: "Creative Design Intern",
    period: "2023 - 2024",
    chapter: "CHAPTER 02 // EDITORIAL",
    headerColor: "bg-[#FF2B2B] text-white",
    badgeBg: "bg-white text-black",
    description: [
      "Designed exquisite full-page advertisement posters and digital campaign assets featured in widespread editorial prints.",
      "Blended trending lifestyle topics with clean typography and balanced composition to capture attention in beauty and commercial campaigns.",
      "Collaborated with creative leads to refine publishing grid guidelines, maintaining top-tier visual excellence for commercial partnerships."
    ],
    skills: ["Editorial Art", "Typography", "Commercial Campaigns", "Grid Composition"],
    type: "work",
  },
  {
    company: "Creative Designing & Content Workshops",
    role: "Visual Consultant & Mentor",
    period: "2022 - 2023",
    chapter: "CHAPTER 03 // MENTORSHIP",
    headerColor: "bg-[#D2FF00] text-black",
    badgeBg: "bg-[#FFE500] text-black",
    description: [
      "Conducted dedicated community and student workshops teaching content creation, branding fundamentals, and graphic design methodologies.",
      "Instructed beginners and kids on practical tool mechanics across Canva, Adobe Photoshop, and Affinity systems.",
      "Empowered new student designers with hand-on portfolio reviews and actionable design guidance to kickstart their freelance workflows."
    ],
    skills: ["Design Mentorship", "Visual Storytelling", "Canva & Adobe Suites", "Public Speaking"],
    type: "workshop",
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#0F0F10] bg-halftone-dark overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FFE500]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2445EA]/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-2.5">
            <ComicSticker text="NARRATIVE ROADMAP" color="yellow" rotate="-1.5deg" />
          </div>
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#FFE500] uppercase tracking-[0.25em] md:tracking-[0.35em] text-xs md:text-sm mb-2 font-extrabold font-grotesk"
          >
            The Journey So Far
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-editorial font-black tracking-normal uppercase"
          >
            Milestone <br className="md:hidden" />
            <span className="text-white">Career Timeline</span>
          </motion.h2>
        </div>

        {/* Comic Story Panels List */}
        <div className="space-y-6 sm:space-y-7 md:space-y-8 relative">
          
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-[#FAF7EE] text-black border-[4px] border-black rounded-3xl comic-shadow-lg overflow-hidden group hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000] transition-all duration-300"
            >
              {/* Comic Panel Header Strip */}
              <div className={`px-5 sm:px-6 py-2.5 sm:py-3 border-b-[3px] border-black flex flex-wrap items-center justify-between gap-2.5 ${item.headerColor}`}>
                <div className="flex items-center gap-2 font-display font-black tracking-wider text-xs md:text-sm uppercase">
                  <span>★</span>
                  <span>{item.chapter}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-black text-white rounded-lg text-[10px] md:text-xs font-mono font-black uppercase tracking-wider">
                    <Calendar size={12} className="stroke-[2.5px]" />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Panel Content Body */}
              <div className="p-5 sm:p-6 md:p-8">
                
                {/* Role and Company */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4 sm:mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-wide text-black mb-1">
                      {item.company}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#FFE500] border-2 border-black rounded-md text-xs font-black uppercase tracking-wider">
                      {item.type === "work" ? (
                        <Briefcase size={12} className="stroke-[3px]" />
                      ) : (
                        <BookOpen size={12} className="stroke-[3px]" />
                      )}
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7 text-neutral-900 text-xs sm:text-sm md:text-base font-medium leading-relaxed font-sans">
                  {item.description.map((bullet, key) => (
                    <li key={key} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="inline-block mt-1 px-1 py-0.5 bg-black text-white text-[9px] sm:text-[10px] font-black rounded-sm shrink-0 leading-none">
                        ▶
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-3.5 border-t-2 border-black/10 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-black uppercase text-neutral-600 mr-1.5">
                    DISCIPLINES:
                  </span>
                  {item.skills.map((skill, key) => (
                    <span 
                      key={key} 
                      className="text-[10px] md:text-xs font-black uppercase tracking-wider bg-white text-black px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black comic-shadow-sm hover:bg-[#FFE500] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

