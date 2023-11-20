import React from 'react'
import Navbar from '../Componants/Navbar'

export default function CourseDetail(props) {
  return (
    <div>
      <Navbar/>
        <div className='h-screen text-left mt-20'>
          <h1>Course Name:  {props.Course_name}</h1>
          <h1>Course Duration: {props.Course_duration}</h1>
          <h1>Course Type: {props.Course_type}</h1>
          <h1>Medium of exam:{props.medium_of_exam}</h1>
          <h1>Course Eligibility: {props.Course_eligibility}</h1>
          <h1>Course Description: {props.Course_description}</h1>

        </div>
    </div>
    
  )
}
