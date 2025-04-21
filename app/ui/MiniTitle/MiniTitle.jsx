import styles from './minititle.module.css'

const MiniTitle = ({children}) => {
  return (
    <h4 className={styles.miniTitle}>{children}</h4>
  )
}

export default MiniTitle