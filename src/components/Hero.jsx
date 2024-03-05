import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

// Image
import img_cover from "../assets/image/thisisme.png";
import ResumePDF from "../assets/pdf/Resume.pdf"

function Hero() {
  return (
    <div>
      <div id="Home" className="pt-16">
        <div className="md:container md:mx-auto md:py-24 md:px-24 md:min-h-[43rem]">
          <div className="justify-between md:flex md:flex-row-reverse">
            <div className="md:flex md:w-auto">
              <img 
                data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" 
                src={img_cover}
                className="px-10 mt-10 max-w-auto sm:mt-0 md:max-w-xl "
              />
            </div>
            <div 
                 data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" 
                 className="text-left px-10 pt-5 pb- md:px-0 md:pt-0 md:my-auto md:w-full">
              <h1 className="text-orange-500 text-2xl">Hello, I'm</h1>
              <h1 className="text-white text-5xl uppercase font-bold">
                Phichet
              </h1>
              <h1 className="text-white text-5xl uppercase font-bold">
                Liwvaha
              </h1>
              <div className="pt-4">
                <h1 className="text-slate-300 text-3xl uppercase font-semibold">
                  Computer Engineering
                </h1>
                <h1 className="text-slate-300 text-2xl ">
                  Rajamangala University of Technology Thanyaburi
                </h1>
              </div>
              {/* <div className="pt-5">
                <a href="https://github.com/PCL-TUM">
                  <span className="flex flex-row w-100 text-3xl text-slate-300"><FaGithub /> 
                    <span className="text-xl ps-2 font-semibold"> PCL-TUM</span><span className="text-slate-500 text-xl ps-2 hidden md:flex"> (Phichet Liwvaha)</span>
                  </span>
                </a>
              </div> */}
              <div className="flex pt-5 pb-10">
                {/* <a href={ResumePDF} download="PDF Document" target="_blank" rel="noreferrer">
                  <button className="btn bg-orange-500 text-white border-0 hover:bg-orange-500/60 focus:bg-orange-500/80">
                    <span className="md:hidden lg:flex text-xl">
                      <FaFileDownload />
                    </span>
                    Downloed CV
                  </button>
                </a> */}
                <a href="#Skills">
                  <button className="btn ">Skill & tools</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(23 37 84)"
            fillOpacity="1"
            d="M0,160L40,138.7C80,117,160,75,240,53.3C320,32,400,32,480,48C560,64,640,96,720,101.3C800,107,880,85,960,90.7C1040,96,1120,128,1200,144C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
