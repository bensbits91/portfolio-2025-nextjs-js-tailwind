// 'use client';
// import { useState } from 'react';
import { duration } from '../utils.js';
import { experience } from '../data.js';

const Experience = () => {
   //   const [visible, setVisible] = useState([false, false, false, false]);
   //   const toggleVisibility = (index) => {
   //     setVisible((prevVisible) => {
   //       const newVisible = [...prevVisible];
   //       newVisible[index] = !newVisible[index];
   //       return newVisible;
   //     });
   //   };

   const Duty = ({ duty }) => {
      const { name, description } = duty;
      return (
         <li className="mb-2">
            <span className="font-bold">{name && `${name}: `}</span>
            <span className="text-xs">{description}</span>
         </li>
      );
   };

   const Duties = ({ duties }) => {
      return (
         <ul className="list-inside list-disc">
            {duties.map((duty, index) => (
               <Duty key={index} duty={duty} />
            ))}
         </ul>
      );
   };

   const JobHeader = ({ job }) => {
      const { company, role, start, end, location } = job;
      return (
         <div className="mb-4">
            <h2 className="text-3xl font-semibold">{role}</h2>
            <div className="flex-1">
               <span className="mr-4 text-lg font-semibold">
                  {company} in {location}
               </span>
               <span className="text-sm text-gray-500">
                  {duration(start, end)}
               </span>
            </div>
         </div>
      );
   };

   const Job = ({ job }) => {
      const { duties } = job;
      return (
         <div className="mb-4">
            <JobHeader job={job} />
            <Duties duties={duties} />
         </div>
      );
   };
   return (
      <div className="container mx-auto p-4">
         <h1 className="mb-4 text-2xl font-bold">Experience</h1>
         {experience.map((job, index) => (
            <Job key={index} job={job} />
         ))}
         {/* {['Experience One', 'Experience Two', 'Experience Three', 'Experience Four'].map(
        (title, index) => (
          <div key={index}>
            <h2
              className='text-xl font-semibold cursor-pointer'
              onClick={() => toggleVisibility(index)}>
              {title}
            </h2>
            <p
              className={`transition-all duration-500 ease-in-out ${
                visible[index] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
              This is the experience page
            </p>
          </div>
        )
      )} */}
      </div>
   );
};

export default Experience;
