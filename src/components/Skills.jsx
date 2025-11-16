import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiDjango,
  DiReact,
  DiMongodb,
  DiPostgresql,
  DiWordpress,
  DiGithubBadge
} from 'react-icons/di'
import { SiPlotly, SiAstro, SiMysql, SiLinux } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useAnimationControls } from 'framer-motion'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'


// Combinar todas las skills en un solo array para el carousel
const allSkills = [
  {name: 'Html', icon: <DiHtml5 className='text-orange-600'/>},
  {name: 'Css', icon: <DiCss3 className='text-blue-500'/>},
  {name: 'Javascript', icon: <DiJavascript1 className='text-yellow-400'/>},
  {name: 'React', icon: <DiReact className='text-blue-500' />},
  {name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-500'/>},
  {name: 'Python', icon:<DiPython className='text-yellow-400'/>},
  {name: 'Django', icon: <DiDjango className='text-green-600'/>},
  {name: 'Postgresql', icon: <DiPostgresql className='text-purple-400'/>},
  {name: 'MongoDb', icon: <DiMongodb className='text-green-800'/>},
  {name: 'Github', icon: <DiGithubBadge className='text-gray-200'/>},
  {name: 'Wordpress', icon: <DiWordpress className='text-blue-400'/>},
  {name: 'Dash', icon: <SiPlotly className='text-blue-600'/>},
  {name: 'Astro', icon: <SiAstro className='text-orange-500'/>},
  {name: 'SQL', icon: <SiMysql className='text-blue-600'/>},
  {name: 'Linux', icon: <SiLinux className='text-gray-200'/>},
]


const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: [null, -140 * allSkills.length],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Aumenté la duración para más elementos
          ease: "linear",
        },
      });
    }
  }, [isPaused, controls, allSkills.length]);

  useEffect(() => {
    // Iniciar animación al montar el componente
    controls.start({
      x: [0, -140 * allSkills.length],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30, // Aumenté la duración para más elementos
        ease: "linear",
      },
    });
  }, [controls, allSkills.length]);

  return (
    <div className='max-w-[1200px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12' id="skills">
      <Reveal>
        <h2 className='text-3xl font-bold mb-4 text-center'>Technologies I've worked with</h2>
        <p className='text-center mb-8'>
          I worked on various frontend and fullstack projects, check them <a href="#" className='underline'>Here</a>
        </p>

        {/* Carousel Container */}
        <div className='overflow-hidden relative mx-auto max-w-6xl'>
          <motion.div 
            className='flex gap-6'
            animate={controls}
            style={{
              width: `${(allSkills.length * 2) * 140}px`,
            }}
          >
            {/* Renderizar las skills dos veces para efecto infinito */}
            {[...allSkills, ...allSkills].map((skill, index) => (
              <motion.div
                key={index}
                className='min-w-[130px] h-[120px] border border-purple-900 p-4 rounded-lg bg-purple-900/20 shadow-lg flex flex-col items-center justify-center flex-shrink-0 cursor-pointer'
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: '#a855f7',
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="text-4xl mb-2">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradientes para efecto de desvanecimiento en los bordes */}
          <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10'></div>
          <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10'></div>
        </div>
      </Reveal>
    </div>
  )
}

export default Skills
