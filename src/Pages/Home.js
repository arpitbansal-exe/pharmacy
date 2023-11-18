import React from 'react'
import Desk from '../Componants/Desk'
import { chairperson_data } from '../Componants/LeaderData'
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


      <div className="max-w-full mt-5" >
        <Desk {...chairperson_data} />
      </div>
    </div>
  )
}
