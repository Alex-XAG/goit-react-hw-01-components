import { TrItem, Td } from './Transactions.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TrItem>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TrItem>
  );
};
