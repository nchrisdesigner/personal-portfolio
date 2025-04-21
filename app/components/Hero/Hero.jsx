import { Anton, Rock_Salt } from "next/font/google"
import Image from 'next/image'
import logo from './../../assets/logo-white.svg'
import styles from './hero.module.css'
import Container from "@/app/ui/Container/Container"
import MiniTitle from "@/app/ui/MiniTitle/MiniTitle"
import ScribbleX from "./components/ScribbleX/ScribbleX"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})

const rocksalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"]
})

const Hero = () => {
  return (
    <header id="header" className={styles.header}>
      <nav className={`${styles.nav} section`} role="navigation" aria-label="Primary">
        <figure className={styles.logoContainer}>
          <Image width={220} alt="Nick's Christof Portfolio Logo" className={styles.logo} src={logo} />
        </figure>
      </nav>

      <Container>
        <h2 className={`${rocksalt.className} ${styles.secondaryTitle}`}>Think in Grids. Build in Loops. See in Layers.</h2>
        <h1 className={`${anton.className} ${styles.primaryTitle}`}>I SOLVE&nbsp;
          <span className="relative inline-block">
            PROBLEMS
            <ScribbleX />
            </span> THROUGH REMARKABLE DESIGN</h1>
        <p className={styles.text}>Hi, I’m Nick — <span className="purple-text">a creative React developer and a Web Designer</span> who knows the why behind every pixel and a designer who speaks fluent JavaScript.</p>

      <MiniTitle>I don't design boring stuff. Promise.</MiniTitle>
      </Container>
    </header>
  )
}

export default Hero
