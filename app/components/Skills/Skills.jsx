import Container from '@/app/ui/Container/Container'
import styles from './skills.module.css'
import Image from 'next/image'
import astro from './../../assets/astro.svg'
import css from './../../assets/css.svg'
import motion from './../../assets/motion.svg'
import SkillsContainer from './components/SkillsContainer/SkillsContainer'
import { Anton, Rock_Salt, Indie_Flower } from "next/font/google"
import StealMyBrainpower from './components/StealMyBrainpower/StealMyBrainpower'
import { stackImages } from '@/app/data/data'


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

const Skills = () => {

  return (
    <Container>
      <div className={styles.skillsContainer}>

        <div className={styles.titleSection}>
          <h2 className={`${anton.className} ${styles.sectionTitle}`}>My Daily Weapons</h2>
          <p className={styles.label}>Not alphabetical. <strong>Just the real-world stack I actually use.</strong></p>
        </div>

        <div className={styles.stackContainer}>
          <h3 className={styles.stackTitle}>My stack</h3>
          <h4 className={styles.stackMiniTitle}>The tools I rely on most, not just the ones I know.</h4>
          <div className={styles.imagesContainer}>
            {stackImages.map(({ id, src, alt, desc }) => {
              return (
                <figure key={id} className={styles.figure}>
                  <Image width={72} src={src} alt={alt} />
                  <figcaption className={`${rocksalt.className}`}>
                    For <br /> {desc}</figcaption>
                </figure>
              )
            })}
          </div>
        </div>

        <div className={styles.otherToolsSection}>
          <h4 className={`${indie.className} ${styles.note}`}>
            &lt;!-- <strong>Note to self: Do not forget to flex a little bit</strong> --&gt;
          </h4>
          <h3 className={`${rocksalt.className} ${styles.sectionMiniTitle}`}>
            <span className={styles.starbust}>✷</span>Other Tools <br />& Technologies
          </h3>
        </div>

        <SkillsContainer />
        <StealMyBrainpower />

      </div>
    </Container>
  )
}

export default Skills