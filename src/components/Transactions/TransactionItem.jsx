import { TrItem, Td } from './Transactions.styled';
import PropTypes from 'prop-types';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TrItem>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TrItem>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string,
  currency: PropTypes.string.isRequired,
};
