import HomeCard from './components/home/HomeCard';
import { HeroSection, TwoColumnSection } from './components/layout';
import { HeadingOne, Subheading, WhisperText } from './components/typography';
import { about, expertise, experience, homeSkills, homeProjects } from './data';

const Home = () => {
   return (
      <>
         <HeroSection>
            <HeadingOne>
               Hi <div className="animate-spin-slow inline-block">:)</div> I'm
               Ben
            </HeadingOne>
            <Subheading>{about.summary}</Subheading>
            <WhisperText>{expertise.join(' | ')}</WhisperText>
         </HeroSection>
         <TwoColumnSection
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
         <TwoColumnSection
            columns={[
               {
                  content: (
                     <HomeCard
                        items={homeProjects}
                        type="project"
                        heading="Sample projects"
                        headingColor="red"
                        buttonText="View more projects"
                        link="/projects"
                     />
                  )
               },
               {
                  content: <div>Contact Mini Card</div>
               }
            ]}
         />
      </>
   );
};

export default Home;
