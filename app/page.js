import HomeCard from './components/home/HomeCard';
import { ProjectGridCard } from './components/projects';
import {
   HeroSection,
   OneColumnSection,
   TwoColumnSection,
   ThreeColumnSection
} from './components/layout';
import { HeadingOne, Subheading, WhisperText } from './components/typography';
import Button from '@/app/components/common/Button';
import { about, expertise, experience, homeSkills, homeProjects } from './data';

const Home = () => {
   return (
      <>
         <HeroSection>
            {/* <HeadingOne>
               Hi <div className="inline-block animate-spin-slow">:)</div> I'm
               Ben
            </HeadingOne> */}
            <HeadingOne>
               Bennett Brooks
            </HeadingOne>
            <Subheading shrink color='yellow'>{about.summary}</Subheading>
            <Button link='/about'>About Ben</Button>
            {/* <WhisperText>{expertise.join(' | ')}</WhisperText> */}
         </HeroSection>
         <OneColumnSection bigBottom>
            <HomeCard
               items={homeSkills}
               type="skill"
               heading="Top skills"
               buttonText="View all skills"
               link="/skills"
            />
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <HomeCard
               items={experience}
               type="experience"
               heading="Experience"
               buttonText="View detailed experience"
               link="/experience"
            />
         </OneColumnSection>
         {/* <TwoColumnSection
            columns={[
               {
                  content: (
                     <HomeCard
                        items={homeSkills}
                        type="skill"
                        heading="Top skills"
                        buttonText="View all skills"
                        link="/skills"
                     />
                  )
               },
               {
                  content: (
                     <HomeCard
                        items={experience}
                        type="experience"
                        heading="Experience"
                        buttonText="View detailed experience"
                        link="/experience"
                     />
                  )
               }
            ]}
         />
         <ThreeColumnSection
            heading="Sample projects"
            columns={[
               ...homeProjects.map(project => ({
                  content: <ProjectGridCard project={project} />
               })),
               { content: <Button link="/projects">View more projects</Button> }
            ]}
         /> */}
      </>
   );
};

export default Home;
