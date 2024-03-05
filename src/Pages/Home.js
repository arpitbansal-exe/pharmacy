import React from 'react'
import { chairperson_data, principal_data } from '../Componants/LeaderData'
import Navbar from '../Componants/Navbar'
import home_img from '../Assets/home_img.png'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='max-w-full relative mb-5'>
        <div className="absolute inset-0 z-5 flex">
          <div className="absolute inset-0">
            <div className="mx-auto z-5 text-5xl md:text-6xl font-bold self-center text-center mt-5 md:mt-20">
              Hans College of Pharmacy
            </div>
          </div>
        </div>
        <img className='w-full h-[350px] md:h-[400px]' src={home_img} alt="" />
      </div>


      <div className="flex justify-center items-center z-0 md:mx-36 mx-3 my-5">
        <div className="card card-compact w-86  bg-base-200  shadow-2xl md:card-side ">
          <div className='hidden md:flex w-full'>
            <figure className="w-full object-fill"><img className='rounded-l-lg' src={chairperson_data.image} alt={chairperson_data.name} /></figure>
          </div>
          <div className="card-body">
            <h1 className="card-title">{chairperson_data.name}</h1>
            <h2 className="card-title">{chairperson_data.post}</h2>
            <p className='whitespace-pre-line text-left text-xl md:text-2xl'>{chairperson_data.message}</p>
          </div>
          <div className='flex md:hidden w-full h-max-full'>
            <figure className="w-full object-fill rounded-lg"><img className='rounded-b-lg' src={chairperson_data.image} alt={chairperson_data.name} /></figure>
          </div>
        </div>
      </div>


      {/* <div className="flex justify-center items-center z-0 md:mx-36 mx-3  mt-16 mb-5">
        <div className="card w-86 bg-base-100 md:card-side shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{principal_data.name}</h2>
            <h2 className="card-title">{principal_data.post}</h2>
            <p className='whitespace-pre-line text-left text-xl md:text-2xl'>{principal_data.message}</p>
          </div>
          <figure className='object-fill md:w-3/5'><img src={chairperson_data.image} alt={principal_data.name} /></figure>
        </div>
      </div> */}

    </div>
  )
}
