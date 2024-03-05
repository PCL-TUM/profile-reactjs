import React from 'react'
import ImageContact from '../assets/image/illustration-dark.svg'

import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <div id="Contact" className="bg-slate-50 px-10">
        <div className="py-5 md:container md:mx-auto md:pt-0 md:pb-24 md:px-24">
          <div className="justify-between md:flex md:flex-row py-10">
            <div className="pb-5 hidden md:flex md:flex-col md:w-1/2">
              <img 
                data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700"
                src={ImageContact}
                className="max-w-auto sm:max-w-lg "
              />
            </div>
            <div 
                data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700" 
                className="pb-5 md:px-10 md:w-1/2 md:pt-20">
              <h1 className="snap-always snap-start text-center text-5xl uppercase font-bold text-blue-950 md:text-left ">
                Contact
              </h1>
              <div className="pt-10 md:flex md:flex-col">
                <h3 className='text-lg text-orange-500 font-semibold'>Phone Number</h3>
                <h1 className="flex flex-row text-xl text-blue-950 pb-5">
                 <span className='pt-2 pe-3'><FaPhoneVolume /></span>: (+66) 97 - 2340942
                </h1>
                <h3 className='text-lg text-orange-500 font-semibold'>Mail</h3>
                <h1 className="flex flex-row text-xl text-blue-950 pb-5">
                 <span className='pt-2 pe-3'><FaEnvelope /></span>: phichet.pcl@gmail.com
                </h1>
                <h3 className='text-lg text-orange-500 font-semibold'>Address</h3>
                <h1 className="flex flex-row text-xl text-blue-950 pb-5">
                  <span className='pt-2 pe-3'><FaLocationDot /></span>: 69 Moo.1, Khun Thale, Mueang Surat Thani, Surat Thani, 84100
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
