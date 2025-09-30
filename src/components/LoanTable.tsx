export const LoanTable = () => {
  return (
    <div className="w-full p-4 border rounded">
      <h2 className="text-left">Loan Details</h2>
      <table className="w-full mt-2 table-auto">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Amount (€)</th>
            <th>Tokenized (€)</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* Mock data rows */}
          <tr>
            <td>1</td>
            <td>€100,000</td>
            <td>€60,000</td>
            <td>Active</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );  
};