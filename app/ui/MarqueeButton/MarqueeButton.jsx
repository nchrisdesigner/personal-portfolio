import styles from './marqueebutton.module.css'

const MarqueeButton = ({ text }) => {
  return (
    <a className={styles.btn}>
      <span className={styles.text}>{text}</span>
      <span className={styles.marquee} aria-hidden>{text}</span>
    </a>
  )
}

export default MarqueeButton