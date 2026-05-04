import { useEffect, useState } from "react"
import { client } from "../sanityClient"
import { urlFor } from "../sanityImage"
import { motion } from "framer-motion"

export default function KidsYoga() {
  const [data, setData] = useState(null)

  useEffect(() => {
    client.fetch(`*[_type == "kidsYoga"][0]`)
      .then(setData)
  }, [])

  if (!data) return null

  return (
    <motion.section
  id="kids"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
  className="relative py-32 flex items-center justify-center text-center px-6 md:px-12"
  style={{
    backgroundImage: `url(${urlFor(data.backgroundImage).width(1600).url()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <div className="absolute inset-0 bg-black/40">

        {/* TEXT */}
        <div className="relative max-w-2xl mx-auto px-6 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            {data.title}
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {data.text}
          </p>
        </div>

    </div>
    </motion.section>
  )
}