import { about, expertise, experience, homeSkills, homeProjects } from './data';
import HomeCard from './components/HomeCard';

const Home = () => {
   return (
      <>
         <h1 className="mb-8 text-5xl">Hi I'm Ben</h1>
         <p className="mb-2 text-center text-xl">{about.summary}</p>
         <p className="mx-10 mb-10 text-center text-sm text-gray-400">
            {expertise.join(' | ')}
         </p>
         <div className="mb-6 grid grid-cols-2 gap-12">
            <HomeCard
               items={homeSkills}
               type="skill"
               heading="Top skills"
               allText="View all skills"
               link="/skills"
            />
            <HomeCard
               items={experience}
               type="experience"
               heading="Professional experience"
               allText="View detailed experience"
               link="/experience"
            />
         </div>
         <div className="mb-6 grid grid-cols-2 gap-12">
            <HomeCard
               items={homeProjects}
               type="project"
               heading="Top projects"
               allText="View all projects"
               link="/projects"
            />
            <div>Contact Mini Card</div>
         </div>
      </>
   );
};

export default Home;
