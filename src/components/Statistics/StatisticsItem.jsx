import { ListItem, SpanLabel } from './Statistics.styled';

const StatisticsItem = ({ item }) => {
  return (
    <ListItem>
      <SpanLabel>{item.label}</SpanLabel>
      <span>{item.percentage}</span>
    </ListItem>
  );
};

export default StatisticsItem;
