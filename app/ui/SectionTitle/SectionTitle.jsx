'use client'
import styles from './sectiontitle.module.css'
import { motion } from 'motion/react'
import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})


const SectionTitle = ({ primaryTitle = 'MY STORY', secondaryTitle = '( So Far )', colorSecondary = "#ffffff" }) => {
  return (
    <div className='text-center flex flex-col gap-2'>

      <h2 
      className={`${styles.primaryTitle} ${anton.className}`}
      >
      {primaryTitle}
      </h2>

      <motion.h3
        initial={{
          fontWeight: '400',
          letterSpacing: '0'
        }}
        whileInView={{
          fontWeight: '700',
          letterSpacing: '0.05em',
          transition:{
            duration: .3,
            delay:1,
            type: 'spring'
          }
        }}
        className={styles.label}
        style={{color: colorSecondary}}
      >
        {secondaryTitle}
      </motion.h3>

    </div>
  )
}

export default SectionTitle

// MY STORY
// ( So Far )