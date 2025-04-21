import Container from '@/app/ui/Container/Container'
import styles from './skills.module.css'
import Image from 'next/image'

import astro from './../../assets/astro.svg'
import css from './../../assets/css.svg'
import motion from './../../assets/motion.svg'
import { Anton, Rock_Salt, Indie_Flower } from "next/font/google"
import { skills } from '@/app/data/data'


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
      <div className='text-center items-center justify-center gap-24 flex flex-col'>

        <div className='flex flex-col'>
          <h2 className={`${anton.className} ${styles.sectionTitle}`}>My Daily Weapons</h2>
          {/* <h2 className={`${anton.className} ${styles.sectionTitle}`}>MY POWERS, LEVELED UP</h2> */}
          {/* <p>Sorted by evolution, not by alphabet</p> */}
          <p className={styles.label}>Not alphabetical. <strong>Just the real-world stack I actually use.</strong></p>
        </div>


        <div className={styles.stackContainer}>
          <h3 className={styles.stackTitle}>My stack</h3>
          <h4 className={styles.stackMiniTitle}>The tools I rely on most, not just the ones I know.</h4>
          <div className={styles.imagesContainer}>
            <figure className='relative flex flex-col gap-4'>
              <Image width={72} src={astro} alt='Astro Logo for development' />
              <figcaption className={`${rocksalt.className}`}>
                For <br /> Development</figcaption>
            </figure>
            <figure className='relative flex flex-col gap-4'>
              <Image width={72} src={css} alt='CSS Logo for styling' />
              <figcaption className={`${rocksalt.className}`}>For<br /> Styling</figcaption>
            </figure>
            <figure className=' flex flex-col gap-4'>
              <Image width={72} src={motion} alt='Motion.dev Logo for animations' />
              <figcaption className={`${rocksalt.className}`}>For<br /> Animations</figcaption>
            </figure>
          </div>
        </div>


        <div className={styles.skillsContainer}>

          <div className='flex flex-col gap-4'>
            <h4 className={`${indie.className} text-xl rotate-[-8deg]`}>&lt;!-- <strong>Note to self: Do not forget to flex a little bit</strong> --&gt;</h4>
            <h3 className={`${rocksalt.className}`}><span className={styles.starbust}>✷</span>Other Tools <br />& Technologies</h3>
          </div>
          <ul className={styles.skills}>
            {skills.map(({ id, img, title, desc }) => {
              return (
                <li key={id}>

                  <Image height={250} src={img} alt={title} className={styles.skillImage} />
                  <span className='text-4xl z-10 font-semibold'>{title}</span>
                  <span className={`${rocksalt.className} z-10 text-[.9rem]`}>{desc}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Skills