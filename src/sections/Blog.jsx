import { useEffect, useState } from "react"
import { client } from "../sanityClient"
import { urlFor } from "../sanityImage"

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]`)
      .then(setPosts)
  }, [])

  return (
    <section id="blog" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto px-6 ">

        <h2 className="font-serif text-3xl text-primary text-center mb-12">
          Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              {post.image && (
                <img
                  src={urlFor(post.image).width(400).url()}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl text-brown mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}