import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { textVariant } from '../utils/motion'

const Tech = () => {

  return (
  <>
   <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tools I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
  </motion.div>

  <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
    {technologies.map((technology) => (
      <div
        className='w-28 h-28 rounded-full bg-gray-900 
                   flex items-center justify-center cursor-pointer
                   relative group
                   transition-all duration-300
                   hover:scale-110 
                   shadow-lg shadow-gray-800
                   hover:shadow-2xl hover:shadow-cyan-500/50
                   border-2 border-gray-700
                   hover:border-cyan-400
                   animate-pulse-slow'
        key={technology.name}
      >
        {/* Anillo interior pulsante */}
        <div className='absolute inset-2 rounded-full border border-cyan-500/30 
                        animate-ping-slow' />
        
        {/* Anillos expansivos al hacer hover */}
        <div className='absolute inset-0 rounded-full border-2 border-cyan-500 
                        scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100
                        transition-all duration-500 group-hover:animate-pulse' />
        <div className='absolute inset-0 rounded-full border-2 border-purple-500 
                        scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100
                        transition-all duration-700 group-hover:animate-pulse'
                        style={{ animationDelay: '0.2s' }} />
        <div className='absolute inset-0 rounded-full border-2 border-pink-500 
                        scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-50
                        transition-all duration-1000 group-hover:animate-pulse'
                        style={{ animationDelay: '0.4s' }} />
        
        {/* Resplandor rotatorio */}
        <div className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                        bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0
                        group-hover:animate-spin-slow' />
        
        {/* Partículas brillantes */}
        <div className='absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full
                        opacity-0 group-hover:opacity-100 group-hover:animate-particle-1' />
        <div className='absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full
                        opacity-0 group-hover:opacity-100 group-hover:animate-particle-2' />
        <div className='absolute left-0 top-1/2 w-1 h-1 bg-pink-400 rounded-full
                        opacity-0 group-hover:opacity-100 group-hover:animate-particle-3' />
        <div className='absolute right-0 top-1/2 w-1 h-1 bg-blue-400 rounded-full
                        opacity-0 group-hover:opacity-100 group-hover:animate-particle-4' />
        
        {/* Imagen con efecto de brillo */}
        <img
          src={technology.icon}
          alt={technology.name}
          className='w-16 h-16 object-contain relative z-10 
                     group-hover:scale-110 group-hover:rotate-6
                     transition-all duration-300
                     filter group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
                     group-hover:animate-glow'
        />
      </div>
    ))}
  </div>
  </>
)
}



export default SectionWrapper(Tech, " ")