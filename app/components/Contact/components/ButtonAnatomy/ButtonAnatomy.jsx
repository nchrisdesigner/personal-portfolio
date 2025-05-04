'use client'
import { useState } from "react"
import styles from './buttonanatomy.module.css'
import { PiCopy } from "react-icons/pi"
import { ImCheckmark2 } from "react-icons/im"

const ButtonAnatomy = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nchrisdeveloper@gmail.com')
    setIsCopied(true)
  }
  return (
    <>
      <div className={`text-center mx-auto`}>
        <h4 className=" text-sm text-center hidden md:block">(Hover Me)</h4>
      </div>
      <div className="flex justify-center">

        <button onClick={handleCopy} className={styles.button}>
          <div className={styles.icon}>
            <span className={`${styles.textIcon} ${styles.hide}`}>Visual Trigger</span>
            {isCopied ? <ImCheckmark2 /> : <PiCopy />}
          </div>

          <span className={styles.title}>
            {isCopied ? 'Email Copied' : 'Copy Email'}
          </span>

          <div className={`${styles.paddingLeft} ${styles.hide}`}>
            <div className={styles.paddingLeftLine}>
              <span className={styles.paddingLeftText}>Breathing Room / Left</span>
            </div>
          </div>

          <div className={`${styles.paddingRight} ${styles.hide}`}>
            <div className={styles.paddingRightLine}>
              <span className={styles.paddingRightText}>Breathing Room / Right</span>
            </div>
          </div>

          <div className={`${styles.background} ${styles.hide}`} >
            <span className={styles.backgroundText}>Color Flow</span>
          </div>

          <div className={`${styles.border} ${styles.hide}`}>
            <span className={styles.borderText} >Smooth Corners</span>
          </div>
        </button>
      </div>
    </>
  )
}

export default ButtonAnatomy