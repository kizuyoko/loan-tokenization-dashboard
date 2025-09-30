import { DonutChart } from "./DonutChart";

export const Charts = () => {
  return (
    <DonutChart
      title="Tokenization Status"
      data={[
        { name: "Tokenized", value: 3000 },
        { name: "Not Tokenized", value: 7000 },
      ]}
      colors={["#4CAF50", "#FF7043"]}
    />
  );
};
