'use client';
import DataTable from '../components/Table';
import { skillsForTable } from '../data.js';
import columns from './columns.js';

const Skills = () => {
   return (
      <>
         <h1>Skills</h1>
         <DataTable columns={columns} data={skillsForTable} />
      </>
   );
};

export default Skills;
