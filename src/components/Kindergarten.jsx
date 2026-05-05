import { kindergartenData } from "../data/kindergarten";
import { motion } from "framer-motion";

export default function Kindergarten() {
  const d = kindergartenData;

  return (
    <motion.section
      id="kindergarten"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* TŁO */}
      <div className="absolute inset-0">
        <img
          src={d.image}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      {/* TREŚĆ */}
      <div className="relative max-w-5xl mx-auto">

        {/* NAGŁÓWEK */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-primary/50 mb-3 block">
            {d.subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4">
            {d.title}
          </h2>
          <p className="text-textSoft leading-relaxed max-w-xl mx-auto">
            {d.description}
          </p>
        </div>

        {/* KORZYŚCI */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {d.benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center flex flex-col items-center shadow-md hover:shadow-xl transition duration-300"
            >
              <span className="text-xl text-primary text-2xl block mb-3">{b.icon}</span>
              <h3 className="text-primary mb-2">{b.title}</h3>
              <p className="text-textSoft text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* JAK PRACUJĘ */}
        <div className="bg-white rounded-2xl p-8 mb-12 max-w-2xl mx-auto shadow-md">
          <h3 className="text-primary text-center mb-6">
            Jak pracuję
          </h3>
          <hr className="w-80 border-primary/30 mt-2 p-2 mx-auto" />
          <ul className="space-y-3">
            {d.howIWork.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-600 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          
            <a href={d.ctaLink}
            className="inline-block w-full md:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-medium mt-6 shadow-md hover:bg-primaryDark hover:shadow-xl hover:scale-105 transition duration-300 text-center"
          >
            {d.ctaText}
          </a>
        </div>

      </div>
    </motion.section>
  );
}