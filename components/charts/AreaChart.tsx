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

import { skills } from '@/data/skills';

const skillsPerYear = skills.reduce(
   (acc: Record<number, { count: number; skills: string[] }>, skill) => {
      const { yearLearned } = skill;
      if (yearLearned === undefined) return acc;

      if (acc[yearLearned]) {
         acc[yearLearned].count++;
         acc[yearLearned].skills.push(skill.name);
      } else {
         acc[yearLearned] = { count: 1, skills: [skill.name] };
      }
      return acc;
   },
   {}
);

const skillsPerYearArray = Object.keys(skillsPerYear).map(year => ({
   year: parseInt(year, 10),
   countLearned: skillsPerYear[year as unknown as number].count,
   skillsLearned: skillsPerYear[year as unknown as number].skills
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

import { TooltipProps } from 'recharts';

const CustomizedTooltip = ({
   active,
   payload
}: TooltipProps<number, string>) => {
   if (!active) return null;

   const { year, countLearned, cumulativeCount, skillsLearned } =
      payload?.[0]?.payload;
   const skillList = (
      <ul className="list-inside list-disc">
         {skillsLearned.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
         ))}
      </ul>
   );
   return (
      <div className="border-bb-gray-700 rounded-md border bg-bb-gray-900 p-2 shadow-md">
         <p>{year}</p>
         <p>{countLearned} skills learned:</p>
         <div>{skillList}</div>
         <p>Total skills known: {cumulativeCount}</p>
      </div>
   );
};

const legendProcessor = (
   value: string,
   entry: {
      value: unknown;
      payload?: {
         strokeDasharray?: string | number;
         value?: unknown;
         label?: string;
      };
   }
): React.ReactNode => <span>{entry.payload?.label || value}</span>;

const myAreaChart = () => (
   <ResponsiveContainer width="100%" height={300}>
      <AreaChart
         width={730}
         height={250}
         data={skillsPerYearWithCumulative}
         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
         <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#f0be72" stopOpacity={0.8} />
               <stop offset="95%" stopColor="#f0be72" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#60af73" stopOpacity={0.8} />
               <stop offset="95%" stopColor="#60af73" stopOpacity={0} />
            </linearGradient>
         </defs>
         <XAxis dataKey="year" />
         <YAxis domain={['dataMin', 'dataMax']} />
         <CartesianGrid strokeDasharray="3 3" />
         <Tooltip content={<CustomizedTooltip />} />
         <Legend
            formatter={legendProcessor}
            verticalAlign="top"
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
         />
         <Area
            type="monotone"
            dataKey="countLearned"
            stroke="#60af73"
            fillOpacity={1}
            fill="url(#colorPv)"
            label="Learned"
         />
         <Area
            type="monotone"
            dataKey="cumulativeCount"
            stroke="#f0be72"
            fillOpacity={1}
            fill="url(#colorUv)"
            label="Total known"
         />
      </AreaChart>
   </ResponsiveContainer>
);

export default myAreaChart;
