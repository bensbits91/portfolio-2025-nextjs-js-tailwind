'use client';
import { useMemo } from 'react';
import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { HeadingOne } from '@/app/components/typography';
import DataTable from '@/app/components/common/Table';
import { skillsForTable } from '@/app/data.js';
import columns from './columns.js';

const Skills = () => {
   const cols = useMemo(() => columns, []);
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Skills</HeadingOne>
         </HeroSection>
         <OneColumnSection size='narrow'>
            <DataTable columns={cols} data={skillsForTable} />
         </OneColumnSection>
      </>
   );
};

export default Skills;
