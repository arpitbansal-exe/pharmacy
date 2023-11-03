import React from 'react'
import Navbar from './Navbar'
import Desk from './Desk'
import { chairperson_data } from './LeaderData'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-screen" >
        <Desk {...chairperson_data} />
      <Footer />  
      </div>
    </>
  )
}
