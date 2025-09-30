export const LoanTable = () => {
  return (
    <div className="w-full p-4 border rounded">
      <h2 className="text-left">Loan Details</h2>
      <table className="loan-table">
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
            <td className="text-right">1</td>
            <td className="text-right">€100,000</td>
            <td className="text-right">€60,000</td>
            <td className="text-center">Active</td>
            <td className="text-center">Edit</td>
          </tr>
          <tr>
            <td className="text-right">1</td>
            <td className="text-right">€100,000</td>
            <td className="text-right">€60,000</td>
            <td className="text-center">Active</td>
            <td className="text-center">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );  
};