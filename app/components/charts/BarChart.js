'use client';
import dynamic from 'next/dynamic';
import {
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer
} from 'recharts';
const BarChart = dynamic(
   () => import('recharts').then(recharts => recharts.BarChart),
   { ssr: false }
);

import { skills } from '@/app/data';
console.log('bb ~ skills:', skills);

// const data = [
//    {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400
//    },
//    {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398
//    },
//    {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800
//    },
//    {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908
//    },
//    {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800
//    },
//    {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800
//    },
//    {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300
//    }
// ];

const CustomizedTooltip = ({ active, payload, label }) => {
   if (active) {
      const { name, years, rating } = payload[0].payload;
      return (
         <div className="custom-tooltip bg-[--bb-dark-gray] p-4">
            <p className="label">{`${name}`}</p>
            <p className="desc">Years: {years}</p>
            <p className="desc">Rating: {rating}</p>
         </div>
      );
   }

   return null;
};

const CustomizedLabel = ({ x, y, stroke, value }) => {
   return (
      <text x={x} y={y} dy={-4} fill="white" fontSize={12} textAnchor="middle">
         asdf {value}
      </text>
   );
};

const CustomizedTick = ({ x, y, stroke, payload }) => {
   console.log('bb ~ payload:', payload); // todo: can we show the icon here?
   return (
      <text x={x} y={y} dy={16} fill="white" fontSize={12} textAnchor="middle">
         {payload.value}
      </text>
   );
};

const MyBarChart = () => (
   <ResponsiveContainer width="100%" height={2500}>
      <BarChart
         layout="vertical"
         width={1000}
         height={1500}
         data={skills}
         barGap={140}
         barSize={100}>
         {/* <CartesianGrid strokeDasharray="3 3" /> */}
         <Legend verticalAlign="top" />
         <XAxis dataKey="years" type="number" />
         <XAxis dataKey="rating" type="number" />
         <YAxis
            width={300}
            type="category"
            dataKey="name"
            tick={<CustomizedTick />}
         />
         <Tooltip content={<CustomizedTooltip />} />
         <Bar dataKey="years" fill="var(--bb-yellow)" />
         <Bar
            dataKey="rating"
            name="Self-assessed rating out of 10"
            fill="var(--bb-teal)"
         />
      </BarChart>
   </ResponsiveContainer>
);

export default MyBarChart;
