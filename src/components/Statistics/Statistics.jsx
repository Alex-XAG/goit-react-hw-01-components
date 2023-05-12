import { PropTypes } from 'prop-types';
import { randomColor } from '../../constants';
import {
  StatisticSection,
  TitleStat,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, dataStats }) => {
  return (
    <StatisticSection>
      <TitleStat>{title}</TitleStat>
      <StatList>
        {dataStats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  dataStats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
