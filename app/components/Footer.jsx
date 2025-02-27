import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <p className='w-36 mx-auto mb-2 font-Ovo text-3xl'>Luís.</p>

        <div className='w-max flex items-center gap-2 mx-auto font-Ovo'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            luiseduardombatista@gmail.com
        </div>

      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='font-Ovo'>© 2025 Luís Eduardo. Todos os direitos reservados.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a className='font-Ovo' target='_blank' href="https://github.com/luis-batista">GitHub</a></li>
            <li><a className='font-Ovo' target='_blank' href="https://www.linkedin.com/in/lu%C3%ADs-eduardo-batista-776838252/">Linkedin</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
