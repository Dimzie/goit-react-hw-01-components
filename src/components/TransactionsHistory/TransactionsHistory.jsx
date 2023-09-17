import { Thead, Table, TableSection } from './TransactionsHistory.styled';
import TransactionsHistoryItem from './TransactionsHistoryItem';

const TransactionsHistory = ({ transactions }) => {
  return (
    <TableSection>
      <Table>
        <Thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </Thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <TransactionsHistoryItem
                key={transaction.id}
                transaction={transaction}
              />
            );
          })}
        </tbody>
      </Table>
    </TableSection>
  );
};

export default TransactionsHistory;

/* <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> */
