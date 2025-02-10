'use client';
import { useState } from 'react';
import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { HeadingOne, SubtleText } from '@/app/components/typography';
import { SkillList } from '@/app/components/skills';
import { BarChart, AreaChart, RadarChart } from '@/app/components/charts';
/** todo:
 * move and rename components
 * make reusable chart components?
 * colors n stuff
 */
const Skills = () => {
   const [selectedView, setSelectedView] = useState('list');

   const navDefs = [
      { view: 'list', text: 'All skills' },
      { view: 'rating', text: 'Skill by rating/years' },
      { view: 'years', text: 'Growth by year' },
      { view: 'stack', text: 'Stack coverage' }
   ];

   const Nav = () => (
      <div className="flex justify-center space-x-4">
         {navDefs.map(({ view, text }) => {
            const isSelected = selectedView === view;
            return (
               <button
                  key={view}
                  className={`cursor-pointer rounded-t-md border-t border-l border-r border-[--bb-teal] p-2 text-center font-roboto-sans text-sm tracking-wide ${
                     isSelected
                        ? 'bg-[--bb-teal] text-[--bb-dark-gray]'
                        : 'text-[--bb-teal]'
                  } transition duration-700 hover:brightness-125`}
                  onClick={() => setSelectedView(view)}>
                  {text}
               </button>
            );
         })}
      </div>
   );

   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Skills</HeadingOne>
            <SubtleText textCenter>
               The different views are hydrated by the same JSON data
            </SubtleText>
         </HeroSection>
         <OneColumnSection size="narrow">
            <Nav />
            <div className="pt-4 border-t border-[--bb-teal]">
               {selectedView === 'list' && <SkillList />}
               {selectedView === 'rating' && <BarChart />}
               {selectedView === 'years' && <AreaChart />}
               {selectedView === 'stack' && <RadarChart />}
            </div>
         </OneColumnSection>
      </>
   );
};

export default Skills;
