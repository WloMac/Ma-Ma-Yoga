import ClassCard from "../components/ClassCard";
import { classesData } from "../data/classes";
import { useState, useEffect } from "react";

export default function Classes() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function openModal(item) {
    setSelectedClass(item);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsOpen(true)));
  }

  function closeModal() {
    setIsOpen(false);
    setTimeout(() => setSelectedClass(null), 350);
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Blokowanie scrolla

  useEffect(() => {
    if (selectedClass) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [selectedClass]);

  return (
    <section id="classes" className="py-24 bg-beige px-6 md:px-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12">
          Twoja przestrzeń
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 fade-section">
          {classesData.map((item, index) => (
            <ClassCard key={index} {...item} onOpen={() => openModal(item)} />
          ))}
        </div>
      </div>

      {selectedClass && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-2xl w-[90%] max-w-2xl max-h-[85vh] overflow-y-auto relative transform transition-all duration-300 ${
              isOpen
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-10 scale-95 opacity-0"
            }`}
          >
            {/* ZAMKNIJ */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 text-white flex items-center justify-center text-sm hover:bg-black/40 transition z-10"
            >
              ✕
            </button>

            {/* ZDJĘCIE */}
            <div className="w-full h-56 md:h-64 rounded-t-2xl overflow-hidden">
              <img
                src={selectedClass.image}
                className="w-full h-full object-cover"
                style={{
                  objectPosition:
                    selectedClass.imagePosition || "center center",
                }}
              />
            </div>

            {/* TREŚĆ */}
            <div className="p-6 md:p-8">
              {/* TAG */}
              {selectedClass.tag && (
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-beige text-primary mb-4">
                  {selectedClass.tag}
                </span>
              )}

              <h2 className="text-2xl text-primary font-serif mb-4">
                {selectedClass.title}
              </h2>

              <p className="text-textSoft leading-relaxed mb-6">
                {selectedClass.fullDescription}
              </p>

              {/* DLACZEGO WARTO */}
              {selectedClass.why && (
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">
                    Dlaczego warto?
                  </p>
                  <p className="text-textSoft leading-relaxed">
                    {selectedClass.why}
                  </p>
                </div>
              )}

              {/* DLA KOGO */}
              {selectedClass.forWho && (
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">
                    Dla kogo?
                  </p>
                  <p className="text-textSoft leading-relaxed">
                    {selectedClass.forWho}
                  </p>
                </div>
              )}

              {/* GALERIA */}
              {selectedClass.gallery?.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {selectedClass.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
