'use client'
import { useEffect, useState } from 'react'
import styles from './jobtitle.module.css'
import { motion } from 'motion/react'

const variants = {
  initial: {
    fontWeight: '400',
    letterSpacing: '-0.03em',
    fontStyle: 'normal'
  },
  animate: {
    fontWeight: '800',
    letterSpacing: '-0.025em',
    fontStyle: 'italic',
    transition:{
      duration: 0.3
    }
  },
  transition: {
    staggerChildren: 0.05
  }
}

const JobTitle = ({ title }) => {
  const characters = title.split("")
  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768)
  //   }
  //   handleResize()
  //   window.addEventListener('resize', handleResize)
  //   return () => window.addEventListener('resize', handleResize)
  // })

  return (
    <motion.h3
      variants={variants}

      initial='initial'
      whileInView='animate'
      className={styles.title}>
      {characters.map((char, index) => {
        return (
          <motion.span
            key={index}
            variants={variants}
            className={styles.hoverText}
          >
            {char}
          </motion.span>
        )
      })}</motion.h3>
  )
}

export default JobTitle