'use client';
import { useState } from 'react';
import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { HeadingOne, SubtleText } from '@/app/components/typography';
import { SkillList } from '@/app/components/skills';
import { BarChart, AreaChart, RadarChart } from '@/app/components/charts';
import { Cta } from '@/app/components/common';
/** todo:
 * move and rename components
 * make reusable chart components?
 * colors n stuff
 */
const Skills = () => {
   const [selectedView, setSelectedView] = useState('list');

   const navDefs = [
      { view: 'list', text: 'List' },
      { view: 'rating', text: 'Rating & years' },
      { view: 'growth', text: 'Growth by year' },
      { view: 'stack', text: 'Stack coverage' }
   ];

   const Nav = () => (
      <div className="flex justify-center space-x-4 border-b border-b-bb-teal">
         {navDefs.map(({ view, text }) => {
            const isSelected = selectedView === view;
            return (
               <button
                  key={view}
                  className={`rounded-t-md border-l border-r border-t border-bb-teal p-2 text-center font-roboto-sans text-xs tracking-wide sm:text-sm ${
                     isSelected ? 'bg-bb-teal text-bb-gray' : 'text-bb-teal'
                  } hover-delay hover-brightness`}
                  onClick={() => setSelectedView(view)}>
                  {text}
               </button>
            );
         })}
      </div>
   );

   return (
      <>
         <HeroSection bigBottom={false} size="narrow">
            <HeadingOne>Skills</HeadingOne>
            <SubtleText>
               The different views are hydrated by the same JSON data
            </SubtleText>
         </HeroSection>
         <OneColumnSection size="narrow" bigBottom>
            <Nav />
            <div className="pt-4">
               {selectedView === 'list' && <SkillList />}
               {selectedView === 'rating' && <BarChart />}
               {selectedView === 'growth' && <AreaChart />}
               {selectedView === 'stack' && <RadarChart />}
            </div>
         </OneColumnSection>
         <Cta
            data={{
               heading: 'Looking for a skillful developer?',
               layout: 'Cta',
               content: ["Let's chat and see if I can help."],
               link: {
                  href: '/contact',
                  text: "Let's connect!"
               }
            }}
            bg="teal"
         />
      </>
   );
};

export default Skills;
