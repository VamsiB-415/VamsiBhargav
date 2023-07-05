import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const projects = [
    {
      name: "Optum Global Solutions",
      company: "Software Engineer",
      github: "https://www.optum.in/",
      timeline: "July 2018 - July 2019",
      logoUrl: "https://www.optum.in/content/dam/optum3/events/skins/logos/optum_2x.png"
    },
    {
      name: "ATS IT Solutions",
      company: "Dot Net Developer",
      github: "http://www.atsitsolutions.in/",
      timeline: "July 2019 - October 2021",
      logoUrl: "http://www.atsitsolutions.in/wp-content/uploads/2018/02/cropped-AI-27-2.png"
    },
    {
      name: "NSPIRA Management Services",
      company: "Software Developer",
      github: "https://www.nspira.in/",
      timeline: "November 2021 - July 2022",
      logoUrl: "https://www.nspira.in/img/Nspira-Logo-01.png"
    }
  ];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work Experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-end text-center items-center mx-auto content-div cursor-pointer bg-[#0d2138] hover:bg-[#183b5d] transition-colors duration-300"
              onClick={() => handleClick(project.github)}
            >
              <div className="w-full h-auto p-4" style={{ backgroundImage: `url(${project.logoUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', marginTop: '-1000px' }}></div>
              <div className="opacity-100 p-4">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.company}
                </span>
                <p className="text-gray-400 mt-2">{project.name}</p>
                <p className="text-gray-400 mt-2">{project.timeline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
