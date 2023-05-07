import { PropTypes } from 'prop-types';
import { StatisticItem } from './StatisticItem';
import dataStats from '../../data';
import css from './Statistics.module.css';
import { StatisticSection, TitleStat, StatList } from './Statistics.styled';

const Statistics = ({ title = 'UPLOAD STATS' }) => {
  return (
    <StatisticSection>
      <TitleStat>{title}</TitleStat>
      <StatList>
        {dataStats.map(dataStat => (
          <StatisticItem
            key={dataStat.id}
            label={dataStat.label}
            percentage={dataStat.percentage}
          />
        ))}
      </StatList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
