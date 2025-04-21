import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import NotYourAverage from "./components/NotYourAverage/NotYourAverage"
import Skills from "./components/Skills/Skills"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="section">
        <About />
        <NotYourAverage />
        <Skills />
        <Experience />
        <Contact />
      </main>
      {/* <div className="grain-container">
        <div className="grain"></div>
      </div> */}

      <a href="#header" className="fixed bottom-12 right-12">
        <button
          className="cursor-pointer relative after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-75 after:duration-200 w-16 h-16 rounded-full border-2 border-indigo-600 bg-black pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
        >
          <svg
            className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
            viewBox="0 0 384 512"
          >
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
      </a>

    </>
  )
}
