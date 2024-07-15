import { Tilt } from "react-tilt";
import { motion, spring } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { useState, useEffect } from "react";


const ProjectCard =({index, name, description, image, tags, source_code_link}) => {

  const isMobile = window.innerWidth <= 768;

  return(
      <motion.div 
      variants={isMobile? {}: fadeIn("up", spring, index* 0.5, 0.75)}
      >
            <Tilt options={{ max: 40, scale: 1, speed: 450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="w-full h-[230px] relative">
                    <img src={image} alt={name}
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute flex inset-0 card-img_hover m-3 justify-end">
                          <div onClick={()=> (window.open(source_code_link, "_blank"))}
                          className="black-gradient w-10 h-10 rounded-full flex justify-center cursor-pointer items-center"
                          >
                            <img
                              src={github}
                              alt="github"
                              className="h-1/2 w-1/2 object-contain"
                            />
                          </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-24px">{name}</h3>
                    <p className="mt-2 text-secondary text-14px">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag)=>(
                      <p  key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>))}
                </div>
            </Tilt>
      </motion.div>
  )
}


const Works = () => {

  const isMobile = window.innerWidth <= 768;

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
        <motion.div>
        <p className={styles.sectionSubText}>Take a quick peek</p>
        <h1 className={styles.sectionHeadText}>Projects.</h1>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        variants={isMobile ? {}: fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text -[16px] max-w-3xl leading-[30px]"
        >
          Here are some of my projects, showcasing my skills and experience through real-world examples of my work. Each project is briefly described with links to the live preview. They reflect my ability to solve complex problems, work with different technologies, and to manage projects effectively & efficiently.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">

          {projects.map((project, index)=>(
              <ProjectCard
                key ={`project-${index}`}
                index={index}
                {...project}
              />
          ))}

      </div>
    </>
  )
}

export default SectionWrapper (Works, "projects");