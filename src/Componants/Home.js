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
      <div className='text-6xl ml-5'>
        Hans College of Pharmacy
      </div>

      <Link to="/applynow" className="btn ml-2 my-1 bg-red-400" >Admission Open</Link>
      <div className='w-screen'>
        <img className='w-screen h-1/2' src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBLLQIFMYA80r_ZPy7w17LSXnWRwlT8PUzNIUJ4eR1e97yV7e07PYtzHu_PGjuIALMGPcFooCFBbkVyBh6wyWP-DvuD=s1600" alt="" />
      </div>



      <div className="w-screen" >
        <Desk {...chairperson_data} />
        <Footer />
      </div>
    </>
  )
}
