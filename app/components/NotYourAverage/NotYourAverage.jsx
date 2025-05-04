import { properties } from '@/app/data/data'
import styles from './notyouraverage.module.css'
import { Anton, Rock_Salt } from "next/font/google"
import * as motion from "motion/react-client"

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const rocksalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"]
})





const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


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
            <p><strong>I bridge the gap that often slows down teams.</strong> I skip the middleman and connect the dots myself. This means fewer meetings, no miscommunications, and better results </p>

            <motion.ul className={styles.motionList}>
              <li><span>{`:root {`}</span></li>

              {properties.map(({ id, property, val, comment }, index) => (
                <motion.li
                  key={id}
                  variants={itemVariants}
                  initial='hidden'
                  whileInView='visible'
                  transition={{
                    delay: index * 0.1
                  }}
                >
                  <code>
                    <span className="text-pink-400">{property}:</span>{' '}
                    <span className="text-blue-400 bg-blue-500/10 p-[2px]">{val};</span>{' '}
                  </code>
                </motion.li>
              ))}
              <li><span>{`}`}</span></li>

            </motion.ul>
          </div>

        </div>
      </div>

    </section>
  )
}

export default NotYourAverage
