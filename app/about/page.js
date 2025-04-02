import { HeroSection, OneColumnSection } from '@/app/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   Subheading,
   SubtleText
} from '@/app/components/typography';
import { Cta } from '@/app/components/common';
import { about, certifications, education, expertise } from '@/app/data.js';

// todo: move to components Education, Certification, About (ish)

const About = () => {
   const {
      overview,
      firstName,
      lastName,
      location,
      preferredName,
      title,
      otherTitles
   } = about;

   const Education = ({ education }) => (
      <div>
         <div>
            {education.map((item, index) => {
               const {
                  degree,
                  major,
                  institution,
                  location,
                  startYear,
                  endYear,
                  awards
               } = item;
               return (
                  <div key={index} className="mb-10">
                     <HeadingThree>
                        {degree} in {major}
                     </HeadingThree>
                     <h4>
                        {institution}
                     </h4>
                     <p className='mb-4'>
                        {location} {endYear}
                     </p>
                     <ul className="list-outisde list-disc pl-4">
                        {awards.map((award, index) => {
                           return <li key={index} className="pl-2">{award}</li>;
                        })}
                     </ul>
                  </div>
               );
            })}
         </div>
      </div>
   );

   const Certifications = ({ certifications }) => (
      <div>
         <ul className="list-outisde list-disc pl-4">
            {certifications.map((item, index) => {
               const { name, date } = item;
               return (
                  <li key={index} className="pl-2">
                     {name} {date}
                  </li>
               );
            })}
         </ul>
      </div>
   );

   return (
      <div>
         <HeroSection bigBottom={false}>
            <HeadingOne>About Bennett</HeadingOne>
            {/* <Subheading left>
               {firstName} {lastName}
            </Subheading> */}
         </HeroSection>
         <OneColumnSection>
            <p>{overview}</p>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <SubtleText>{expertise.join(' | ')}</SubtleText>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <HeadingTwo>Education</HeadingTwo>
            <Education education={education} />
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <HeadingTwo>Certifications & Training</HeadingTwo>
            <Certifications certifications={certifications} />
         </OneColumnSection>
         <Cta
            data={{
               heading: 'Looking for a solid engineer?',
               layout: 'Cta',
               content: ["Let's chat and see if I can help."],
               link: {
                  href: '/contact',
                  text: "Let's connect!"
               }
            }}
            bg="teal"
         />
      </div>
   );
};

export default About;
