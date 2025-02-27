import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from 'motion/react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ba100ba4-8dde-4b9b-8662-847f30c3ac54");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mensagem enviada com sucesso!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' className='w-full px-[12%] py-10 scroll-m-20'>
        <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}    
        className='text-center text-3xl lg:text-[48px] font-Ovo'>Contato</motion.h2>
        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}    
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Caso também tenha alguma dúvida, comentário ou sugestão, não deixe de entrar em contato, use o formulário abaixo.
        </motion.p>

        <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}    
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>

            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <motion.input 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }} 
            type="text" placeholder='Digite seu nome' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white font-Ovo' name='name'/>

            <motion.input 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }} 
            type="email" placeholder='Digite seu email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white font-Ovo' name='email'/>
            </div>

            <motion.textarea 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}     
            rows='6' placeholder='Digite sua mensagem' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 font-Ovo' name='message'></motion.textarea>

            <motion.button 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}         
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-Outfit'
            >Enviar<Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
      </motion.div>
    )
  }

export default Contact
