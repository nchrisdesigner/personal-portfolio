import styles from './contact.module.css'
import ButtonAnatomy from "./components/ButtonAnatomy/ButtonAnatomy"
import SectionTitle from '@/app/ui/SectionTitle/SectionTitle'

const Contact = () => {

  return (
    <section id="contact" className="section padding relative">
      <SectionTitle primaryTitle="YOU'VE SCROLLED SO FAR" secondaryTitle='Odds are you’re curious' colorSecondary='var(--color-primary)' />
      <p className={styles.text}>
        So let's skip the fluff. No forms. No funnels. Just a simple way to reach someone who can help you think, design, and ship. 
        <strong>&nbsp; I’m always open to great ideas, meaningful projects, and building things that matter.</strong>
      </p>
      <ButtonAnatomy />
    </section>
  )
}

export default Contact
