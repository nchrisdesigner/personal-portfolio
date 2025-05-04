'use client'
import styles from './footer.module.css'
import { Anton, Rock_Salt, Indie_Flower } from "next/font/google"
import Github from './components/Github/Github'
import Linkedin from './components/Linkedin/Linkedin'
import DownloadCV from './components/DownloadCV/DownloadCV'
import { useEffect, useState } from 'react'


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

const Footer = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <footer className='section padding'>
      <div className={styles.footerContainer}>

        <div className={styles.textSection}>
          <h4 className={` ${styles.footerTitle}`}>
            Not Just Code. Not Just Design. <span className='purple-text'>All-In Creative.</span>
          </h4>
          <p className={styles.text}>
            In a landscape of standard solutions,  <span className='purple-text'>I bring versatility and creativity.</span> I unite clean, efficient code with bold design, building unique solutions that break the mold and drive real results.
          </p>
        </div>

        {/* <h3 className={styles.footerMiniTitle}>I don't design boring stuff. Promise.</h3> */}

        <div className={styles.socialIconsContainer}>
          <div className={styles.socialIcons}>
            <div className={styles.profileSection}>
              {/* <h4 className={styles.profileTitle}>Access my profiles</h4> */}
              <Github />
              <Linkedin />
              <DownloadCV />
            </div>

{/* 
            <div className={styles.profileSection}>
              <h4 className={styles.profileTitle}>Download my cv</h4>
              <DownloadCV />
            </div> */}

          </div>

          {/* <button onClick={handleTheme} className={styles.themeIcon}>
            <span></span>
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>as
            </span>
            <span></span>
          </button> */}
        </div>
      </div>

    </footer>
  )
}

export default Footer