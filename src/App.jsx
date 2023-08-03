import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import {ComputersCanvas} from './components/canvas';
import { motion } from 'framer-motion';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" h-20 bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <div className="h-large relative">
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
        </div>
        <About/>
        <Experience/>
        <Tech />
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>



      </div>
    </BrowserRouter>
  )
}

export default App
