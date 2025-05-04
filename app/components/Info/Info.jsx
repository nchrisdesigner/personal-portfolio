'use client'
import { useState } from 'react';
import styles from './info.module.css'
import { BsBracesAsterisk } from "react-icons/bs"
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

import vite from '@/app/assets/vite.svg'
import motionimg from '@/app/assets/motion.svg'
import css from '@/app/assets/css.svg'

import { Anton, Rock_Salt, Indie_Flower } from "next/font/google"

const variants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1
  },
  transition:{
    duration: .5,
    delay:0.25
  }
}


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

const Info = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);

  }


  return (
    <>
      <div className='flex justify-end p-4 fixed top-2 right-2'>

        <button onClick={handleToggle} >
          <BsBracesAsterisk className='text-4xl text-indigo-500 bg-indigo-400/15 p-1 rounded cursor-pointer' />
        </button>
      </div>


      <motion.div
        className='flex z-10 flex-col gap-8 rounded p-12 m-4 border border-indigo-500 w-[60rem] bg-[#121212] fixed top-10 right-10 origin-top-right'
        variants={variants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <h2 className='text-4xl font-bold'>[Project Info]</h2>


        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-semibold'>Stack</h3>
          <div className='flex gap-4'>
            <Image width={60} src={vite} alt='asdas' />
            <Image width={60} src={css} alt='asdas' />
            <Image width={60} src={motionimg} alt='asdas' />
          </div>
        </div>



        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-semibold'>Colors</h3>

          <div className='grid grid-cols-4  gap-2'>

            <div className='bg-[#242824] rounded p-4 flex flex-col gap-4'>
              <div className='bg-[#9147FF] grow-1 h-56 rounded'></div>
              <div>
                <h4 className='text-xl font-semibold'>Purple Gaze</h4>
                <h5 className='text-lg'>#242824</h5>
              </div>
            </div>

            <div className='bg-[#242824] rounded p-4 flex flex-col gap-4'>
              <div className='bg-[#9147FF] grow-1 h-56 rounded'></div>
              <div>
                <h4 className='text-xl font-semibold'>Purple Gaze</h4>
                <h5 className='text-lg'>#242824</h5>
              </div>
            </div>

            <div className='bg-[#242824] rounded p-4 flex flex-col gap-4'>
              <div className='bg-[#9147FF] grow-1 h-56 rounded'></div>
              <div>
                <h4 className='text-xl font-semibold'>Purple Gaze</h4>
                <h5 className='text-lg'>#242824</h5>
              </div>
            </div>

            <div className='bg-[#242824] rounded p-4 flex flex-col gap-4'>
              <div className='bg-[#9147FF] grow-1 h-56 rounded'></div>
              <div>
                <h4 className='text-xl font-semibold'>Purple Gaze</h4>
                <h5 className='text-lg'>#242824</h5>
              </div>
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-semibold'>Fonts</h3>
          <div className='flex gap-6'>
            <p className={`text-xl font-medium`}>Poppins</p>
            <p className={`${anton.className} text-xl font-medium`}>Anton</p>
            <p className={`${indie.className} text-xl font-medium`}>Indie Flower</p>
            <p className={`${rocksalt.className} text-xl font-medium`}>Rocksalt</p>
          </div>
        </div>

      </motion.div>
      )

    </>
  )
}

export default Info