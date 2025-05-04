'use client'
import { useState } from 'react'
import { AnimatePresence } from "motion/react"
import styles from './skillscontainer.module.css'
import { skills } from '@/app/data/data'
import Skill from '../Skill/Skill'

const SkillsContainer = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    if (currentIndex < skills.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }
  const handleClickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className={styles.skills}>
        <AnimatePresence mode="wait">
          {skills.map((skill, index) => (
            currentIndex === index && (
              <Skill
                key={skill.id} // Unique key for AnimatePresence
                {...skill}
              />
            )
          ))}
        </AnimatePresence>
      </div>
      <div className='flex gap-4'>
        {currentIndex > 0 && <button onClick={handleClickPrev} className={styles.btn}>Prev</button>}
        {currentIndex < skills.length - 1 && <button onClick={handleClickNext} className={styles.btn}>Next </button>}
      </div>
    </>
  )
}

export default SkillsContainer