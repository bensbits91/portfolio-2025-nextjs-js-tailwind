'use client';
import { useState } from 'react';
import { Section } from '@/components/layout';
import { Heading } from '@/components/typography';
import { SkillList } from '@/components/skills';
import { BarChart, AreaChart, RadarChart } from '@/components/charts';
import { PrimaryCta } from '@/components/common';
import SkillsTable from '@/components/skills/SkillsTable';
import SkillsGrid from '@/components/skills/SkillsGrid';

/** todo:
 * move and rename components
 * make reusable chart components?
 * colors n stuff
 */
const Skills = () => {
   const [selectedView, setSelectedView] = useState('table');

   const navDefs = [
      { view: 'table', text: 'Table' },
      { view: 'grid', text: 'Grid' },
      // { view: 'list', text: 'List' },
      { view: 'stack', text: 'Stack coverage' },
      { view: 'growth', text: 'Growth by year' }
      // { view: 'rating', text: 'Rating & years' }
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
         <Section top="xl" bottom="sm" width="md">
            <Heading bottom="lg">Skills</Heading>
         </Section>
         <Section bottom="lg" width="md">
            <Nav />
            <div className="pt-4">
               {selectedView === 'table' && (
                  <SkillsTable handleItemClick={() => console.log('asdf')} />
               )}
               {selectedView === 'grid' && (
                  <SkillsGrid handleItemClick={() => console.log('asdf')} />
               )}
               {selectedView === 'list' && <SkillList />}
               {selectedView === 'rating' && <BarChart />}
               {selectedView === 'growth' && <AreaChart />}
               {selectedView === 'stack' && <RadarChart />}
            </div>
         </Section>
         <PrimaryCta />
      </>
   );
};

export default Skills;
