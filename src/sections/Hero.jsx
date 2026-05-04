import {heroData} from "../data/hero"
import { motion } from "framer-motion"

export default function Hero(){
    return (
     <motion.section 
     initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
     className="h-screen relative flex items-center justify-center text-center px-6 md:px-12">

  {/* Tło */}
  <div className="absolute inset-0">
    <img
      src="/hero.jpg"
      alt="Yoga"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/60"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto px-6 fade-in">

    <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6 leading-tight">
      {heroData.title}
    </h1>

    <p className="text-lg md:text-xl text-primaryLight/80 mb-8 font-extrabold">
      {heroData.subtitle}
    </p>

    <a 
    href="#contact"
    className="inline-block w-full md:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-medium mt-6 shadow-md hover:bg-primaryDark hover:shadow-xl hover:scale-105 transition duration-300 text-center" 
    >
      {heroData.buttonText}
    </a>

  </div>
</motion.section>
    )
}