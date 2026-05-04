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
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "16px",
              width: "90%",
              maxWidth: "680px",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative",
              transform: isOpen
                ? "translateX(0) scale(1)"
                : "translateX(60px) scale(0.97)",
              opacity: isOpen ? 1 : 0,
              transition:
                "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            }}
          >
            {/* ZAMKNIJ */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 text-white flex items-center justify-center text-sm hover:bg-black/40 transition z-10"
            >
              ✕
            </button>

            {/* ZDJĘCIE */}
            <div className="w-full h-64 rounded-t-2xl overflow-hidden">
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
            <div className="p-8">
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
