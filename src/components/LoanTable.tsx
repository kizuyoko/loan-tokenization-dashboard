import { Button } from "./ui/Button";
import { Loan } from "@/types/loan";

const TOKENIZE_STEP  = 10000;
interface LoanTableProps {
  loans: Loan[];
  setLoans: React.Dispatch<React.SetStateAction<Loan[]>>;
}

export const LoanTable: React.FC<LoanTableProps> = ({ loans, setLoans }) => {

  const handleExpire = (id: number) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.id === id ? { ...loan, status: "Expired" } : loan
      )
    );
  };

  const handleTokenize = (id: number) => {
    // Example logic: Increase tokenized amount by 10,000 on each tokenize action
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.id === id
          ? {
              ...loan,
              tokenized: Math.min(loan.tokenized + TOKENIZE_STEP , loan.amount),
              amount: Math.max(loan.amount - TOKENIZE_STEP , 0),
            }
          : loan
      )
    );
  };

  return (
    <div className="w-full p-4 dashboard-card">
      <h2 className="text-left">Loan Details</h2>
      <p>Each click on &quot;Tokenize&quot; will tokenize €{TOKENIZE_STEP .toLocaleString()} from the loan (until fully tokenized).</p>
      <table className="loan-table">
        <thead>
          <tr>
            <th><span className="mobile-hide">Loan </span>ID</th>
            <th>Amount (€)</th>
            <th>Tokenized (€)</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td className="text-right">{loan.id}</td>
              <td className="text-right">€{loan.amount.toLocaleString()}</td>
              <td className="text-right">€{loan.tokenized.toLocaleString()}</td>
              <td className={loan.status === "Active" ? "active" : "expired"}>
                {loan.status}
              </td>
            <td className="edit-cell">
              <Button 
                small 
                onClick={() => handleExpire(loan.id)} 
                disabled={loan.status === "Expired"}
              >
                Expire
              </Button>
              <Button 
                small 
                onClick={() => handleTokenize(loan.id)}
                disabled={loan.amount === 0 || loan.status === "Expired"}
              >
                Tokenize
              </Button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
};