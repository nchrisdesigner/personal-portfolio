import styles from './notyouraverage.module.css'
import { Anton, Rock_Salt } from "next/font/google"

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const rocksalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"]
})

const NotYourAverage = () => {
  return (
    <section className={styles.sectionContainer}>

      <div className={styles.animationSection}>
        <div className={styles.container}>

          <div className={styles.textContainer}>

            <div className={styles.titleContainer} aria-label="Not the average front end human">
              <div className={styles.miniTitleContainer}>
                <div className={styles.spanContainer}>
                  <span>Not the</span>
                </div>
                <h2 className={`${anton.className} ${styles.title}`}>AVERAGE</h2>
              </div>

              <div className={styles.miniTitleContainer}>
                <div className={styles.spanContainer}>
                  <span>Front End</span>
                </div>
                <h2 className={`${anton.className} ${styles.title}`}>HUMAN</h2>
              </div>
            </div>
          </div>

          <div className={styles.descContainer}>
            <h3 className={`${rocksalt.className} purple-text`}>My superpowers ?</h3>

            <p><strong>I bridge the gap that often slows down teams.</strong> This means fewer meetings, no miscommunications, and better results </p>
            <p>
            Having different persons for design and development sometimes can feel like playing broken telephone. I skip the middleman and connect the dots myself — from the first pixel in Figma to the final line of JavaScript.
            </p>

          </div>
        </div>
      </div>

    </section>
  )
}

export default NotYourAverage
