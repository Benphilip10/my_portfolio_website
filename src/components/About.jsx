import {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {

  const isMobile = window.innerWidth <= 768;


       return (
            <Tilt className="xs:w-[250px] w-full" options={{max: 40, scale: 1,speed: 450}}>
              <motion.div 
              variants={isMobile? {}: fadeIn("right","spring", 0.5*index, 0.80)} 
              className='w-full p-[1px] green-pink-gradient shadow-card rounded-[20px]'>
                  <div
                  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col justify-evenly items-center'
                  >
                    <img src={icon} alt="title" className='h-16 w-16 object-contain'/>
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                  </div>
              </motion.div>
            </Tilt>

       )
      
      }

const About = () => {

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <motion.div variants={isMobile?{}: textVariant()}>
        <p className={styles.sectionSubText}>Get to know me</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>

      <motion.p className="mt-4 text-secondary font-[17px] max-w-3xl leading-[30px]"
        variants={isMobile? {} :fadeIn("", "", 0.1, 1)}
      >
        I am a skilled software developer with experience using Javascript & Typescript, and expertise with frontend frameworks like React, NextJS, React Native and Vue. I'm a quick learner and i'm open to learning. I collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-life problems. Let's work together to bring your project ideas to life!  
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'> 
        {services.map((service, index) => (
            <ServiceCard 
              key= {service.title}
              index = {index}
              {...service}
            />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper (About, "about")