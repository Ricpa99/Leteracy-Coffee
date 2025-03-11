import React from 'react';
import WorldMap from  '../../assets/world-map.png';
import { motion } from 'framer-motion';




const Payment = () => {
  return (
    <div className='container my-36'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        <div className="space-y-8">
          <motion.h1 
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ 
            delay: 0.2,
            type: "spring",
            damping: 10,
            stiffness: 100,
           }}
          className='text-4xl font-bold text-darkGray font-serif'>
            Buy Our Product From Anyware
          </motion.h1>
          <motion.div 
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ 
            delay: 0.4
           }}
          className="flex items-center gap-4">
            <input className='input-style w-full lg:w-[150px] outline-none focus:border-slate-500' type="text" placeholder='Name' />
            <input className='input-style w-full' type="email" placeholder='email' />
          </motion.div>
          <motion.div
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ 
            delay: 0.6
           }}
          className="flex items-center gap-4">
            <input className='input-style w-full ' type="text" placeholder='Country' />
            <input className='input-style w-full' type="text" placeholder='Zip Code' />
          </motion.div>
          <motion.button 
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ 
            delay: 0.8
           }} 
           className='primary-btn'>Order now</motion.button>
        </div>
        <div className="col-span-2">
          <motion.img 
          initial={{ opacity:0, scale: 0.5 }}
          whileInView={{ opacity:1, scale: 1 }}
          transition={{ 
            delay:1,
            stiffness:100,
            type: "spring",
            damping: 10
           }}
          src={WorldMap} className="w-full sm:w-[500px] mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default Payment