import React from 'react'
import Navbar from '../Componants/Navbar'

export default function CourseDetail(props) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  lg:flex-row mt-10 md:mb-48 mx-3 md:mx-10 ">
      <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center">
        <img className='rounded-lg' src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170009/Diploma-in-Pharmacy.png" alt="" />
        </div>
        <div className="grid flex-grow card  rounded-box place-items-center">
          <div className='md:text-2xl space-y-3 p-5'>
            <div className='text-6xl'>{props.Course_name}</div>
            <div>Course Duration : {props.Course_duration}</div>
            <div>Course Type : {props.Course_type}</div>
            <div>Medium of exam : {props.medium_of_exam}</div>
            <div>Course Eligibility : {props.Course_eligibility}</div>
            <div>Job Prospects : {props.job_prospects}</div>
            <div>Course Description : {props.Course_description}</div>
          </div>
        </div>

      </div>


    </div>

  )
}
