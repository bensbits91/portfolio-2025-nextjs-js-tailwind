'use client';
import dynamic from 'next/dynamic';
import {
   Bar,
   XAxis,
   YAxis,
//    CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer
} from 'recharts';
const BarChart = dynamic(
   () => import('recharts').then(recharts => recharts.BarChart),
   { ssr: false }
);

import { skills } from '@/app/data';

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

const CustomizedTick = ({ x, y, stroke, payload }) => {
   //    console.log('bb ~ payload:', payload); // todo: show icon
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
