import dynamic from 'next/dynamic';
import {
   Bar,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   ResponsiveContainer,
   TooltipProps
} from 'recharts';
const BarChart = dynamic(
   () => import('recharts').then(recharts => recharts.BarChart),
   { ssr: false }
);

import { skills } from '@/app/data';

const CustomizedTooltip = ({
   active,
   payload
}: TooltipProps<number | string, string>) => {
   if (active) {
      const { name, years, rating } = payload?.[0]?.payload || {};
      return (
         <div className="custom-tooltip bg-bb-gray p-4">
            <p className="label">{`${name}`}</p>
            <p className="desc">Years: {years}</p>
            <p className="desc">Rating: {rating}</p>
         </div>
      );
   }

   return null;
};

const MyBarChart = () => (
   <ResponsiveContainer width="100%" height={1800}>
      <BarChart
         layout="vertical"
         width={1000}
         data={skills}
         barGap={5}
         barSize={10}>
         <Legend verticalAlign="top" />
         <XAxis dataKey="years" type="number" />
         <XAxis dataKey="rating" type="number" />
         <YAxis width={150} type="category" dataKey="name" />
         <Tooltip content={<CustomizedTooltip />} />
         <Bar dataKey="years" name="Years" fill="var(--bb-yellow)" />
         <Bar
            dataKey="rating"
            name="Self-assessed rating out of 10"
            fill="var(--bb-jade)"
         />
      </BarChart>
   </ResponsiveContainer>
);

export default MyBarChart;
