'use client';
import dynamic from 'next/dynamic';
import {
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer
} from 'recharts';

// note to self: dynamic import required for recharts chart-level components to work with next.js
// todo: move all dynamic imports to a single file (import {AreaChart} from './dynamic')?
// todo: rename components and files to be specific to the data they represent (e.g. skillsByYear)
const AreaChart = dynamic(
   () => import('recharts').then(recharts => recharts.AreaChart),
   { ssr: false }
);

import { skills } from '@/app/data';

const skillsPerYear = skills.reduce((acc, skill) => {
   const { yearLearned } = skill;
   if (acc[yearLearned]) {
      acc[yearLearned].count++;
      acc[yearLearned].skills.push(skill.name);
   } else {
      acc[yearLearned] = { count: 1, skills: [skill.name] };
   }
   return acc;
}, {});

const skillsPerYearArray = Object.keys(skillsPerYear).map(year => ({
   year: parseInt(year, 10),
   countLearned: skillsPerYear[year].count,
   skillsLearned: skillsPerYear[year].skills
}));

// Calculate cumulative count
let cumulativeCount = 0;
const skillsPerYearWithCumulative = skillsPerYearArray.map(item => {
   cumulativeCount += item.countLearned;
   return {
      ...item,
      cumulativeCount
   };
});

const CustomizedTooltip = ({ active, payload, label }) => {
   if (!active) return null;

   const { year, countLearned, cumulativeCount, skillsLearned } =
      payload[0].payload;
   const skillList = (
      <ul className="list-inside list-disc">
         {skillsLearned.map((skill, index) => (
            <li key={index}>{skill}</li>
         ))}
      </ul>
   );
   return (
      <div className="rounded-md border border-[--bb-dark-gray-700] bg-[--bb-dark-gray-900] p-2 shadow-md">
         <p>{year}</p>
         <p>{countLearned} skills learned:</p>
         <div>{skillList}</div>
         <p>Total skills known: {cumulativeCount}</p>
      </div>
   );
};

const legendProcessor = (value, entry) => <span>{entry.payload.label}</span>;

const myAreaChart = () => (
   <ResponsiveContainer width="100%" height={500}>
      <AreaChart
         width={730}
         height={250}
         data={skillsPerYearWithCumulative}
         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
         <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
               <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
               <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
         </defs>
         <XAxis dataKey="year" />
         <YAxis />
         <CartesianGrid strokeDasharray="3 3" />
         <Tooltip content={<CustomizedTooltip />} />
         <Legend formatter={legendProcessor} />
         <Area
            type="monotone"
            dataKey="countLearned"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
            label="Learned this year"
         />
         <Area
            type="monotone"
            dataKey="cumulativeCount"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            label="Total known"
         />
      </AreaChart>
   </ResponsiveContainer>
);

export default myAreaChart;
