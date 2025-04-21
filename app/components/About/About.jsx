import { Anton, Rock_Salt } from "next/font/google"
import styles from './about.module.css'

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})

const rocksalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"]
})

const About = () => {
  return (
    <section className={`${styles.aboutContainer} section padding`}>
      <div className={styles.titleContainer}>

          <h2 className={`${anton.className} ${styles.primaryTitle}`}>
            CREATIVE THINKER, 
            PROBLEM SOLVER,
            GAME CHANGER 
            </h2>

        <p className={`${rocksalt.className} ${styles.secondaryTitle}`}>If It’s Scrollable, It Should Be Memorable.</p>
        <p className={`${rocksalt.className} ${styles.secondaryTitle}`}>Storytelling in CSS and Javascript</p>

        <div style={{ margin: '.8rem 0' }}>
          <p style={{ fontSize: '1rem' }}>
            <strong><em>/dɪˈzʌɪnə/</em></strong> - a digital alchemist, blending usability, story, and shape into one coherent experience.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong><em>/dɪˈvɛləpə/</em></strong> -  transforms thoughts into code, and code into something that works
          </p>
        </div>

        <div className={`${styles.gridContainer}`}>
          <div className={styles.lineSVG}>
            <svg width="234" height="122" viewBox="0 0 234 122" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.05859 1.5C24.2364 11.241 47.1287 21.4782 69.1671 33.6274C92.5169 46.4995 115.952 61.8548 132.119 83.5048C137.124 90.2066 143 99.0964 142.878 107.911C142.801 113.434 135.674 117.975 131.141 119.315C123.288 121.638 113.177 120.32 105.711 117.318C99.916 114.989 89.8842 108.754 89.8842 101.477C89.8842 88.7399 117.161 86.9402 124.428 86.1229C160.625 82.0519 197.337 87.8847 232.059 97.8822" stroke="#5D5AD6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <p className={styles.paragraph}>
            In a world where developers write logic and designers chase aesthetics, <span className="purple-text">I’ve decided to do both.</span>  I blend clean code with killer design that not only work, but feel right — smooth, thoughtful, and performance-driven.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About