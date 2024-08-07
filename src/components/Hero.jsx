import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative h-screen mx-auto w-full'>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto max-w-7xl items-start 
      flex flex-row gap-5`}>

        <div className='flex flex-col mt-5 justify-center items-center'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-60 violet-gradient'/>
        </div>

        <div>
          <h1 className= {`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915eff]'> Benjamin </span> </h1>

          <p className={`${styles.heroSubText} mt-2 text-white`}> 
          I create stunning user interfaces <br className='sm:block hidden'/> & develop web applications
          </p>
        </div>

      </div>

      <ComputersCanvas/>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate = {{y:[0, 25,0]}}
                transition ={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType : 'loop'
                }}
                  className="bg-secondary w-3 h-3 rounded-full"
              />
          </div>
        </a>
      </div>
      
    </section>
  )
}

export default Hero