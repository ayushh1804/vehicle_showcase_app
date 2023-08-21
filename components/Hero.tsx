"use client"
import React from 'react'
import Image from 'next/image'


import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {
  }
  return (
    <div className='hero'>
     <div className='flex-1 pt-36 padding-x'>
        <h1 className="hero__title">Find, book or rent a vehicle easily</h1>
        <p className="hero__subtitle">streamline your car rental experience with our effortless booking process.</p>
<CustomButton title="Explore Vehicles"
containerStyles = "bg-primary-blue text-white rounded-full mt-10"
handleclick = {handleScroll}
/>
     </div>
    </div>
  )
}

export default Hero
