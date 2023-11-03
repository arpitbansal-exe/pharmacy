import React from 'react'
import Navbar from './Navbar'
import { teachers } from './StaffData'



export default function Staff() {
  return (
    <div>
      <Navbar />
      <h1 className="ml-10 my-20 text-3xl">List of Staff</h1>

      <div className="flex justify-center items-center">


        <div className="overflow-x-auto mb-20">
          <table className="table w-[60vw] text-center">
            <thead>
              <tr>
                <th>Sr no.</th>
                <th>Name</th>
                <th>Post</th>
                <th>Education</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="hover">
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.post}</td>
                  <td>{teacher.education}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
