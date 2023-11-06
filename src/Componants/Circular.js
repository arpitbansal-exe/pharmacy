import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { circularsData } from './CircularData'
import Footer from './Footer'

export default function Circular() {
  return (

    <div>
      <Navbar />
      <h1 className='text-center text-3xl font-semibold md:text-6xl my-3'>Latest Circulars</h1>

      <div className='mb-20'>
      {circularsData.map((circular) => (
        <div key={circular.id} class="max-w-sm m-1 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{circular.heading}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{circular.description}</p>
          <Link to={circular.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>

      ))}
      </div>

      <Footer/>
    </div>
    

  )
}
