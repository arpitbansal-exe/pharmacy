import React from 'react'
import Navbar from '../Componants/Navbar'
import home_img from '../Images/home_img.png'
import img1 from '../Images/Gallary/1.JPG'
import img2 from '../Images/Gallary/2.JPG'
import img3 from '../Images/Gallary/3.JPG'
import img4 from '../Images/Gallary/4.JPG'
import img5 from '../Images/Gallary/5.JPG'
import img6 from '../Images/Gallary/6.JPG'
import img7 from '../Images/Gallary/7.JPG'
import img8 from '../Images/Gallary/8.JPG'
import img9 from '../Images/Gallary/9.JPG'
import img10 from '../Images/Gallary/10.JPG'
import img11 from '../Images/Gallary/11.JPG'
import img12 from '../Images/Gallary/12.JPG'



export default function Gallery() {
  return (
    <div>
      <Navbar/>
      <div className='max-w-full relative mb-5'>
        <div className="absolute inset-0 z-5 flex">
          <div className="absolute inset-0">
            <div className="mx-auto z-5 text-5xl md:text-6xl font-bold self-center text-center mt-3 md:mt-20">
              Hans College of Pharmacy
            </div>
          </div>
        </div>
        <img className='w-full h-[350px] md:h-[400px]' src={home_img} alt="" />
      </div>


      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-2">
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img1} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img2} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img3} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img4} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img5} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img9} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img7} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img8} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img6} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img10} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img11} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img12} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
