import { Card } from '@mui/material'
import React from 'react'
import LatestCard from './LatestCard'

const LatestEvent = () => {
  return (
   <section className='h-[100vh]  snap-center'>
    <h2 className='text-2xl text-center text-white lg:text-6xl md:text-4xl p-7'>Latest<span className='font-extrabold text-pink-700'>Events</span></h2>
     <div className="flex items-center justify-center ">
     <LatestCard
                title="Sample Card"
                description="This is a sample card component built with React and Tailwind CSS."
                imageUrl="/6.png"
            />
     <LatestCard
                title="Sample Card"
                description="This is a sample card component built with React and Tailwind CSS."
                imageUrl="/11.png"
            />
     <LatestCard
                title="Sample Card"
                description="This is a sample card component built with React and Tailwind CSS."
                imageUrl="/9.png"
            />
      
      </div> 
   
   </section>
  )
}

export default LatestEvent