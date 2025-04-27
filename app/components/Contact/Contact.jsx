import styles from './contact.module.css'
import ButtonAnatomy from "./components/ButtonAnatomy/ButtonAnatomy"

const Contact = () => {

  return (
    <section className="section padding">
      <h2 className={styles.title}>
        You've scrolled this far. <span className={styles.purpleTitle}>Odds are you’re curious.</span>
      </h2>

      <p className={styles.text}>
        So let's skip the fluff. No forms. No funnels. Just a simple way to reach someone who can help you think, design, and ship — without the handoffs, headaches, or hangups.
        <strong> I’m always open to great ideas, meaningful projects, and building things that matter.</strong>
      </p>

      <ButtonAnatomy />
    </section>
  )
}

export default Contact
