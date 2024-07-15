import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard =({experience}) => {

  return (
    <VerticalTimelineElement
        contentStyle={{background: '#1d1836', color: '#fff'}}
        contentArrowStyle={{borderRight: '7px solid #232631'}}
        iconStyle={{background: experience.iconBg}}
        // icon={
        //   <div className="flex items-center justify-center w-full h-full">
        //   <img
        //     src={experience.icon}
        //     alt={experience.company_name}
        //     className="object-contain w-[70%] h-[70%]"
        //   />
        //   </div>
        // }
      >
        <h3 className="font-bold">{experience.title}</h3>

        <p className="text-secondary"style={{margin: "0"}}>{experience.company_name}</p>
        
        <p className="text-secondary" style={{margin: "0", fontSize:"15px"}}>{experience.date}</p>

        
        
        <ul className="mt-5 ml-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className="tracking-wide text-[14px] text-white-100">
                  {point}
              </li>
            ))}
        </ul>

    </VerticalTimelineElement>
  )
}

const Experience = () => {

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h1 className={styles.sectionHeadText}>Experience.</h1>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          { experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper (Experience, "works")