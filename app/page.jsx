import About from "./components/About/About"
import AnimatedSection from "./components/AnimatedSection/AnimatedSection"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Info from "./components/Info/Info"
import NotYourAverage from "./components/NotYourAverage/NotYourAverage"
import Skills from "./components/Skills/Skills"
import GrainBg from "./ui/GrainBg/GrainBg"
import { ScrollUpButton } from "./ui/ScrollUpButton/ScrollUpButton"
import { ReactLenis } from 'lenis/react'

export default function Home() {

  return (
    <ReactLenis root>
      {/* <Info /> */}
      <Hero />
      <main className="section">
        <About />
        <NotYourAverage />
        <Skills />
        <Experience />
        <AnimatedSection />
        <Contact />
      </main>
      <Footer />
      {/* <GrainBg /> */}
      {/* <ScrollUpButton /> */}

    </ReactLenis>
  )
}
