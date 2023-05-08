import styled from '@emotion/styled';

export const TrItem = styled.tr`
  width: 100%;
  height: 35px;

  &:nth-of-type(2n) {
    background-color: #cac5c5;
  }
`;

export const Td = styled.td`
  font-family: 'Franklin Gothic Medium';
  font-weight: 400;
`;

export const TrHistory = styled.table`
  list-style: none;
  width: 500px;
  margin: 20px auto;
  text-align: center;
  background-color: #fff;
  border: 1px solid #757575;
  box-shadow: #757575;
  border-radius: 5px;
`;

export const Thead = styled.thead`
  height: 35px;
  background-color: #95df60;
`;

export const Th = styled.thead`
  font-family: 'Franklin Gothic Medium';
  font-size: large;
  font-weight: 700;
`;
