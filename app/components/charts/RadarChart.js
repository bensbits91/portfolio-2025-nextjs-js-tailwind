// import dynamic from 'next/dynamic';
import {
   PolarGrid,
   PolarAngleAxis,
   // PolarRadiusAxis,
   Radar,
   Legend,
   ResponsiveContainer,
   RadarChart,
   Tooltip
} from 'recharts';
import { skills } from '@/app/data';

// todo: why is dynamic import not needed here? Will it be needed after I add Tooltip?
// const RadarChart = dynamic(
//    () => import('recharts').then(recharts => recharts.RadarChart),
//    { ssr: false }
// );

const sumRatingsByStackArea = skills.reduce((acc, skill) => {
   const { stackArea, rating } = skill;
   if (acc[stackArea]) {
      acc[stackArea].sumOfRating += rating;
      acc[stackArea].count += 1;
   } else {
      acc[stackArea] = { sumOfRating: rating, count: 1 };
   }
   return acc;
}, {});

const stackAreaRatingsArray = Object.keys(sumRatingsByStackArea).map(
   stackArea => ({
      stackArea,
      sumOfRatingInStackArea: sumRatingsByStackArea[stackArea].sumOfRating,
      countInStackArea: sumRatingsByStackArea[stackArea].count,
      avgRatingInStackArea:
         sumRatingsByStackArea[stackArea].sumOfRating /
         sumRatingsByStackArea[stackArea].count
   })
);

// const tickFormatter = (value, entry) => {
//    console.log('bb ~ entry:', entry);
//    console.log('bb ~ value:', value);
//    return value;
// };

// const CustomizedTick = ({ x, y, stroke, payload }) => {
//    console.log('bb ~ payload:', payload);
//    console.log('bb ~ y:', y);
//    console.log('bb ~ x:', x);
//    return (
//       <text
//          x={x}
//          y={y}
//         //  dy={-8}
//          fill="white"
//          fontSize={10}
//          textAnchor={x > 180 ? "end" : "start"}

//          width={100}>
//          {payload.value.split(' ').map((word, index) => <tspan key={index} x={x} dy={index * 10}>{word}</tspan>)}
//       </text>
//    );
// };

const MyRadarChart = () => (
   <ResponsiveContainer width="100%" height={350}>
      <RadarChart
         outerRadius={90}
         width={730}
         //  height={250}
         data={stackAreaRatingsArray}>
         <PolarGrid />
         <PolarAngleAxis dataKey="stackArea" tick={{ fontSize: 12 }} />
         {/* <PolarRadiusAxis angle={30} domain={[0, 100]} /> */}
         <Tooltip />
         <Radar
            name="Count"
            dataKey="countInStackArea"
            stroke="var(--bb-yellow)"
            fill="var(--bb-yellow)"
            fillOpacity={0.6}
         />
         <Radar
            name="Average Rating"
            dataKey="avgRatingInStackArea"
            stroke="var(--bb-jade)"
            fill="var(--bb-jade)"
            fillOpacity={0.6}
         />
         <Legend verticalAlign="top" />
      </RadarChart>
   </ResponsiveContainer>
);

export default MyRadarChart;
