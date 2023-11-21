import React from 'react'
import { chairperson_data, principal_data } from '../Componants/LeaderData'
import { Link } from 'react-router-dom'
import Navbar from '../Componants/Navbar'
import home_img from '../Images/home_img.png'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='max-w-full relative mb-5'>
        <div className="absolute inset-0 z-5 flex">
          <div className="absolute inset-0">
            <div className="mx-auto z-5 text-6xl font-bold self-center text-center mt-3 md:mt-20">
              Hans College of Pharmacy
            </div>
            <Link to="/applynow" className="z-7 btn absolute bottom-5 right-3 md:right-10 md:bottom-10 md:text-3xl  bg-red-500" >Admission Open</Link>
          </div>
        </div>
        <img className='w-full h-1/2' src={home_img} alt="" />
      </div>


      <div className="flex justify-center items-center z-0 md:mx-36 mx-3 my-5">
        <div className="card card-compact w-86  bg-base-200  shadow-2xl md:card-side ">
          <figure className="w-full object-fill"><img src={chairperson_data.image} alt={chairperson_data.name} /></figure>
          <div className="card-body">
            <h1 className="card-title">{chairperson_data.name}</h1>
            <h2 className="card-title">{chairperson_data.post}</h2>
            <p className='whitespace-pre-line text-left text-xl md:text-2xl'>{chairperson_data.message}</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center items-center z-0 md:mx-36 mx-3  mt-16 mb-5">
        <div className="card card-compact w-86  bg-base-200 shadow-2xl md:card-side ">
          <div className="card-body">
            <h1 className="card-title">{principal_data.name}</h1>
            <h2 className="card-title">{principal_data.post}</h2>
            <p className='whitespace-pre-line text-left text-xl md:text-2xl'>{principal_data.message}</p>

          </div>
          <figure className="w-full object-fill"><img src={principal_data.image} alt={principal_data.name} /></figure>
        </div>
      </div>



    </div>
  )
}
