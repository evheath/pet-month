import { PetData } from '@/utils/PetData';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

export function PetGraph({ data, pets }: { data: PetData[], pets: string }) {
  const petsInt = parseInt(pets);
  const indexOfInterest: number = petsInt > 6 ? 5 : petsInt - 1
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
        <Tooltip />
        <Bar dataKey="families">
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === indexOfInterest ? "#82ca9d" : "#8884d8"} />
            ))
          }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}