import { motion } from 'framer-motion'
import React from 'react'
import Coffee1 from '../../assets/coffee/coffee1.png'
import Coffee3 from '../../assets/coffee/coffee3.png'


const serviceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio!"
  },
  {
    id: 2,
    image: Coffee3,
    title: "Cold Coffee",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. Illum."
  },
  {
    id: 3,
    image: Coffee1,
    title: "Hot Coffee",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum."
  },
]

const cardMotion = {
  hidden: {opacity: 1, y: 20},
  visible: {
    opacity: 1,
    y: 0,
  transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      ease: "easeInOut",
    }
  }
}

const containerCardMotion = {
  hidden: {opacity:1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4
    }
  }
}



const Service = () => {
  return (
    <div className='container my-16 space-y-4'>
      <div className='text-center max-w-lg mx-auto space-y-2'>
         <motion.h1 
         initial={{ opacity:0, y:100 }}
         whileInView={{ opacity:1, y:0 }}
         transition={{ 
          type: "spring",
          stiffness: 150,
          damping: 10,
          delay: 0.2
          }}
         className='text-3xl font-semibold text-lightGray'>
            fresh and <span className='text-primary'>tasty coffee</span>
         </motion.h1>
         <motion.p 
         initial={{ opacity:0, scale:0.5 }}
         whileInView={{ opacity:1, scale:1 }}
         transition={{ 
          type: "spring",
          stiffness: 150,
          damping: 10,
          delay: 0.6
          }}
         
         className='text-sm opacity-50'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus exercitationem repellat sapiente magnam doloremque recusandae dolorem iure accusantium sequi.
         </motion.p>
      </div>
      <motion.div 
      variants={containerCardMotion}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ amount: 0.8 }}
      
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {serviceData.map((result, index) => (
            <motion.div
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 10,
              duration: 0.6,
              delay: 0.9 
              }}
            className='text-center space-y-2'>
              <img className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={result.image} alt="" srcset="" />
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  {result.title}
                </h1>
                <h1 className='text-darkGray'>{result.subtitle}</h1>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  )
}

export default Service