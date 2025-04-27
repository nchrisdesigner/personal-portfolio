import Text from '@/app/ui/Text/Text'
import styles from './footer.module.css'
import { Anton, Rock_Salt, Indie_Flower } from "next/font/google"
import Github from './components/Github/Github'
import Linkedin from './components/Linkedin/Linkedin'
import DownloadCV from './components/DownloadCV/DownloadCV'

const indie = Indie_Flower({
  weight: ['400'],
  subsets: ['latin'],
})

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const rocksalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"]
})

const Footer = () => {
  return (
    <footer className='section padding'>
      <div className='flex flex-col gap-8'>

        <div className='flex flex-col gap-8'>
          <h3 className={` ${styles.footerMiniTitle}`}>
            Not Just Code. Not Just Design. <span className='purple-text'>All-In Creative.</span>
          </h3>


          <p className={styles.text}>
            In a landscape of standard solutions,  <span className='purple-text'>I bring versatility and creativity.</span> I unite clean, efficient code with bold design, building unique solutions that break the mold and drive real results.
          </p>
        </div>

        <div className={styles.socialIconsContainer}>
          <h4 className={` text-xl font-semibold`}>Access my profiles</h4>
          <div className='flex gap-8 items-end'>
            <Github />
            <Linkedin />
            <div className='flex flex-col gap-4 '>
            <h4 className='text-center font-medium'>or download my cv</h4>
            <DownloadCV />
          </div>
          </div>
          
        </div>
      </div>




    </footer>
  )
}

export default Footer