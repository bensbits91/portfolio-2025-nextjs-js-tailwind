import { useMemo } from 'react';
import { Job } from '@/app/components/experience';
import { CloudinaryImage } from '@/app/components/image';
import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { HeadingOne, SubtleText } from '@/app/components/typography';
import { Cta } from '@/app/components/common';
import { experience } from '@/app/data.js';
// todo: make this <a> a reusable button component (need component/button folder and index.js)
// todo: icon library for common cloudinary images
const Experience = () => {
   const xp = useMemo(() => experience, []);
   return (
      <>
         <HeroSection bigBottom={false} size="normal">
            <HeadingOne textCenter={false}>Experience</HeadingOne>
         </HeroSection>
         <OneColumnSection size="normal">
            <div className="mb-8 lg:mb-12">
               <a
                  href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_z4r3vi.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-delay hover-brightness block w-52 rounded-sm border-2 border-transparent text-sm tracking-wide text-bb-teal">
                  <div className="flex items-center gap-2">
                     <CloudinaryImage
                        cloudinaryId="resume_o5rgfa"
                        alt="Resume"
                        width={20}
                        height={20}
                     />
                     <p>Download R&eacute;sum&eacute;</p>
                  </div>
               </a>
            </div>
         </OneColumnSection>
         {xp.map((job, index) => (
            <Job key={index} job={job} />
         ))}
         <Cta
            data={{
               heading: 'Need help?',
               layout: 'Cta',
               content: ["Let's chat and see if I can help."],
               link: {
                  href: '/contact',
                  text: "Let's connect!"
               }
            }}
            bg="teal"
         />
      </>
   );
};

export default Experience;
