"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

type DonutChartProps = {
  title: string;
  data: { name: string; value: number }[];
  colors?: string[];
};

export const DonutChart = ({ title, data, colors = ["#4CAF50", "#FF7043"] }: DonutChartProps) => {
  return (
    <div className="flex flex-col items-center w-full h-64">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};