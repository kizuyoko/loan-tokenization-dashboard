import { Loan } from "@/types/loan";

export const mockLoans: Loan[] = [
  { id: 1, amount: 100000, tokenized: 60000, status: "Active" },
  { id: 2, amount: 500000, tokenized: 30000, status: "Expired" },
  { id: 3, amount: 750000, tokenized: 150000, status: "Active" },
  { id: 4, amount: 200000, tokenized: 50000, status: "Active" },
  { id: 5, amount: 300000, tokenized: 100000, status: "Expired" },
];