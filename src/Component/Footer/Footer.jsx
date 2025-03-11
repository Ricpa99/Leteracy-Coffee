import { motion } from 'framer-motion'
import React from 'react'
import {FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram} from 'react-icons/fa'
import { FaMapLocation, FaXTwitter } from 'react-icons/fa6'
import  creditCard  from '../../assets/website/credit-cards.webp'





const Footer = () => {

   const date = new Date().getFullYear()
  return (
    <footer className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
      <div className="container">
         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
            initial={{ opacity:0, y: 100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{ 
               delay: 0.2,
               duration: 0.6
            }}
            className="space-y-6">
               <h1 className="text-3xl font-bold uppercase">Literacy Coffe</h1>
               <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, totam cum accusamus similique aperiam asperiores? Itaque voluptas enim ad.</p>
               <div>
                  <p className="flex items-center gap-2">
                     <FaPhone/> +62 (2783) xxxx
                  </p>
                  <p className="flex items-center gap-2 nt-2">
                     {" "}
                     <FaMapLocation/> Jl. Gelugur, Medan Kota, 2045 
                  </p>
               </div>
            </motion.div>
            <motion.div
             initial={{ opacity:0, y: 100 }}
             whileInView={{ opacity:1, y: 0 }}
             transition={{ 
                delay: 0.4,
                duration: 0.6
             }}
            className="space-y-6">
               <h1 className="text-3xl font-bold">Quick Links</h1>
               <div className="grid grid-cols-2 gap-3">
                  <div>
                     <ul className="space-y-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                     </ul>
                  </div>
               </div>
            </motion.div>
            <motion.div
             initial={{ opacity:0, y: 100 }}
             whileInView={{ opacity:1, y: 0 }}
             transition={{ 
                delay: 0.6,
                duration: 0.6
             }}
            className="space-y-6">
               <h1 className="text-3xl font-bold">Follow Us</h1>
               <div className="flex items-center gap-3 [&>*]:cursor-pointer">
                  <FaFacebook className='text-3xl hover:scale-125 duration-300'/>
                  <FaInstagram className='text-3xl hover:scale-125 duration-300'/>
                  <FaTelegram className='text-3xl hover:scale-125 duration-300'/>
                  <FaXTwitter className='text-3xl hover:scale-125 duration-300'/>
                  <FaGoogle className='text-3xl hover:scale-125 duration-300'/>
               </div>
               <div>
                  <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
                  <img className='w-[80%]' src={creditCard} alt="" srcset="" />
               </div>
            </motion.div>
         </div>
            <p className="text-white text-center mt-8 pt-8 border-t-2">
               Copyright &copy; {date} example company. All rights reserved
            </p>
      </div>
    </footer>
  )
}

export default Footer