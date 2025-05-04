import styles from './skill.module.css'
import Image from 'next/image'
import * as motion from "motion/react-client"

const Skill = ({ id, img, title, desc }) => {
  return (
    <motion.div
      key={id}
      className={`${styles.skill} `}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale:.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.figure
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.7 }}
        transition={{ duration: 0.3, delay: 0.1 }} // Exit after title and description
      >
        <Image height={80} src={img} alt={title} />
      </motion.figure>
      <motion.div>
        <motion.h3
          className="text-[5rem] antialiased font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }} // Exit first
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y:20 }}
          transition={{ duration: 0.3, delay: 0.2 }} // Exit after title
        >
          {desc}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Skill