import { HeroSection, OneColumnSection } from '@/app/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   Subheading,
   SubtleText
} from '@/app/components/typography';
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
                  <div key={index}>
                     <h3>
                        {degree} in {major}
                     </h3>
                     <h4>
                        {institution}, {location} {endYear}
                     </h4>
                     {awards.map((award, index) => {
                        return <p key={index}>{award}</p>;
                     })}
                  </div>
               );
            })}
         </div>
      </div>
   );

   const Certifications = ({ certifications }) => (
      <div>
         <div>
            {certifications.map((item, index) => {
               const { name, date } = item;
               return (
                  <div key={index}>
                     <h3>
                        {name} {date}
                     </h3>
                  </div>
               );
            })}
         </div>
      </div>
   );

   return (
      <div>
         <HeroSection bigBottom={false}>
            <HeadingOne>About</HeadingOne>
            <Subheading>
               {firstName} {lastName}
            </Subheading>
         </HeroSection>
         <OneColumnSection>
            <p>{overview}</p>
         </OneColumnSection>
         <OneColumnSection>
            <SubtleText>{expertise.join(' | ')}</SubtleText>
         </OneColumnSection>
         <OneColumnSection>
            <HeadingTwo>Education</HeadingTwo>
            <Education education={education} />
         </OneColumnSection>
         <OneColumnSection>
            <HeadingTwo>Certifications & Training</HeadingTwo>
            <Certifications certifications={certifications} />
         </OneColumnSection>
      </div>
   );
};

export default About;
