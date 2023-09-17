import { BodyTr } from "./TransactionsHistory.styled";

const TransactionsHistoryItem = ({transaction}) => {
  return (
    <BodyTr>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </BodyTr>
  )
}

export default TransactionsHistoryItem;