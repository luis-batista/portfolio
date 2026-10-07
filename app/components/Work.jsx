import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-m-28'
      aria-labelledby='work-heading'
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        id='work-heading'
        className='text-center text-3xl lg:text-[48px] font-Ovo'
      >Projetos</motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-10 mb-12 font-Ovo'
      >Aqui, mostro alguns dos trabalhos executados durante minha trajetória.</motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6'
      >
        {workData.map((project) => {
          const link = project.link?.trim()
          const Card = link ? motion.a : motion.article

          return (
            <Card
              key={project.title}
              {...(link ? {
                href: link,
                target: '_blank',
                rel: 'noopener noreferrer',
              } : {})}
              className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-500 bg-white shadow-sm transition-[box-shadow,border-color] duration-300 ${link ? 'cursor-pointer hover:border-gray-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4' : ''}`}
            >
            <div className='flex flex-1 flex-col gap-3 p-5'>
                <h3 className='text-center font-Outfit text-lg text-white bg-black p-2 bg-opacity-80 rounded-full border border-gray-500'>{project.title}</h3>
            </div>
              <div className='relative aspect-[4/3] w-full border-b border-gray-100 bg-white'>
                <Image
                  src={project.bgImage}
                  alt={`Prévia do projeto ${project.title}`}
                  fill
                  sizes='(max-width: 767px) 76vw, (max-width: 1023px) 38vw, 26vw'
                  className='object-cover p-3'
                />
              </div>

            <div className='flex flex-1 flex-col gap-3 p-5'>
                <p className='text-sm font-medium font-Outfit text-black'>{project.description}</p>
                <p className='text-sm leading-relaxed font-Outfit text-gray-600 whitespace-pre-line'>
                  {project.longDescription}
                </p>
                {link && (
                  <span className='mt-auto flex items-center gap-2 pt-4 text-sm font-semibold font-Outfit text-black'>
                    Ver projeto
                    <span aria-hidden='true' className='transition-transform duration-300 group-hover:translate-x-1'>↗</span>
                    <span className='sr-only'> (abre em uma nova aba)</span>
                  </span>
                )}
            </div>
            </Card>
          )
        })}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href='https://github.com/luis-batista'
        target='_blank'
        rel='noopener noreferrer'
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-amber-50 duration-500 font-Outfit'
      >
        Ver mais <Image src={assets.right_arrow_bold} alt='' className='w-4' />
      </motion.a>
    </motion.section>
  )
}

export default Work
