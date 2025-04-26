import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/typography';
import { PrimaryCta } from '@/components/common';
import { about, certifications, education, expertise } from '@/app/data.js';

// todo: move to components Education, Certification, About (ish)

const About = () => {
   const { overview } = about;

   interface EducationProps {
      education: {
         degree: string;
         major: string;
         institution: string;
         location: string;
         endYear: number;
         awards: string[];
      }[];
   }

   const Education = ({ education }: EducationProps) => (
      <div>
         <div>
            {education.map((item, index) => {
               const { degree, major, institution, location, endYear, awards } =
                  item;
               return (
                  <div key={index} className="mb-10">
                     <Heading level={3} appearance={4} color="white">
                        {degree} in {major}
                     </Heading>
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

   interface CertificationProps {
      certifications: {
         name: string;
         date: string;
      }[];
   }

   const Certifications = ({ certifications }: CertificationProps) => (
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
            <Heading bottom="md">About Bennett</Heading>
            <Text>{overview}</Text>
            <Text>{expertise.join(' | ')}</Text>
         </Section>
         <Section bottom="lg" width="sm">
            <Heading level={2} appearance={2} color="jade" bottom="md" b>
               Education
            </Heading>
            <Education education={education} />
         </Section>
         <Section bottom="lg" width="sm">
            <Heading level={2} appearance={2} color="jade" bottom="md" b>
               Certifications & Training
            </Heading>
            <Certifications certifications={certifications} />
         </Section>
         <PrimaryCta />
      </div>
   );
};

export default About;
