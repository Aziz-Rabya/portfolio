import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const HeroSection = ({ openContactForm }) => {
  return (
    <section className='h-screen bg-gradient-to-b
     from-violet-900
      to-black flex xl:flex-row flex-col-reverse 
      items-center justify-between lg:px-24 px-10 relative overflow-hidden '>
        {/* left section  */}
        <div className="z-40 xl:mb-0 mb-[20%] flex flex-col items-start xl:w-1/2 w-full max-w-2xl xl:pl-0 pl-2 xl:items-start">
          <span className="bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
            Building Digital
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
            Experiences
          </span>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.6
            }}
            className="text-lg md:text-xl text-purple-200 mb-8 leading-relaxed mt-6 text-center xl:text-left"
          >
            I craft high-performance web applications with a focus on beautiful design and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.8
            }}
            className="flex gap-4 justify-center xl:justify-start w-full"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-violet-500/30"
            >
              View Work
            </a>
            <button
              type="button"
              onClick={openContactForm}
              className="px-6 py-3 bg-transparent border border-violet-500 text-violet-100 rounded-lg font-medium hover:bg-violet-900/30 transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

      {/* right section */}

        <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" 
        scene="https://prod.spline.design/qNQ9pztDyxh3FTll/scene.splinecode" />
    </section>

  )
}

export default HeroSection