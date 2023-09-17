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
