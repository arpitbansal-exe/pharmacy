import React from 'react'
import Navbar from './Navbar'
import Desk from './Desk'
import { chairperson_data } from './LeaderData'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className='text-6xl ml-5'>
        Hans College of Pharmacy
      </div>

      <Link to="/applynow" className="btn ml-2 my-1 bg-red-400" >Admission Open</Link>
      <div className='w-screen'>
        <img className='w-screen h-1/2' src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBLLQIFMYA80r_ZPy7w17LSXnWRwlT8PUzNIUJ4eR1e97yV7e07PYtzHu_PGjuIALMGPcFooCFBbkVyBh6wyWP-DvuD=s1600" alt="" />
      </div> */}
      <div className='w-screen relative mb-5'>
        <div className="absolute inset-0 z-5 flex">
          <div className="absolute inset-0">
            <div className="mx-auto z-5 text-6xl font-bold self-center text-center mt-3 md:mt-20">
              Hans College of Pharmacy
            </div>
            <Link to="/applynow" className="z-7 btn absolute bottom-5 right-3 md:right-10 md:bottom-10 md:text-3xl  bg-red-500" >Admission Open</Link>
          </div>
        </div>
        <img className='w-screen h-1/2' src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBLLQIFMYA80r_ZPy7w17LSXnWRwlT8PUzNIUJ4eR1e97yV7e07PYtzHu_PGjuIALMGPcFooCFBbkVyBh6wyWP-DvuD=s1600" alt="" />
      </div>


      <div className="w-screen mt-5" >
        <Desk {...chairperson_data} />
        <Footer />
      </div>
    </>
  )
}
