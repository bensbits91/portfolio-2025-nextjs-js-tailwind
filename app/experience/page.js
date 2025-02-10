import { useMemo } from 'react';
import { Job } from '@/app/components/experience';
import { CloudinaryImage } from '@/app/components/image';
import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { HeadingOne, SubtleText } from '@/app/components/typography';
import { experience } from '@/app/data.js';
// todo: make this <a> a reusable button component (need component/button folder and index.js)
// todo: icon library for common cloudinary images
const Experience = () => {
   const xp = useMemo(() => experience, []);
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Experience</HeadingOne>
         </HeroSection>
         <OneColumnSection size="normal" bigBottom>
            <div className="mb-4 lg:mb-12">
               <a
                  href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Bennett_Brooks_Resume_2025_eb9wr3.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-52 cursor-pointer rounded-sm border-2 border-[--bb-dark-gray-500] p-4 text-center font-roboto-sans text-sm tracking-wide text-[--bb-dark-gray] transition duration-700 hover:brightness-125">
                  <div className="flex items-center gap-2">
                     <CloudinaryImage
                        cloudinaryId="resume_o5rgfa"
                        alt="Resume"
                        width={30}
                        height={30}
                     />
                     <SubtleText>Download R&eacute;sum&eacute;</SubtleText>
                  </div>
               </a>
            </div>
         </OneColumnSection>
         {xp.map((job, index) => (
            <Job key={index} job={job} />
         ))}
      </>
   );
};

export default Experience;
