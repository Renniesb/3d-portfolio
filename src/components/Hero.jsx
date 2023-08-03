import {styles} from '../styles';

const Hero = () => {
  return (
    <section className='relative mt-24 w-full mx-auto'>
      <div className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
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
    </section>
  )
}

export default Hero