import { contactData } from "../data/contact";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });

  const [status, setStatus] = useState("idle");
  //idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    if (formData._honey) return;

    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xrerwvpa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-white fade-sesction px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
          {contactData.title}
        </h2>

        <p className="text-gray-600 mb-10">{contactData.subtitle}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Imię"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Wiadomość"
            rows="4"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown"
          />
          <input
            type="text"
            name="_honey"
            value={formData._honey}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <button
            type="submit"
            className="bg-secondary text-white py-3 rounded-full mt-4 hover:opacity-90 transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Wysyłanie..." : contactData.buttonText}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-600 mt-4">Wiadomość została wysłana!</p>
        )}

        {status === "error" && (
          <p className="text-red-600 mt-4">
            Coś poszło nie tak. Spróbuj ponownie.
          </p>
        )}
      </div>
    </motion.section>
  );
}
