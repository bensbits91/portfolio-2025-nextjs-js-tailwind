import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { HeadingOne } from '@/app/components/typography';
import { SkillList } from '@/app/components/skills';

const Skills = () => {
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Skills</HeadingOne>
         </HeroSection>
         <OneColumnSection size="narrow">
            <SkillList />
         </OneColumnSection>
      </>
   );
};

export default Skills;
