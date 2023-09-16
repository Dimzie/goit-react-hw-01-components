import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
  background-color: #e7ecf2;
  padding: 100px 0 100px 0;
`;

export const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  color: #122236;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-decoration: none;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  text-align: center;
  background-color: ${getRandomHexColor};
`;

export const SpanLabel = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #122236;
`;

export const SpanPerc = styled.span`
  margin-top: 10px;
  font-size: 16px;
  color: #122236;
`;
