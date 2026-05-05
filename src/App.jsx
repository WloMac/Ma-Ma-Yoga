import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Classes from "./sections/Classes";
import KidsYoga from "./sections/KidsYoga";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import useFadeIn from "./hooks/useFadeIn";
import Kindergarten from "./components/Kindergarten";


function App() {
  useFadeIn()

    return (
    <>
      <Navbar />
      <Hero />   
      <Classes />  
      <Kindergarten />       
      <Blog />
      <About />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
