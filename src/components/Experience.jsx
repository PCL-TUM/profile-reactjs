import React from "react";

function Experience() {
  return (
    <div>
      <div id="Experience" className="bg-slate-50 px-10">
        <div className="md:container md:mx-auto md:py-5 md:px-24">
          <div className="justify-center md:flex pt-5">
            <h1 
                data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700"
                className="snap-always snap-start text-center text-5xl uppercase font-bold md:text-left md:ps-10 text-blue-950 ">
              Experience
            </h1>
          </div>
          <div className="justify-between py-10 grid gap-4 md:gap-8 md:pt-14 md:flex md:flex-row">
            <div 
                 data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700"
                 className="mb-5 p-8 md:w-1/2 bg-white md:p-12 shadow-lg rounded-3xl shadow-blue-950/40">
              <h1 className="text-xl text-blue-950 font-bold">Internship</h1>
              <h1 className="text-lg text-orange-500 font-semibold ">Jul 2021 - Oct 2021</h1>
              <h1 className="text-xl">Bluewind Solution Co., Ltd.</h1>
              <div className="border-b-2 border-blue-950 pt-5 shadow-md"></div>
              <ul className="list-disc text-lg pt-5 px-5">
                <li>
                  Learn and develop MVC format web applications with C#,
                  ASP.NET.
                </li>
                <li>
                  Build web applications according to the UI specified with PHP.
                </li>
                <li>
                  Build and develop script user interface web applications with
                  jQuery, Ajax
                </li>
                <li>
                  Query a specific information in database that retrieves data
                  with SQL.
                </li>
                <li>Testing the fluidity and normality of web applications</li>
              </ul>
            </div>
            <div 
                 data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700"
                 className="mb-5 p-8 md:w-1/2 bg-white md:p-12 shadow-lg rounded-3xl shadow-blue-950/40">
              <h1 className="text-xl text-blue-950 font-bold">Project</h1>
              <h1 className="text-lg text-orange-500 font-semibold ">Mar 2021 - Mar 2022</h1>
              <h1 className="text-xl">Parcel Sortation Via Image Processing</h1>
              <div className="border-b-2 border-blue-950 pt-5 shadow-md"></div>
              <h1 className="text-lg pt-5">
                A parcel sortation via image processing This project involves
                image processing and is divided into 3 parts.
              </h1>
              <ul className="list-disc text-lg px-5">
                <li>Hardware is a machine.</li>
                <li>
                  Windows application is a machine control and image processing
                  software.
                </li>
                <li>
                  Web application shows a list of parcels, manages adding,
                  deleting, and editing parcel information. and separate user
                  levels for each department
                </li>
              </ul>
            </div>

            {/* <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/4vg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <h1 className="text-2xl font-bold">Internship</h1>
                  <h1 className="text-xl font-semibold italic">
                    Jul 2021 - Oct 2021
                  </h1>
                  <div className="text-2xl font-semibold">
                    Bluewind Solution Co., Ltd.
                  </div>
                  <div className="border-b-2 border-slate-300 pt-5"></div>
                  <ul className="list-disc text-lg pt-5 px-5">
                    <li>
                      Learn and develop MVC format web applications with C#,
                      ASP.NET.
                    </li>
                    <li>
                      Build web applications according to the UI specified with
                      PHP.
                    </li>
                    <li>
                      Build and develop script user interface web applications
                      with jQuery, Ajax
                    </li>
                    <li>
                      Query a specific information in database that retrieves
                      data with SQL.
                    </li>
                    <li>
                      Testing the fluidity and normality of web applications
                    </li>
                  </ul>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <h1 className="text-2xl font-bold">Project</h1>
                  <h1 className="text-xl font-semibold italic">
                    Mar 2021 - Mar 2022
                  </h1>
                  <div className="text-2xl font-semibold">
                    Parcel Sortation Via Image Processing
                  </div>
                  <div className="border-b-2 border-slate-300 pt-5"></div>
                  <h1 className="text-lg pt-5">
                    A parcel sortation via image processing This project
                    involves image processing and is divided into 3 parts.
                  </h1>
                  <ul className="list-disc text-lg px-5">
                    <li>Hardware is a machine.</li>
                    <li>
                      Windows application is a machine control and image
                      processing software.
                    </li>
                    <li>
                      Web application shows a list of parcels, manages adding,
                      deleting, and editing parcel information. and separate
                      user levels for each department
                    </li>
                  </ul>
                </div>
                <hr />
              </li>
             
            </ul> */}
          </div>
        </div>
      </div>
      <div className="bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="rgb(248 250 252)" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,229.3C672,235,768,181,864,170.7C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      </div>
    </div>
  );
}

export default Experience;
