import React from 'react'
import Navbar from '../Componants/Navbar'
import home_img from '../Assets/home_img.png'
import img1 from '../Assets/Gallary/1.jpg'
import img2 from '../Assets/Gallary/2.jpg'
import img3 from '../Assets/Gallary/3.jpg'
import img4 from '../Assets/Gallary/4.jpg'
import img5 from '../Assets/Gallary/5.jpg'
import img6 from '../Assets/Gallary/6.jpg'
import img7 from '../Assets/Gallary/7.JPG'
import img8 from '../Assets/Gallary/8.jpg'
import img9 from '../Assets/Gallary/9.jpg'
import img10 from '../Assets/Gallary/10.jpg'
import img11 from '../Assets/Gallary/11.jpg'
import img12 from '../Assets/Gallary/12.jpg'
import LazyLoad from 'react-lazy-load';



export default function Gallery() {
  return (
    <div>
      <Navbar />
      <div className='max-w-full relative mb-5'>
        <div className="absolute inset-0 z-5 flex">
          <div className="absolute inset-0">
            <div className="mx-auto z-5 text-5xl md:text-6xl font-bold self-center text-center mt-3 md:mt-20">
              Hans College of Pharmacy
            </div>
          </div>
        </div>
        <LazyLoad  className='w-full h-[350px] md:h-[400px]'>
        <img className='w-full h-[350px] md:h-[400px]' src={home_img} alt="" />
        </LazyLoad>
        {/* <img className='w-full h-[350px] md:h-[400px]' src={home_img} alt="" /> */}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-2">
        <div className="grid gap-4">
          <div>
            <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img1} alt='' />
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img2} alt=''/>
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img3} alt=''/>
          </LazyLoad>

          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img4} alt='' />
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img5} alt='' />
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img6} alt='' />
          </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img7} alt='' />
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img8} alt='' />
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img9} alt='' />
          </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img10} alt='' />
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img11} alt='' />
          </LazyLoad>
          </div>
          <div>
          <LazyLoad  className="h-auto max-w-full rounded-lg" >
            <img src={img12} alt='' />
          </LazyLoad>
          </div>
        </div>
      </div>

    </div>
  )
}
