import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen w-11/12 mx-auto gap-8">
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-48 md:w-64'/>
      </motion.div>

    <div className="text-center md:text-left max-w-2xl">
      <motion.h3
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex flex-col items-center md:items-start gap-2 text-xl md:text-2xl lg:text-2xl mb-3 font-Ovo text-center md:text-left'> 
      {/*className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>*/} 
        Olá! Eu sou o Luís.
      </motion.h3>
      <motion.h1
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}}  
      className='text-3xl sm:text-6xl lg:text-[64px] font-Outfit'>
        Developer FullStack
      </motion.h1>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}  
      className='max-w-xl font-Ovo mt-4'>
        Graduando em Engenharia da Computação pela Universidade do Estado do Rio de Janeiro (UERJ) e desenvolvedor Full Stack.
      </motion.p>

      {/* Botões */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}} 
        href="/luiseduardo_curriculo.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black font-Outfit'>
          Currículo<Image src={assets.download_icon} alt='' className='w-4'/>
        </motion.a>

        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.2}} 
        href="#contact" className='px-10 py-3 border border-black rounded-full bg-black text-white flex items-center gap-2 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black font-Outfit'>
          Contato<Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.a>
      </div>
    </div>
  </div>

    // <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
    //   <div>
    //     <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
    //   </div>
    //     <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> 
    //         Olá! Eu sou o Luís. <Image src={assets.hand_icon} alt='' className='w-6'/>
    //     </h3>
    //     <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
    //         Developer FullStack
    //     </h1>
    //     <p className='max-w-2xl mx-auto font-Ovo'>
    //         Eu sou um desenvolvedor, graduado pela UERJ - Universade Estadual do Rio de Janeio...
    //     </p>
    //     <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
    //     <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>Currículum<Image src={assets.download_icon} 
    //     alt='' className='w-4'/></a>

    //     <a href="#contact" className='px-10 py-3 border border-black rounded-full bg-black text-white flex items-center gap-2 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>Contate-me<Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

    //     </div>
    // </div>
  )
}

export default Header
