import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1 Pet',
    pv: 2400,
  },
  {
    name: '2 Pets',
    pv: 1398,
  },
  {
    name: '3 Pets',
    pv: 9800,
  },
  {
    name: '4 Pets',
    pv: 3908,
  },
  {
    name: '5 Pets',
    pv: 4800,
  },
  {
    name: '6+ Pets',
    pv: 3800,
  },
];

export function Histogram() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}