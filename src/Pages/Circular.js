import React from 'react'
import { Link } from 'react-router-dom'
import { circularsData } from '../Componants/CircularData'
import Navbar from '../Componants/Navbar'

export default function Circular() {
  return (

    <div className='md:mb-96'>
      <Navbar />
      <h1 className='text-center text-3xl font-semibold md:text-6xl mt-8 '>Latest Circulars</h1>
      
      <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 mb-20 mx-8 mt-7 md:mt-16'>
      {circularsData.map((circular) => (
        <div key={circular.id} class="max-w-sm m-1 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{circular.heading}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{circular.description}</p>
          <Link to={circular.link} target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>

      ))}
      </div>
    </div>
    

  )
}
