'use client';
import {
   PolarGrid,
   PolarAngleAxis,
   Radar,
   Legend,
   ResponsiveContainer,
   RadarChart,
   Tooltip
} from 'recharts';
import { skills } from '@/data/skills';

const sumRatingsByStackArea = skills.reduce(
   (acc: Record<string, { sumOfRating: number; count: number }>, skill) => {
      const { stackArea, rating } = skill;
      if (stackArea === undefined || rating === undefined) return acc;

      if (acc[stackArea]) {
         acc[stackArea].sumOfRating += rating;
         acc[stackArea].count += 1;
      } else {
         acc[stackArea] = { sumOfRating: rating, count: 1 };
      }
      return acc;
   },
   {}
);

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

const MyRadarChart = () => (
   <ResponsiveContainer
      width="100%"
      height="100%"
      minWidth={300}
      minHeight={300}>
      <RadarChart
         outerRadius={90}
         // width={730}
         data={stackAreaRatingsArray}>
         <PolarGrid />
         <PolarAngleAxis dataKey="stackArea" tick={{ fontSize: 12 }} />
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
