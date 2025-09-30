import { ChartData } from "../types/chartDataTypes";

export const chartsData: ChartData[] = [
  {
    title: "Total Loan Amount",
    data: [
      { name: "Loaned", value: 5000 },
      { name: "Remaining", value: 2000 },
    ],
  },
  {
    title: "Total Tokenized Amount",
    data: [
      { name: "Tokenized", value: 3000 },
      { name: "Not Tokenized", value: 7000 },
    ],
  },
  {
    title: "Total Invested Amount",
    data: [
      { name: "Invested", value: 4000 },
      { name: "Uninvested", value: 6000 },
    ],
  },
  {
    title: "Loan Performance",
    data: [
      { name: "Performing", value: 4500 },
      { name: "Defaulted", value: 1500 },
    ],
  },
];