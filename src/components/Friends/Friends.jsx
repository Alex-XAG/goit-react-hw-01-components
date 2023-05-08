import { PropTypes } from 'prop-types';
import { FriendsItem, Status, ImgAvatar, Name } from './Friends.styled';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsItem>
      <Status id={id} isOnline={isOnline}></Status>
      <ImgAvatar src={avatar} alt={name} width={48} height={48} />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
