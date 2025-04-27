import styles from './experience.module.css'
import { experience } from '@/app/data/data'
import JobTitle from './components/JobTitle/JobTitle'
import TechnologiesList from './components/TechnologiesList/TechnologiesList'
import SectionTitle from './components/SectionTitle/SectionTitle'

const Experience = () => {

  return (
    <div className={styles.experienceContainer}>

      <SectionTitle />
      <div className={styles.cards}>
        <div className={styles.cardGrid}>
          {experience.map(({ id, title, company, duration, description, technologies }) => {
            return (
              <div
                key={id} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardInfo}>
                    <div className={styles.information}>
                      <h5 className={styles.duration}>{duration}</h5>
                      <h4 className={styles.company}>{company}</h4>
                    </div>
                    <JobTitle title={title} />
                    <p className={styles.description}>
                      {description}
                    </p>

                    <TechnologiesList technologies={technologies} />
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