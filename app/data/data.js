import ts from './../assets/ts.svg'
import ai from './../assets/ai.svg'
import ps from './../assets/ps.svg'
import ae from './../assets/ae.svg'
import figma from './../assets/figma.svg'
import next from './../assets/next.svg'
import three from './../assets/three.svg'
import tailwind from './../assets/tailwind.svg'
import gsap from './../assets/gsap.svg'
import blender from './../assets/blender.svg'
import astro from './../assets/astro-2.svg'

import astroImg from './../assets/astro.svg'
import cssImg from './../assets/css.svg'
import motionImg from './../assets/motion.svg'

export const skills = [
  {
    id: 0,
    title: 'Astro & Next',
    desc: '(Because performance matters.)',
    img: astro
  },
  {
    id: 1,
    title: 'GreenSock',
    desc: '(Motion done with purpose, not for show.)',
    img: gsap
  },
  {
    id: 2,
    title: 'TypeScript',
    desc: '(Big apps. Big safety.)',
    img: ts
  },
  {
    id: 3,
    title: 'Tailwind CSS',
    desc: '(Move fast, stay classy)',
    img: tailwind
  },
  {
    id: 4,
    title: 'Three.js & R3F',
    desc: '(Real-time 3D in the browser? Yes, I do that.)',
    img: three
  },
  {
    id: 5,
    title: 'Figma',
    desc: '(For Mockups and Prototyping)',
    img: figma
  },
  {
    id: 6,
    title: 'Illustrator',
    desc: '(Branding and Logo Design.)',
    img: ai
  },
  {
    id: 7,
    title: 'Blender',
    desc: '(Custom 3D assets and motion-ready visuals)',
    img: blender
  },
  {
    id: 8,
    title: 'After Effects',
    desc: '(Microinteractions, UI motion, animations)',
    img: ae
  },
  {
    id: 9,
    title: 'Photoshop',
    desc: '(Image editing and graphics)',
    img: ps
  },
]

export const experience = [
  {
    id: 1,
    title: 'Front End Developer & Web Designer',
    company: 'EPSILONNET',
    duration: 'May 24 – Present',
    description: 'Designing and building digital experiences that align with real business needs. I translate branding into functional, beautiful interfaces — from responsive layouts to scalable component systems.',
    technologies: [
      'React',
      'Next',
      'Javascript',
      'CSS',
      'Figma',
    ]
  },
  {
    id: 2,
    title: 'React Developer & UI Designer',
    company: 'DOTSOFT',
    duration: 'May 23 – May 24',
    description: 'Led UI/UX efforts for smart city and IoT applications, turning complex data into human-centric interfaces. Delivered intuitive dashboards and user flows that bridged the gap between sensors and users.',
    technologies: [
      'React',
      'Next',
      'Typescript',
      'CSS',
      'Figma',
      'Tailwind',
      'GSAP',
      'motion.dev'
    ]
  },
  {
    id: 3,
    title: 'React Developer & UI Designer',
    company: 'NCSR Demokritos',
    duration: 'Oct 20 – May 24',
    description: 'Building digital tools for education and culture. Partnering with educators and curators to turn lessons and exhibits into interactive web applications that engage and teach.',
    technologies: [
      'React',
      'Next',
      'Typescript',
      'CSS',
      'Figma',
      'Illustrator',
      'GSAP',
      'motion.dev'
    ]
  },
  {
    id: 4,
    title: 'Web Designer & UI/UX Expert',
    company: 'OneDealer',
    duration: 'Jun 22 – May 23',
    description: 'Designed high-performance UIs for automotive web platforms. Balanced sleek aesthetics with complex functionality (booking, browsing, brand guidelines)',
    technologies: [
      'CSS',
      'Javascript',
      'Figma',
      'Illustrator',
      'Photoshop',
    ]
  },
  {
    id: 5,
    title: 'E-Commerce Manager & Web Designer',
    company: 'ariane.gr',
    duration: 'Jun 19 – May 22',
    description: 'Owned the full e-commerce stack — design, dev, SEO, campaigns, and UX. From creative graphics to conversion-driven interfaces.',
    technologies: [
      'CSS',
      'Javascript',
      'Figma',
      'Illustrator',
      'Photoshop',
      'WordPress',
      'Google Ads'
    ]
  },
  {
    id: 6,
    title: 'Instructor (Web & Graphic Design)',
    company: 'ΙΕΚ ΑΛΦΑ',
    duration: 'Jan 20 – Mar 23',
    description: 'Teaching the next wave of designers and developers. From logo creation in Illustrator to full responsive web builds in HTML/CSS',
    technologies: [
      'CSS',
      'Javascript',
      'Figma',
      'Illustrator',
      'Photoshop',
    ]
  },
  // {
  //   id: 7,
  //   title: 'Freelance Developer & Designer',
  //   company: 'Pixelperfekt.gr',
  //   duration: 'Jan 2020 – Present',
  //   description: 'My personal playground and professional portfolio. I build websites for clients across industries — from sleek WordPress builds to fully custom sites.',
  //   technologies: [
  //     'React',
  //     'Next.js',
  //     'Typescript',
  //     'CSS',
  //     'Javascript',
  //     'Figma',
  //     'Illustrator',
  //     'Photoshop',
  //     'Wordpress'
  //   ]
  // },
]

export const properties = [
  {
    id: 1,
    property: '--role',
    val: 'designer + developer',
    comment: 'I do both.'
  },
  {
    id: 2,
    property: '--superpower',
    val: 'creative-logic-mode',
    comment: 'Design + Code, without context loss.'
  },
  {
    id: 3,
    property: '--dependencies',
    val: 'none',
    comment: "I don't rely on other roles to ship."
  },
  {
    id: 4,
    property: '--delay',
    val: '0ms',
    comment: 'Fast execution.'
  },
  {
    id: 5,
    property: '--connecting-dots',
    val: 'true',
    comment: 'I see the full picture and act on it.'
  },
  {
    id: 6,
    property: '--communication-lag',
    val: '0ms',
    comment: 'No back-and-forth. Just clarity.'
  },
  {
    id: 7,
    property: '--middleman',
    val: 'skipped',
    comment: 'No handoffs, no extra steps.'
  }
]

export const stackImages = [
  {
    id:1,
    src:astroImg,
    alt:'Astro Logo for development',
    desc: 'Development'
  },
  {
    id:2,
    src:cssImg,
    alt:'CSS Logo for styling',
    desc: 'Styling'
  },
  {
    id:3,
    src:motionImg,
    alt:'Motion.dev Logo for animations',
    desc: 'Animations'
  },
]