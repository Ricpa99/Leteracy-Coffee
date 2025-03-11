import React from 'react';
import img from '../../assets/bg-slate.png';
import CofeeeImg from '../../assets/black.png';
import Navbar from '../Navbar/Navbar';
import {motion} from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const bgImage = {
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};


const Hero = () => {
  const [sideBar, setSideBar] = React.useState(false)

  return (
    <main style={bgImage}>
      <section className='min-h-[750px] w-full relative'>
          <Navbar sideBar={sideBar} setSideBar={setSideBar}/>
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1 
              initial={{ opacity: 0, y:-100 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1
               }}
              className="text-7xl font-bold leading-tight ml-14">
                Blavck Tumbler
              </motion.h1>
              <motion.div 
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2
               }}
              className='relative'>
                <div className='relative z-10 space-y-4 max-sm:p-5'>
                  <h1 className='text-2xl'>Black Lifestyle Lovers</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, magni et animi pariatur iure ex at accusamus laudantium suscipit 
                    impedit error adipisci quaerat, perspiciatis dicta dolores saepe assumenda 
                    sit vitae.
                  </h1>
                </div>
                <div className="absolute -top-6 
                -left-10 w-[250px] h-[200px] 
                bg-gray-700/25">

                </div>
              </motion.div>
            </div>
            <div className='relative'>
              <motion.img 
              initial={{ opacity: 0, scale:0 }}
              whileInView={{ opacity:1, scale:1}}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: .4
               }}
              className='relative z-40 h-[400px] md:h-[700px] img-shadow' src={CofeeeImg} alt="" srcset="" />
              <motion.div 
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8
               }}
              className="h-[180px] w-[180px] absolute top-24 -right-16 
              border-primary rounded-full z-10 border-[20px]">
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, x:-100 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8
               }}
              className="absolute -top-20 left-[200px] z-[1]">
                <h1 className='text-[140px] scale-150 font-bold text-darkGray/70 leading-none'>
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            <div className='max-lg:-mt-48  max-md:-mt-2'>
            <motion.div 
            initial={{ opacity: 0, y:100 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.2
             }}
            className="text-lightOrange mt-[100px] max-md:-mt-12 p-4 space-y-28 ">
              <h1 className="text-7xl opacity-0 font-bold leading-tight ml-14">
                Blavck Tumbler
              </h1>
              <div className='relative max-sm:p-5'>
                <div className='relative z-10 space-y-4 max-md:-top-16'>
                  <h1 className='text-2xl'>Blvck Tumbler</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, magni et animi pariatur iure ex at accusamus laudantium suscipit 
                    impedit error adipisci quaerat, 
                  </h1>
                </div>
                <div className="absolute -top-6 max-md:-top-24
                -right-10 w-[250px] h-[200px] 
                bg-darkGray/50">
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
        {
          sideBar && (
        <motion.div 
        initial={{ x: "100%" }}
        whileInView={{ x: "0" }}
        
        className="absolute top-0 right-0 h-full w-[140px]
        bg-gradient-to-b from-primary/80
        to-primaryDark/80 backdrop-blur-sm z-40">
          <div className='w-full h-full flex justify-center items-center'>
          <div className="flex flex-col justify-center items-center gap-6 text-white [&>div]:cursor-pointer">
            <hr className='h-[70px] w-[1px] bg-white' />
              <div className='inline-block rounded-full border border-white p-2'>
              <FaFacebookF className='text-2xl'/>
              </div>
              <div className='inline-block rounded-full border border-white p-2'>
              <FaXTwitter className='text-2xl'/>
              </div>
              <div className='inline-block rounded-full border border-white p-2'>
              <FaInstagram className='text-2xl'/>
              </div>
              <div className='inline-block rounded-full border border-white p-2'>
              <FaYoutube className='text-2xl'/> {sideBar}
              </div>
            <hr className='h-[70px] w-[1px] bg-white' />
          </div>
          </div>
        </motion.div>
          )
        }
      </section>
    </main>
  )
}

export default Hero