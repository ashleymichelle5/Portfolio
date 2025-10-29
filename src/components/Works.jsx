// import React from 'react'
// import { Tilt } from 'react-tilt'
// import { motion } from 'framer-motion'
// import { styles } from '../style'
// import { github } from '../assets'
// import { SectionWrapper } from '../hoc'
// import { projects } from '../constants'
// import { fadeIn, textVariant } from '../utils/motion'


// const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
//   return (
//     <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} >
//       <a href={source_code_link} target='_blank' rel='noopener noreferrer'>
//         <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'>
//           <div className='relative w-full h-[230px]'>
//             <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
//             <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             </div>
//           </div>
//           <div className='mt-5'>
//             <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//             <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//           </div>
//           <div className='mt-4 flex flex-wrap gap-2'>
//             {tags.map((tag) => (
//               <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
//             ))}
//           </div>
//         </Tilt>
//       </a>
//     </motion.div>
//   );
// }



// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>My work </p>
//         <h2 className={styles.sectionHeadText}> Projects</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
//           These projects showcase my skills and experience through real-world examples. Most of them are built entirely with code, while others use modern builders and tools demonstrating my versatility in choosing the right approach for each challenge. Each project includes links to repositories and live demos, reflecting my ability to solve problems, work with diverse technologies, and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   )
// }

// export default SectionWrapper(Works, 'works')

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }} // 👈 Cambiado de 0.25 a 0.1
    >
      <a href={source_code_link} target='_blank' rel='noopener noreferrer'>
        <Tilt 
          options={{ max: 45, scale: 1, speed: 450 }} 
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
        >
          <div className='relative w-full h-[230px]'>
            <img 
              src={image} 
              alt={name} 
              className='w-full h-full object-cover rounded-2xl'
              loading="lazy" // 👈 Agregado
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </a>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} // 👈 Agregado explícitamente
      >
        <p className={styles.sectionSubText}>My work </p>
        <h2 className={styles.sectionHeadText}> Projects</h2>
      </motion.div>
      
      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn('', '', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} // 👈 Agregado explícitamente
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects showcase my skills and experience through real-world examples. Most of them are built entirely with code, while others use modern builders and tools demonstrating my versatility in choosing the right approach for each challenge. Each project includes links to repositories and live demos, reflecting my ability to solve problems, work with diverse technologies, and manage projects effectively.
        </motion.p>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')
