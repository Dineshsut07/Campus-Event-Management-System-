import { Card } from '@mui/material'
import React from 'react'
import LatestCard from './LatestCard'

const LatestEvent = () => {
  return (
   <section className='h-[100vh]  snap-center'>
    <h2 className='text-2xl text-center text-white lg:text-6xl md:text-4xl p-7'>Latest<span className='font-extrabold text-pink-700'>Events</span></h2>
     <div className="flex items-center justify-center ">
     <LatestCard
                title="Hackathon"
                description="Hackathon on web development"
                img="/t1.jpg"
            />
     <LatestCard
                title="Muscular challenge"
                description="Event to showcase the physical strength"
                img="/11.png"
            />
     <LatestCard
                title="Technical paper presentation"
                description=" To make a research paper on technical field"
                img="/t3.jpg"
            />
      
      </div> 
   
   </section>
  )
}

export default LatestEvent