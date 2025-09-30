import { DonutChart } from "./DonutChart";
import { chartsData } from "@/data/chartData";

export const Charts = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-4">
      {chartsData.map((chart) => (
        <DonutChart
          key={chart.title}
          title={chart.title}
          data={chart.data}
          colors={chart.colors}
        />
      ))}
    </div>
  );
};
