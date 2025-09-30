import { DonutChart } from "./DonutChart";
import { Loan } from "@/types/loan";

interface ChartsProps {
  loans: Loan[];
}

export const Charts: React.FC<ChartsProps> = ({ loans }) => {
  const totalLoan = loans.reduce((acc, loan) => acc + loan.amount, 0);
  const totalTokenized = loans.reduce((acc, loan) => acc + loan.tokenized, 0);
  
  // For simplicity, assuming totalInvested is equal to totalTokenized
  const totalInvested = totalTokenized;

  const chartsData = [
    {
      title: "Total Loan Amount",
      data: [
        { name: "Loaned", value: totalLoan - totalTokenized },
        { name: "Remaining", value: totalTokenized },
      ],
      colors: ["#4CAF50", "#FF7043"],
    },
    {
      title: "Total Tokenized Amount",
      data: [
        { name: "Tokenized", value: totalTokenized },
        { name: "Not Tokenized", value: totalLoan - totalTokenized },
      ],
      colors: ["#2196F3", "#FFC107"],
    },
    {
      title: "Total Invested Amount",
      data: [
        { name: "Invested", value: totalInvested },
        { name: "Uninvested", value: totalLoan - totalInvested },
      ],
      colors: ["#9C27B0", "#FF5722"],
    },
    {
      title: "Loan Performance",
      data: [
        { name: "Performing", value: loans.filter(l => l.status === "Active").length },
        { name: "Defaulted", value: loans.filter(l => l.status === "Expired").length },
      ],
      colors: ["#00BCD4", "#8BC34A"],
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 dashboard-card lg:grid-cols-4 sm:grid-cols-2">
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
