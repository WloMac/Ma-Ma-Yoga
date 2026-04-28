import { aboutData } from "../data/about"

export default function About() {
  return (
    <section id="about" className="py-24 bg-white fade-section">
        <div className="max-w-4x1  mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl text-brown mb-6">
                {aboutData.title}
            </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
            {aboutData.text}
        </p>
      </div>
    </section>
  )
}