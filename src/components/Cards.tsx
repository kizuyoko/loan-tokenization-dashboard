"use client";
import { useState } from 'react';
import { Card } from './ui/Card';
import { Loan } from '@/types/loan';

interface CardsProps {
  loans: Loan[];
}

export const Cards: React.FC<CardsProps> = ({ loans }) => {
  const [mockData, setMockData] = useState({
    totalLoans: loans.reduce((acc, loan) => acc + loan.amount, 0),
    totalTokenized: loans.reduce((acc, loan) => acc + loan.tokenized, 0),
  });

  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <Card title="Total Loans">
        <p className='card-total'>€{mockData.totalLoans.toLocaleString()}</p>
      </Card>
      <Card title="Total Tokenized">
        <p className='card-total'>€{mockData.totalTokenized.toLocaleString()}</p>
      </Card>
    </div>
  );  
};
