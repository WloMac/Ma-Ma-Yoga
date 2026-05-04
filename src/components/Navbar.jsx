import { navData } from "../data/nav";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* NAVBAR */}

      <nav className="fixed top-0 w-full bg-beige/80 backdrop-blur-md flex justify-between items-center px-6 md:px-12 py-4 z-40">
        <div className="text-primary font-semibold text-lg">{navData.logo}</div>

        {/*Desktop*/}
        <div div className="hidden md:flex gap-6">
          {navData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-primary hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/*Mobile button*/}
        <button
          className="md:hidden text-primary text-2x1"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>
      {/* MOBILE MENU (POZA NAV!) */}
      <div
        className={`fixed inset-0 bg-beige flex flex-col items-center justify-center gap-8 text-xl transition duration-300 z-50 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-2xl text-brown"
        >
          ✕
        </button>

        {/* LINKS */}
        {navData.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-primary text-2xl"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
