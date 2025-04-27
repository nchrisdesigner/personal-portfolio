'use client'
import styles from './sectiontitle.module.css'
import { motion } from 'motion/react'
import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})


const SectionTitle = () => {
  return (
    <div className='text-center flex flex-col gap-2'>
      <h2 className={`${styles.primaryTitle} ${anton.className}`}>MY STORY</h2>
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
        className={`${styles.label}`}
      >
        ( So Far )
      </motion.h3>
    </div>
  )
}

export default SectionTitle