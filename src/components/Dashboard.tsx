"use client";
import { Cards } from './Cards';
import { Charts } from './charts/Charts';
import { LoanTable } from './LoanTable';
import { useState } from "react";
import { mockLoans } from '@/data/mockLoans';

export const Dashboard = () => {
  const [loans, setLoans] = useState(mockLoans);

  return (
    <>
      <Cards loans={loans} />
      <Charts loans={loans} />
      <LoanTable loans={loans} setLoans={setLoans} />
    </>
  );
};
