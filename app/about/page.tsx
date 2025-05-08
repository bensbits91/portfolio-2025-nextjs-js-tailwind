import { Section } from '@/components/layout';
import { Heading, Text, List } from '@/components/typography';
import { PrimaryCta } from '@/components/common';
import { about, certifications, education, expertise } from '@/data/about';

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
                     <Heading level={4} appearance={6} color="white">
                        {institution}
                     </Heading>
                     <p className="mb-4">
                        {location} <span className="sr-only">Graduated in </span>{endYear}
                     </p>
                     <List items={awards} bottom="sm" size="sm" />
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
         <List
            items={certifications.map(c => `${c.name} ${c.date}`)}
            bottom="sm"
            size="sm"
         />
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
            <Heading level={2} appearance={2} color="secondary" bottom="md">
               Education
            </Heading>
            <Education education={education} />
         </Section>
         <Section bottom="lg" width="sm">
            <Heading level={2} appearance={2} color="secondary" bottom="md">
               Certifications & Training
            </Heading>
            <Certifications certifications={certifications} />
         </Section>
         <PrimaryCta />
      </div>
   );
};

export default About;
