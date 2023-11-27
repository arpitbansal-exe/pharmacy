import React from 'react'
import { teachers } from '../Componants/StaffData'
import Navbar from '../Componants/Navbar'



export default function Staff() {
  return (
    <div>
      <Navbar/>
      <div className="text-center my-10 text-4xl md:text-5xl font-bold ">
        List of Faculty
        </div>
      <div className="flex justify-center items-center max-w-full">
        <div className="overflow-x-auto mb-20">
          <table className="table w-[60vw] text-center md:text-2xl">
            <thead className='text-2xl '>
              <tr className='font-bold'>
                <th>Sr no.</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="hover">
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
