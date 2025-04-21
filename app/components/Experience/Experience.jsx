import styles from './experience.module.css'
import { experience } from '@/app/data/data'

const Experience = () => {
  console.log(experience);

  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.primaryTitle}>My Story (So Far)</h2>

      <div className={styles.cards}>

        <div className={styles.cardGrid}>

          {experience.map(({ id, title, company, duration, description, technologies }) => {
            return (
              <div
                key={id} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardInfo}>
                    <div className={styles.information}>
                      <h4 className={styles.company}>{company}</h4>
                      <h4 className={styles.duration}>({duration})</h4>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>
                      {description}
                    </p>

                    <ul className={styles.technologiesContainer}>
                      {technologies.map((tech, i) => {
                        return (
                          <li key={i} className={styles.technology}>
                            {tech}
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                </div>
              </div>
            )
          })}





        </div>
      </div>
    </div>
  )
}

export default Experience