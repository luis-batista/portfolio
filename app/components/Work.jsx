import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

function Work() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-m-28'>
        <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-3xl lg:text-[48px] font-Ovo'>Projetos</motion.h2>
        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}  
        className='text-center max-w-2xl mx-auto mt-10 mb-12 font-Ovo'>Bem-vindo ao meu portfólio. Aqui, mostro alguns projetos executados durante minha trajetória na Colaborativa Tecnologia da Informação.
        </motion.p>

<motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.9 }}
    // className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] my-10 gap-5'>
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
        {workData.map((project, index)=>(
            <div key={index} className="flex flex-col">
                
                <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl shadow-md overflow-hidden relative cursor-pointer group' 
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    {/* Título posicionado no topo da imagem */}
                    <div className='absolute top-0 left-0 w-full'>
                        <h2 className='text-center font-Outfit text-lg text-white bg-blue-400 p-2 bg-opacity-80'>{project.title}</h2>
                    </div>
                    
                    <div className='bg-[#ffffff] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border-[0.5px] border-gray-400'>
                        <div>
                            <p className='text-gray-700 text-sm font-Outfit'>{project.description}</p>
                        </div>
                        {/* <div className='w-9 aspect-square flex items-center justify-center'>
                            <Image src={assets.send_icon} alt='send icon' 
                            className='w-5' />
                        </div> */}
                    </div>
                </motion.div>
                
                {/* Descrição adicional estilizada como caixa de diálogo */}
                <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mt-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                        <p className="text-sm text-gray-600 font-Outfit whitespace-pre-line">{project.longDescription}</p>
                    </div>
                </motion.div>
            </div>
        ))}
</motion.div>

    {/* <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.9 }}
    className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] my-10 gap-5'>
        {workData.map((project, index)=>(
            <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-[#FCFCF2] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold font-Outfit'>{project.title}</h2>
                        <p className='text-sm text-gray-700 font-Outfit'>{project.description}</p>
                    </div>
                    <div className='w-9 aspect-square flex items-center justify-center'>
                        <Image src={assets.send_icon} alt='send icon' 
                        className='w-5' />
                    </div>
                </div>
            </motion.div>
        ))}
    </motion.div> */}

    <motion.a 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 1.1 }}    
    href="https://github.com/luis-batista" target="_blank" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
     border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-amber-50 duration-500 font-Outfit'>
        Ver mais <Image src={assets.right_arrow_bold} alt='Rigght arrow'
        className='w-4'/>
    </motion.a>

    </motion.div>
  )
}

export default Work
