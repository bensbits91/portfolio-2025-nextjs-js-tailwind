'use client';
import dynamic from 'next/dynamic';
import { /* LineChart,  */ Line } from 'recharts';
const LineChart = dynamic(
   () => import('recharts').then(recharts => recharts.LineChart),
   { ssr: false }
);

const data = [
   { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
   { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
   { name: 'Page C', uv: 200, pv: 1398, amt: 2400 },
   { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
   { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
   { name: 'Page F', uv: 239, pv: 3800, amt: 2400 },
   { name: 'Page G', uv: 349, pv: 4300, amt: 2400 }
];

const MyChart = () => {
   return (
      <LineChart id="my-chart" width={400} height={400} data={data}>
         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
   );
};

export default MyChart;
