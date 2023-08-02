import { motion } from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0910dc]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div>
        <div>
          <img className="rennie-img" height="100px" width="100px" alt="Rennie's about photo" src="https://drive.google.com/uc?export=download&id=1HIAySTI9aIczEa7YYQaKn5-oM2TIBr0v"/>
        </div>       
          <p className={`${styles.heroSubText} leading-tight text-xs mt-2 mb-9 text-white-100`}>
          Full Stack Developer | React | Javascript | TypeScript | SaaS | <br className='sm:block hidden'/>I help enterprise clients build scalable, high-performance web applications that reduce costs through better design and development.
          </p>
        </div>
      </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  y: [0,24,0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />

            </div>
          </a>

        </div>
    </section>
  )
}

export default Hero