export type Loan = {
  id: number;
  amount: number; // Total loan amount
  tokenized: number; // Amount that has been tokenized
  status: "Active" | "Expired"; // Loan status
};