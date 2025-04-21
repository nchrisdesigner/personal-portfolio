'use client'

import { useState } from "react"
import styles from './contact.module.css'
import { PiCopy } from "react-icons/pi"
import { ImCheckmark2 } from "react-icons/im"


const Contact = () => {

  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nchrisdeveloper@gmail.com')
    setIsCopied(true)
  }

  return (
    <section className='section padding'>
      <h2 className={styles.title}>You've scrolled this far. <span className={styles.purpleTitle}>Odds are you’re curious.</span></h2>
      <p className={styles.text}>
        So let's skip the fluff. No forms. No funnels. Just a simple way to reach someone who can help you think, design, and ship — without the handoffs, headaches, or hangups.
        <strong> I’m always open to great ideas, meaningful projects, and building things that matter.</strong>
      </p>

      <button className={styles.btn} onClick={handleCopy}>
        {isCopied ? 'Email Copied' : 'Copy Email'}
        {isCopied ? <ImCheckmark2 /> : <PiCopy />}
      </button>



    </section>
  )
}

export default Contact