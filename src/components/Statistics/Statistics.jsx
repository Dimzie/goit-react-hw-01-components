import { Section, Title, Wrapper, List } from './Statistics.styled';
import StatisticsItem from './StatisticsItem';

const Statistics = ({data}) => {
  return (
    <Section>
      <Wrapper>
        <Title>Upload stats</Title>

        <List>
            {data.map(item => {
                return <StatisticsItem key={item.id} item={item} />;
            }
            )}
        </List>
      </Wrapper>
    </Section>
  );
};

export default Statistics;
