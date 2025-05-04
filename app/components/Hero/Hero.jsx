import Image from 'next/image'
import logo from './../../assets/html-logo-white.svg'
import logoblack from './../../assets/html-logo.svg'
import styles from './hero.module.css'
import Container from "@/app/ui/Container/Container"
import MiniTitle from "@/app/ui/MiniTitle/MiniTitle"
import ScribbleX from "./components/ScribbleX/ScribbleX"

import { SiAstro } from "react-icons/si"
import { SiCssmodules } from "react-icons/si"
import { SiThreedotjs } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { SiGithubcopilot } from "react-icons/si"
import { VscVscodeInsiders } from "react-icons/vsc"
import { SiFigma } from "react-icons/si"
import { SiBlender } from "react-icons/si"
import { SiAdobeillustrator } from "react-icons/si"
import { SiAdobephotoshop } from "react-icons/si"
import { SiAdobecreativecloud } from "react-icons/si"



import { Anton, Rock_Salt, Indie_Flower } from "next/font/google"

const indie = Indie_Flower({
  weight: ['400'],
  subsets: ['latin'],
})

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
      <nav className={`${styles.nav} section antialiased`} role="navigation" aria-label="Primary">
        <figure className={styles.logoContainer}>
          <Image width={220} alt="Nick's Christof Portfolio Logo" className={styles.logo} src={logo} />
        </figure>
      </nav>

      <Container>
        <h2 className={`${rocksalt.className} ${styles.secondaryTitle}`}>Think in Grids. Build in Loops. See in Layers.</h2>
        <h1 className={`${anton.className} ${styles.primaryTitle}`}>I SOLVE&nbsp;
          <span className="relative inline-block ">
            <span className='outline-text-white'>PROBLEMS</span>
            <ScribbleX />
          </span> THROUGH REMARKABLE DESIGN</h1>
        <p className={styles.text}>Hi, I’m Nick —
          <span className={styles.hoverText}>

            <SiAstro className={`${styles.hoverIcon} ${styles.astro}`} />
            <SiThreedotjs className={`${styles.hoverIcon} ${styles.three}`} />
            <SiGithubcopilot className={`${styles.hoverIcon} ${styles.copilot}`} />
            <VscVscodeInsiders className={`${styles.hoverIcon} ${styles.vscode}`} />

            &nbsp;a Creative React Developer&nbsp;</span>
          and
          <span className={styles.hoverText}>

            <SiFigma className={`${styles.hoverIcon} ${styles.figma}`} />
            <SiBlender className={`${styles.hoverIcon} ${styles.blender}`} />
            <SiAdobecreativecloud className={`${styles.hoverIcon} ${styles.creativecloud}`} />
            &nbsp;a Web Designer &nbsp;
          </span>
          who knows the why behind every pixel and a designer who speaks fluent JavaScript.</p>

        <h3 className={`${indie.className} ${styles.commentTitle}`}>
            &lt;!-- i design with a dev console open --&gt;
        </h3>
      </Container>
    </header>
  )
}

export default Hero
