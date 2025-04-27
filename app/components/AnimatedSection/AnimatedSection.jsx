import styles from './animatedsection.module.css'
import { Anton, Rock_Salt, Indie_Flower } from "next/font/google"

const indie = Indie_Flower({
  weight: ['400'],
  subsets: ['latin'],
})

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const rocksalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"]
})


const AnimatedSection = () => {
  return (
    <section className={`${styles.sectionContainer} section padding`}>
      <h3 className={`${indie.className} text-2xl `}>&lt;!-- <strong>Storytelling in CSS and JavaScript</strong> --&gt;</h3>

      <div className={styles.containerLeft}>
        <div className={styles.overflowContainer}>
          <h2 className={anton.className}>IF IT'S</h2>
        </div>
        <div className={styles.overflowContainer}>
          <h2 className={anton.className}>SCROLLABLE</h2>
        </div>
        <div className={styles.overflowContainer}>
          <p>Built to be seen and remembered.</p>
        </div>
      </div>
      <div className={styles.containerRight}>
      <div className={styles.overflowContainer}>
          <h2 className={anton.className}>IT SHOULD BE</h2>
        </div>
        <div className={styles.overflowContainer}>
          <h2 className={anton.className}>MEMORABLE</h2>
        </div>
        <div className={styles.overflowContainer}>
          <p>Because motion tells a better story.</p>
        </div>
      </div>
    </section>
  )
}

export default AnimatedSection