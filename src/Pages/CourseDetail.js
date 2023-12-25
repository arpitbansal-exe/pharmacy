import React from 'react'
import Navbar from '../Componants/Navbar'
import dpharma_img from '../Images/dpharma_img.png'

export default function CourseDetail(props) {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mb-48 mx-3 md:mx-10 ">
        <div className="md:mt-10">
          <img className='rounded-lg' src={dpharma_img} alt="" />
        </div>
        <div className="">
          <div className='md:text-2xl space-y-3 p-5'>
            <div className='text-6xl'>{props.Course_name}</div>
            <div> <span className='font-semibold'>Course Duration : </span> {props.Course_duration}</div>
            <div><span className='font-semibold'>Course Type :</span> {props.Course_type}</div>
            <div><span className='font-semibold'> Medium of exam :</span> {props.medium_of_exam}</div>
            <div><span className='font-semibold'>Course Eligibility : </span>{props.Course_eligibility}</div>
            <div><span className='font-semibold'>Job Prospects : </span>{props.job_prospects}</div>
            <div><span className='font-semibold'>Course Description : </span>{props.Course_description}</div>
          </div>
        </div>

      </div>


    </div>

  )
}
