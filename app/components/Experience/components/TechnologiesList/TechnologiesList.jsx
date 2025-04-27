import styles from './technologieslist.module.css'

const TechnologiesList = ({technologies}) => {
  return (
    <ul className={styles.technologiesContainer}>
      {technologies.map((tech, i) => {
        return (
          <li key={i} className={styles.technology}>
            {tech}
          </li>
        )
      })}
    </ul>
  )
}

export default TechnologiesList