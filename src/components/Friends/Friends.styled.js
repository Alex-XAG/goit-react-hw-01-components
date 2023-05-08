import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  padding: 0;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FriendsItem = styled.li`
  display: flex;
  text-align: center;
  margin: 0;
  width: 100%;
  padding: 20px;
  border: 1px solid #757575;
  box-shadow: 2px 2px 2px 1px #757575;
  border-radius: 5px;
`;

const bgColor = ({ isOnline }) => (isOnline ? 'green' : 'red');

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${bgColor};
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
`;

export const ImgAvatar = styled.img`
  margin-right: 30px;
  border-radius: 10px;
  background-color: #757575;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
