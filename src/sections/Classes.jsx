import { classesData } from "../data/classes"
import ClassCard from "../components/ClassCard"

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-beige">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl text-brown mb-12">
      Zajęcia
    </h2>

    <div className="grid md:grid-cols-3 gap-8 fade-section">
      {classesData.map((item, index) => (
        <ClassCard
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>

  </div>
</section>
  )
}