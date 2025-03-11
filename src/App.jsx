import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Component/Hero/Hero'
import Service from './Component/Service/Service'
import Payment from './Component/Payment/Payment'
import AppBanner from './Component/AppBanner/AppBanner'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='overflow-y-hidden overflow-x-hidden'>
        <Hero/>
        <Service/>
        <Payment/>
        <AppBanner/>
        <Footer/>
      </div>    
        
    </>
  )
}

export default App
