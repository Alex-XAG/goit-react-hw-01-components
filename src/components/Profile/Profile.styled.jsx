import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  width: 300px;
  margin: 20px auto;
  text-align: center;
  background-color: #fff;
  box-shadow: 1px 1px 2px 2px #757575;
  border-radius: 5px;
`;

export const Description = styled.div`
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  height: 150px;
  margin-top: 20px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

export const TagLocation = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #a4a2a2;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #f0ecec;
  width: 100%;
  height: 80px;
  box-shadow: 1px 1px 1px 1px #757575;
  gap: 10px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #a4a2a2;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
