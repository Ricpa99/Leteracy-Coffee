import React from 'react'
import bannerImg from '../../assets/coffee-cover.jpg'
import AppStore from '../../assets/website/app_store.png'
import PlayStore from '../../assets/website/play_store.png'
import { motion } from 'framer-motion'

const imgStyle = {
   backgroundImage : `url(${bannerImg})`,
   backgroundSize : `cover`,
   backgroundPosition : `center`,
   backgroundRepeat : `no-repeat`,
   height: '100%',
   width: '100%',
}


const AppBanner = () => {
  return (
    <div className='container my-14'>
      <div style={imgStyle} className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
        <div className="grid gap-7">
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
            initial={{ opacity:0, y:100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
             }}
            className="text-2xl text-center sm:text-4xl font-semibold">Download the app</motion.h1>
            <motion.p 
             initial={{ opacity:0, y:100 }}
             whileInView={{ opacity:1, y:0 }}
             transition={{ 
               type: "spring",
               stiffness: 100,
               damping: 10,
               delay: 0.3,
              }}
            className="text-center px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque voluptatem alias.</motion.p>
          </div>
          <div className='flex justify-center gap-4'>
            <a className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' href={'#'}>
            <motion.img 
            initial={{ opacity:0, y:100 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
             }}
            src={AppStore} alt="" srcset="" /></a>
            <a className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' href={'#'}>
            <motion.img 
            initial={{ opacity:0, y:100 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.7,
             }}
            src={PlayStore} alt="" srcset="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBanner