import React, { useState } from 'react'
import {motion} from 'framer-motion'




const Navbar = ({sideBar, setSideBar}) => {

  const [btn, setBtn] = useState(false)

  return (
    <nav className='absolute top-0 w-full pt-10 text-white z-50'>
      <div className="container">
        <div className='flex justify-between items-center flex-row'>
          <motion.div 
          initial={{ opacity: 0, y:-100 }}
          animate={{ opacity:1, y:0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: .2
           }}
          className="text-2xl font-semibold">
            Literacy <span className='text-primary'>Coffee</span>
          </motion.div>
          <motion.div 
          
          
          className=" flex items-center justify-center">
            {/* <div className="max-sm:hidden flex items-center w-full">
              <ul className='flex items-center gap-3'>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div> */}
            <div onClick={() => setSideBar(!sideBar)} onClickCapture={() => setBtn(!btn)} className="flex flex-col gap-2 items-end ">
              <span className={`${btn == 1 ? 'w-[36px] duration-75 ease-in-out delay-0 translate-y-2 -rotate-45 origin-center' : 
                'duration-75 ease-in-out delay-0 translate-y-0 origin-center'} bg-white h-[4px] w-11 rounded-full`}></span>
              <span className={`${btn == 1 ? 'opacity-0 duration-75 ease-in-out delay-0 ' : 'duration-75 ease-in-out delay-0'}  bg-white h-[4px] w-6 rounded-full reverse`} ></span>
              <span className={`${btn == 1 ? 'w-11 duration-75 ease-in-out delay-0 translate-y-[-15px] rotate-45 origin-center' : ''} bg-white h-[4px] w-9 rounded-full`} ></span>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar