import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const About = () => {
  return (
    <motion.div id='about' className='w-full max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-10 scroll-mt-44'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    >
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }} 
      className='text-center text-3xl lg:text-[48px] font-Ovo'>Minha trajetória</motion.h2>

  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }} 
    className='container mx-auto flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20 mt-10'>
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.8 }} 
    className='flex-1 max-w-3xl'>
      <p className='text-left mb-10 font-Ovo'>
      Graduando em Engenharia de Computação pela UERJ, atuei como pesquisador na universidade, desenvolvendo um projeto voltado para estações meteorológicas. Atualmente, trabalho como estagiário na Colaborativa Tecnologia da Informação, desempenhando papéis importantes na execução de projetos.  
      Sou apaixonado por tecnologia e busco continuamente o aprendizado e oportunidades que contribuam para meu crescimento pessoal e profissional.
      </p>

      <motion.ul 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }} 
      className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {infoList.map(({icon, iconDark, title, description}, index)=>(
          <motion.li 
          whileHover={{scale: 1.05}}
          className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
            <div className='flex items-center gap-3'>
                <Image src={icon} alt={title} className='w-7'/>
                <h3 className='my-4 font-semibold text-gray-700 font-Outfit'>{title}</h3>
            </div>
            <p className='text-gray-600 text-sm font-Outfit'>{description}</p>
          </motion.li>
        ))}
      </motion.ul>

      <motion.h4 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.3 }} 
      className='my-6 text-center text-2xl text-gray-700 font-Ovo'>Habilidades</motion.h4>

      <motion.ul 
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }} 
      className='flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5'>
        {toolsData.map((tool, index)=>(
          <motion.li 
          whileHover={{ scale: 1.1 }} 
          className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </motion.div>
</motion.div>
  )
}

export default About
