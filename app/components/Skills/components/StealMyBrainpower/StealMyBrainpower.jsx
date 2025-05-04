import styles from './stealmybrainpowe.module.css'
import { MdBolt } from "react-icons/md"

const StealMyBrainpower = () => {
  return (
    <div>
      <a href="#contact" className={styles.link}>
        <span className={styles.spinner}></span>
        <span className={styles.content}>
          <MdBolt className={styles.icon} />
          Steal my Brainpower
        </span>
      </a>
    </div>
  )
}

export default StealMyBrainpower