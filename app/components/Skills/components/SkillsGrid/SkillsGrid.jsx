import styles from './skillsgrid.module.css'
import { skills } from '@/app/data/data'
import Image from 'next/image'
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

const SkillsGrid = () => {
  return (
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
  )
}

export default SkillsGrid