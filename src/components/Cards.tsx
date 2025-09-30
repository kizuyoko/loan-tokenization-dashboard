"use client";
import { useState } from 'react';
import { Card } from './ui/Card';

export const Cards = () => {
  const [mockData, setMockData] = useState({
    totalLoans: 1000000,
    totalTokenized: 600000,
  });

  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <Card title="Total Loans">
        <p>€{mockData.totalLoans.toLocaleString()}</p>
      </Card>
      <Card title="Total Tokenized">
        <p>€{mockData.totalTokenized.toLocaleString()}</p>
      </Card>
    </div>
  );
};
