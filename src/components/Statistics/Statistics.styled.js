import styled from '@emotion/styled';

export const StatisticSection = styled.section`
  width: 500px;
  margin: 20px auto;
  text-align: center;
  background-color: #fff;
  border: 1px solid #757575;
  box-shadow: #757575;
  border-radius: 5px;
`;

export const TitleStat = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #757575;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  border: 1px solid #757575;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Label = styled.span`
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;
