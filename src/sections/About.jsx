import { aboutData } from "../data/about";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiLotus, GiMeditation } from "react-icons/gi"
import { FiSun, FiSmile } from "react-icons/fi"

const sectionIcons = {
  mothers: <GiLotus />,
  kids: <FiSun />,
  practice: <GiMeditation />,
};

export default function About() {
  const [activeSection, setActiveSection] = useState("mothers");
  const active = aboutData.sections.find((s) => s.id === activeSection);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-beige px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-7 gap-12 items-start">

        {/* IMAGE */}
        <div className="md:col-span-3 md:-ml-6 h-full">
          <img
            src={aboutData.image}
            alt="O mnie"
            className="w-full h-full max-h-[1200px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* TEXT */}
        <div className="md:col-span-4 flex flex-col gap-8">

          <h2 className="font-serif text-primary">{aboutData.title}</h2>

          {/* INTRO */}
          <div className="space-y-4">
            {aboutData.intro.split("\n\n").map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
            ))}
          </div>

          {/* ZAKŁADKI */}
          <div>
            <div className="flex gap-2 mb-5 flex-wrap">
              {aboutData.sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 border
                    ${activeSection === s.id
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-primary border-primary/30 hover:border-primary/60"
                    }`}
                >
                  <span className="text-xs">{sectionIcons[s.id]}</span>
                  {s.label}
                </button>
              ))}
            </div>

            {/* TREŚĆ ZAKŁADKI */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 border-l-2 border-primary/20 pl-5 min-h-[200px]"
            >
              {active.text.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
              ))}
            </motion.div>
          </div>

          {/* CLOSING */}
          <div className="space-y-1 pt-2">
            <p className="text-gray-500 leading-relaxed">{aboutData.closing.line1}</p>
            <p className="text-gray-600 leading-relaxed">{aboutData.closing.line2}</p>
            <p className="text-primary font-serif font-extrabold text-lg pt-1">{aboutData.closing.highlight}</p>
          </div>

          {/* CYTAT */}
          <blockquote className="border-l-2 border-primary/30 pl-5 mt-2">
            <p className="text-gray-500 italic leading-relaxed">
              „{aboutData.quote.text}"
            </p>
            <footer className="text-primary/60 text-sm mt-2">
              — {aboutData.quote.author}
            </footer>
          </blockquote>

        </div>
      </div>
    </motion.section>
  );
}