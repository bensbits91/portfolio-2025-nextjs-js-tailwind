import { about, expertise, experience, homeSkills, homeProjects } from './data';
import HomeCard from './components/HomeCard';
import { HeadingOne, Subheading, SubtleText } from './components/typography';
import { HeroSection, TwoColumnSection } from './components/layout';

const Home = () => {
   return (
      <>
         <HeroSection>
            <HeadingOne>
               Hi <div className="animate-spin-slow inline-block">:)</div> I'm
               Ben
            </HeadingOne>
            <Subheading>{about.summary}</Subheading>
            <SubtleText>{expertise.join(' | ')}</SubtleText>
         </HeroSection>
         <TwoColumnSection
            columns={[
               // note to self: this is more complex but allows the column classes to be reused; reconsider when less tired
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
                        heading="Professional experience"
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
