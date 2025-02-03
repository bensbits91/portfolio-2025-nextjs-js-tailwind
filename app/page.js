import { getHomeSkills, about, expertise, experience } from './data';
import HomeCard from './components/HomeCard';

const Home = () => {
   const homeSkills = getHomeSkills();
   return (
      <>
         <div>Hi I'm Ben</div>
         <p className='text-sm text-center'>{about.overview}</p>
         <p className='text-sm text-center text-gray-400'>
            {expertise.join(' | ')}
         </p>
         <div className='grid grid-cols-2 gap-4 my-12'>
            <HomeCard
               items={homeSkills}
               type='skill'
               heading='Top skills'
               allText='View all skills'
               link='/skills'
            />
            <HomeCard
               items={experience}
               type='experience'
               heading='Professional experience'
               allText='View detailed experience'
               link='/experience'
            />
         </div>
         <div>Projects Mini Card</div>
         <div>Contact Mini Card</div>
      </>
   );
};

export default Home;
