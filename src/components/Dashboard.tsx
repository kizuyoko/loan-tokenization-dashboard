"use client";
import { useState } from 'react';
import { Card } from './ui/Card';
import { Charts } from './charts/Charts';

export const Dashboard = () => {
  const [mockData, setMockData] = useState({
    totalLoans: 1000000,
    totalTokenized: 600000,
    totalInvested: 300000,
  });

  return (
    <>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        <Card title="Total Loans">
          <p>€{mockData.totalLoans.toLocaleString()}</p>
        </Card>
        <Card title="Total Tokenized">
          <p>€{mockData.totalTokenized.toLocaleString()}</p>
        </Card>
        <Card title="Total Invested">
          <p>€{mockData.totalInvested.toLocaleString()}</p>
        </Card>
      </div>
      <Charts />
    </>
  );
};
