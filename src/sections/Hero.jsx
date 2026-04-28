import {heroData} from "../data/hero"

export default function Hero(){
    return (
     <section className="h-screen relative flex items-center justify-center text-center">

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

    <h1 className="text-5xl md:text-6xl font-serif text-brown mb-6">
      {heroData.title}
    </h1>

    <p className="text-lg md:text-xl text-brown/80 mb-8">
      {heroData.subtitle}
    </p>

    <button className="bg-brown text-white px-8 py-3 rounded-full">
      {heroData.buttonText}
    </button>

  </div>
</section>
    )
}