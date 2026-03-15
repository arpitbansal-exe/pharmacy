import React from 'react'
import { chairperson_data, principal_data } from '../Componants/LeaderData'
import Navbar from '../Componants/Navbar'
import home_img from '../Assets/home_img.png'

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <div className='w-full relative mb-5'>
        <div className="absolute inset-0 z-5 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black drop-shadow-lg px-4">
              Hans College of Pharmacy
            </h1>
          </div>
        </div>
        <img className='w-full h-56 sm:h-80 md:h-96 lg:h-[400px] object-cover' src={home_img} alt="Hans College" />
      </div>


      <div className="flex justify-center items-center z-0 px-3 sm:px-6 md:px-12 lg:px-36 my-5">
        <div className="card card-compact w-full bg-base-200 shadow-2xl md:card-side">
          <div className='hidden md:flex w-full md:w-1/2'>
            <figure className="w-full"><img className='rounded-l-lg w-full h-full object-cover' src={chairperson_data.image} alt={chairperson_data.name} /></figure>
          </div>
          <div className="card-body gap-2 md:gap-3">
            <h1 className="card-title text-lg sm:text-xl md:text-2xl">{chairperson_data.name}</h1>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-primary">{chairperson_data.post}</h2>
            <p className='whitespace-pre-line text-left text-sm sm:text-base md:text-lg leading-relaxed'>{chairperson_data.message}</p>
          </div>
          <div className='flex md:hidden w-full'>
            <figure className="w-full"><img className='rounded-b-lg w-full h-auto object-cover' src={chairperson_data.image} alt={chairperson_data.name} /></figure>
          </div>
        </div>
      </div>

    </div>
  )
}
