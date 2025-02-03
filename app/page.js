import { about, expertise, experience, homeSkills, homeProjects } from './data';
import HomeCard from './components/HomeCard';
import { HeadingOne, Subheading, SubtleText } from './components/typography';

const Home = () => {
   return (
      <>
         <section className="py-32">
            <div className="container mx-auto max-w-[640px] px-8">
               <HeadingOne>Hi <div className='inline-block animate-spin-slow'>:)</div> I'm Ben</HeadingOne>
               <Subheading>{about.summary}</Subheading>
               <SubtleText>{expertise.join(' | ')}</SubtleText>
            </div>
         </section>
         <section className="container mx-auto grid max-w-[1200px] grid-cols-2 gap-12 overflow-hidden pb-32">
            <div className="pb-10">
               <HomeCard
                  items={homeSkills}
                  type="skill"
                  heading="Top skills"
                  allText="View all skills"
                  link="/skills"
               />
            </div>
            <div className="pb-10">
               <HomeCard
                  items={experience}
                  type="experience"
                  heading="Professional experience"
                  allText="View detailed experience"
                  link="/experience"
               />
            </div>
         </section>
         <section className="container mx-auto grid max-w-[1200px] grid-cols-2 gap-12 overflow-hidden pb-32">
            <div className="pb-10">
               <HomeCard
                  items={homeProjects}
                  type="project"
                  heading="Top projects"
                  allText="View all projects"
                  link="/projects"
               />
            </div>
            <div className="pb-10">
               <div>Contact Mini Card</div>
            </div>
         </section>
      </>
   );
};

export default Home;
