import { Cards } from './Cards';
import { Charts } from './charts/Charts';
import { LoanTable } from './LoanTable';

export const Dashboard = () => {
  return (
    <>
      <Cards />
      <Charts />
      <LoanTable />
    </>
  );
};
