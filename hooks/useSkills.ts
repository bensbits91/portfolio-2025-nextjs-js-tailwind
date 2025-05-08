import { useState, useCallback } from 'react';
import { skillsForTable } from '@/data/skills';

const useSkills = () => {
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

   const skillsToPass = skillsForTable;

   return {
      selectedView,
      handleViewClick,
      selectedSkill,
      setSelectedSkill,
      skillsToPass,
      handleItemClick
   };
};

export default useSkills;
