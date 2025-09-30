"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

type DonutChartProps = {
  title: string;
  data: { name: string; value: number }[];
  colors?: string[];
};

export const DonutChart = ({ title, data, colors = ["#4CAF50", "#FF7043"] }: DonutChartProps) => {
  return (
    <div className="flex flex-col items-center w-full h-80">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
              name,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius =
                (innerRadius as number) +
                ((outerRadius as number) - (innerRadius as number)) * 0.5;
              const x =
                (cx as number) +
                radius * Math.cos(-(midAngle as number) * RADIAN);
              const yOffset = index === 0 ? -70 : 70; // Adjust vertical position based on slice index
              const y =
                (cy as number) +
                radius * Math.sin(-(midAngle as number) * RADIAN) +
                yOffset;
              return (
                <text
                  x={x}
                  y={y}
                  fill="black"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {`${name} ${((percent as number) * 100).toFixed(0)}%`}
                </text>
              );
            }}
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