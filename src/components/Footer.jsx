export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* LOGO + OPIS */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Ma.Ma.Joga
          </h3>
          <p className="text-white/70">
            Przestrzeń dla ciała i oddechu. Znajdź równowagę i spokój w codzienności.
          </p>
        </div>

        {/* NAWIGACJA */}
        <div>
          <h4 className="text-lg font-medium mb-4">
            Nawigacja
          </h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#about" className="hover:text-white transition">O mnie</a></li>
            <li><a href="#classes" className="hover:text-white transition">Zajęcia</a></li>
            <li><a href="#kindergarten" className="hover:text-white transition">Joga dla dzieci</a></li>
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-white transition">Kontakt</a></li>
          </ul>
        </div>

        {/* KONTAKT */}
        <div>
          <h4 className="text-lg font-medium mb-4">
            Kontakt
          </h4>
          <ul className="space-y-2 text-white/70">
            <li>Email: mamayoga.kontakt@gmail.com
</li>
            {/* <li>Tel: +48 123 456 789</li> */}
            <li>Miasto: ŁÓDŹ</li>
          </ul>
        </div>

      </div>

      {/* SEPARATOR */}
      <div className="border-t border-white/20 my-10 max-w-6xl mx-auto"></div>

      {/* COPYRIGHT */}
      <div className="text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Ma.Ma.Joga — Wszystkie prawa zastrzeżone
      </div>
    </footer>
  )
}