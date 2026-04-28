import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Classes from "./sections/Classes"
import Contact from "./sections/Contact"
import useFadeIn from "./hooks/useFadeIn"

function App() {
  useFadeIn()
  
    return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Contact />
      
    </>
  )
}

export default App
