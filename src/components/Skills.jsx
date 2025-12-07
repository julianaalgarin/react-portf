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
import { useState } from 'react'


// Agrupar skills por categoría
const skillsByCategory = {
  'Frontend': [
    {name: 'Html', icon: <DiHtml5 className='text-orange-600'/>},
    {name: 'Css', icon: <DiCss3 className='text-blue-500'/>},
    {name: 'Javascript', icon: <DiJavascript1 className='text-yellow-400'/>},
    {name: 'React', icon: <DiReact className='text-blue-500' />},
    {name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-500'/>},
  ],
  'Backend': [
    {name: 'Python', icon:<DiPython className='text-yellow-400'/>},
    {name: 'Django', icon: <DiDjango className='text-green-600'/>},
    {name: 'SQL', icon: <SiMysql className='text-blue-600'/>},
  ],
  'Database': [
    {name: 'Postgresql', icon: <DiPostgresql className='text-purple-400'/>},
    {name: 'MongoDb', icon: <DiMongodb className='text-green-800'/>},
  ],
  'Tools & Others': [
    {name: 'Github', icon: <DiGithubBadge className='text-gray-200'/>},
    {name: 'Wordpress', icon: <DiWordpress className='text-blue-400'/>},
    {name: 'Dash', icon: <SiPlotly className='text-blue-600'/>},
    {name: 'Astro', icon: <SiAstro className='text-orange-500'/>},
    {name: 'Linux', icon: <SiLinux className='text-gray-200'/>},
  ],
}

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState('Frontend')

  return (
    <div className='w-full bg-slate-900/30 py-12 md:py-16' id="skills">
      <div className='max-w-4xl mx-auto px-4 sm:px-6'>
        {/* Título y descripción */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
            Technologies I've worked with
          </h2>
          <p className='text-sm sm:text-base text-gray-300'>
            I worked on various frontend and fullstack projects
          </p>
        </div>

        {/* Acordeón de categorías */}
        <div className='space-y-3'>
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className='border border-purple-900/50 rounded-lg overflow-hidden bg-gradient-to-r from-purple-900/10 to-purple-900/5'>
              {/* Header del acordeón */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                className='w-full px-4 md:px-6 py-4 flex items-center justify-between hover:from-purple-900/20 hover:to-purple-900/10 hover:border-purple-500 transition-all duration-300 border-b border-purple-900/30'
              >
                <span className='text-lg md:text-xl font-bold text-white'>{category}</span>
                <span className={`text-xl transition-transform duration-300 ${expandedCategory === category ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Contenido expandible */}
              {expandedCategory === category && (
                <div className='px-4 md:px-6 py-4 grid grid-cols-2 sm:grid-cols-3 gap-4'>
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className='flex flex-col items-center justify-center p-4 rounded-lg bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-300 group'
                    >
                      <div className='text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform'>
                        {skill.icon}
                      </div>
                      <span className='text-xs md:text-sm font-semibold text-center text-gray-200 group-hover:text-white'>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
