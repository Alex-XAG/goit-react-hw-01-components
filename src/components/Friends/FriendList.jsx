import { FriendItem } from '../Friends/Friends';
import friends from '../../friends';
import { FriendsList } from './Friends.styled';

export const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};
