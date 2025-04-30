'use client';
import { useState, useCallback } from 'react';
import { Section } from '@/components/layout';
import { Heading } from '@/components/typography';
import { AreaChart, RadarChart } from '@/components/charts';
import { PrimaryCta } from '@/components/common';
import {
   SkillsTable,
   SkillsGrid,
   SkillsToolbar,
   SkillModal
} from '@/components/skills';
import { skillsForTable } from '@/data/skills';

const Skills = () => {
   const [selectedView, setSelectedView] = useState<
      'table' | 'grid' | 'growth' | 'stack'
   >('grid');
   const handleViewClick = useCallback(
      (newView: 'table' | 'grid' | 'growth' | 'stack') => {
         setSelectedView(newView);
      },
      []
   );

   const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

   const handleItemClick = useCallback((skillName: string) => {
      setSelectedSkill(skillName);
   }, []);

   return (
      <>
         <Section top="xl" bottom="sm" width="md">
            <Heading bottom="lg">Skills</Heading>
            <SkillsToolbar
               handleViewClick={handleViewClick}
               selectedView={selectedView}
            />
         </Section>
         <Section bottom="lg" width="md">
            <div className="pt-4">
               {selectedView === 'table' && (
                  <SkillsTable
                     skills={skillsForTable}
                     handleItemClick={handleItemClick}
                  />
               )}
               {selectedView === 'grid' && (
                  <SkillsGrid
                     skills={skillsForTable}
                     handleItemClick={handleItemClick}
                  />
               )}
               {selectedView === 'growth' && <AreaChart />}
               {selectedView === 'stack' && <RadarChart />}
            </div>
         </Section>
         <PrimaryCta />
         <SkillModal
            skill={
               selectedSkill
                  ? skillsForTable.find(skill => skill.name === selectedSkill)
                  : null
            }
            isOpen={!!selectedSkill}
            onOpenChange={open => {
               if (!open) {
                  setSelectedSkill(null);
               }
            }}
         />
      </>
   );
};

export default Skills;
