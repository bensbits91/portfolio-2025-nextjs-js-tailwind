import { Section } from '@/app/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   Text
} from '@/app/components/typography';
import { PrimaryCta } from '@/app/components/common';
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
                     <HeadingThree color="white">
                        {degree} in {major}
                     </HeadingThree>
                     <h4>{institution}</h4>
                     <p className="mb-4">
                        {location} {endYear}
                     </p>
                     <ul className="list-outisde list-disc pl-4">
                        {awards.map((award, index) => {
                           return (
                              <li key={index} className="pl-2">
                                 {award}
                              </li>
                           );
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
         <Section top="xl" bottom="lg" width="sm">
            <HeadingOne>About Bennett</HeadingOne>
            <Text>{overview}</Text>
            <Text>{expertise.join(' | ')}</Text>
         </Section>
         <Section bottom="lg" width="sm">
            <HeadingTwo>Education</HeadingTwo>
            <Education education={education} />
         </Section>
         <Section bottom="lg" width="sm">
            <HeadingTwo>Certifications & Training</HeadingTwo>
            <Certifications certifications={certifications} />
         </Section>
         <PrimaryCta />
      </div>
   );
};

export default About;
