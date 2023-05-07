import { PropTypes } from 'prop-types';
import {
  ProfileBox,
  Description,
  Avatar,
  UserName,
  TagLocation,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  url,
  userName,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileBox>
      <Description>
        <Avatar src={url} alt={userName} />
        <UserName>{userName}</UserName>
        <TagLocation>{`@${tag}`}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileBox>
  );
};

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
