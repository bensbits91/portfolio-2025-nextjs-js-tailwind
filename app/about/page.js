import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { HeadingOne, SubtleText } from '@/app/components/typography';
import { about, expertise } from '@/app/data.js';

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
   return (
      <div>
         <HeroSection bigBottom={false}>
            <HeadingOne>About</HeadingOne>
         </HeroSection>
         <OneColumnSection>
            <p>{overview}</p>
         </OneColumnSection>
         <OneColumnSection>
         <SubtleText>{expertise.join(' | ')}</SubtleText>
         </OneColumnSection>
      </div>
   );
};

export default About;
