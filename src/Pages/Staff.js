import React from 'react'
import { teachers } from '../Componants/StaffData'
import Navbar from '../Componants/Navbar'

export default function Staff() {
  return (
    <div className="w-full">
      <Navbar/>
      <div className="text-center my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        List of Faculty
      </div>
      <div className="px-4 w-full overflow-x-auto flex items-center justify-center">
        <table className="table w-full md:w-3/5  text-center text-xs sm:text-sm md:text-base lg:text-xl">
          <thead>
            <tr className='font-bold'>
              <th className="px-2 py-3">Sr no.</th>
              <th className="px-2 py-3">Name</th>
              <th className="px-2 py-3">Designation</th>
              <th className="px-2 py-3">Department</th>
            </tr>
          </thead>
          <tbody> 
            {teachers.map((teacher, index) => (
              <tr key={index} className="hover">
                <td className="px-2 py-3">{index + 1}</td>
                <td className="px-2 py-3">{teacher.name}</td>
                <td className="px-2 py-3">{teacher.designation}</td>
                <td className="px-2 py-3">{teacher.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}