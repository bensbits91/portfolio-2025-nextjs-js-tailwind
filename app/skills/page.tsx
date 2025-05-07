'use client';
import useSkills from '@/hooks/useSkills';
import { Section } from '@/components/layout';
import { Heading } from '@/components/typography';
import { PrimaryCta } from '@/components/common';
import {
   SkillsTable,
   SkillsGrid,
   SkillsByYear,
   SkillsByStack,
   SkillsToolbar,
   SkillModal
} from '@/components/skills';

const Skills = () => {
   const {
      selectedView,
      handleViewClick,
      selectedSkill,
      setSelectedSkill,
      skillsToPass,
      handleItemClick
   } = useSkills();

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
                     skills={skillsToPass}
                     handleItemClick={handleItemClick}
                  />
               )}
               {selectedView === 'grid' && (
                  <SkillsGrid
                     skills={skillsToPass}
                     handleItemClick={handleItemClick}
                  />
               )}
               {selectedView === 'growth' && <SkillsByYear />}
               {selectedView === 'stack' && <SkillsByStack />}
            </div>
         </Section>
         <PrimaryCta />
         <SkillModal
            skill={
               selectedSkill
                  ? skillsToPass.find(skill => skill.name === selectedSkill)
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
