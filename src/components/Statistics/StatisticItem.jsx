import { PropTypes } from 'prop-types';
import { Item, Label, Percentage } from './Statistics.styled';
import { getRandom } from '../../constants';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <Item
      style={{
        backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
          0,
          255
        )}, ${getRandom(0, 255)})`,
      }}
    >
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
