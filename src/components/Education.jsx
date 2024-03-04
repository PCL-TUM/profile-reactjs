import React from 'react'
import ImageEducation from '../assets/image/education.png'

function Education() {
  return (
    <div>
      <div id="Education" className="bg-white px-10">
        <div className="md:container md:mx-auto md:py-5 md:px-24">
          <div className="justify-between md:flex md:flex-row-reverse ">
            <div 
                 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700" 
                 className="text-left pt-5 pb-10 md:px-0 md:pt-0 md:my-auto">
              <h1 className="snap-always snap-start text-center text-5xl uppercase font-bold md:text-left md:ps-9 text-blue-950">
                Education
              </h1>
              <div className="px-10 pt-10 hidden md:flex md:flex-col">
                <h1 className="text-xl text-orange-500 italic font-semibold">
                  2018 - 2022
                </h1>
                <h1 className="text-3xl md:text-2xl font-semibold text-blue-950">
                  Rajamangala University of Technology Thanyaburi
                </h1>
                <h1 className="text-lg ps-0.5 md:text-lg">
                  Bachelor of Computer Engineering GPA : 2.86
                </h1>
              </div>
            </div>
            <div 
                 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700" 
                 className="">
              <img src={ImageEducation} className="max-w-auto sm:max-w-lg" />
              <div className="py-10 md:hidden">
                <h1 className="text-xl text-orange-500 font-semibold">
                  2018 - 2022
                </h1>
                <h1 className="text-2xl font-semibold text-blue-950">
                  Rajamangala University of Technology Thanyaburi
                </h1>
                <h1 className="text-lg ps-0.5">
                  Bachelor of Computer Engineering GPA : 2.86
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,128C120,160,240,224,360,224C480,224,600,160,720,122.7C840,85,960,75,1080,96C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Education
