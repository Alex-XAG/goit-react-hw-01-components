import { TrHistory, Thead, TrItem, Td } from './Transactions.styled';
import PropTypes from 'prop-types';

export const TransactionList = ({ transactions }) => {
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
            <TrItem key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </TrItem>
          );
        })}
      </tbody>
    </TrHistory>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
