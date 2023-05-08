import { TransactionItem } from './TransactionItem';
import transactions from '../../transactions';
import { TrHistory, Thead } from './Transactions.styled';

export const TransactionList = () => {
  return (
    <TrHistory>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {transactions.map(({ type, amount, currency, id }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </TrHistory>
  );
};
