import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";



export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
  
  </div>
  );
}
