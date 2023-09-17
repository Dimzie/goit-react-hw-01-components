import styled from 'styled-components';

export const TableSection = styled.section`
  padding: 100px 0px;
`;

export const Table = styled.table`
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  width: 800px;
`;

export const Thead = styled.thead`
  background-color: aqua;
`;

export const BodyTr = styled.tr`
  &:nth-last-of-type(even) {
    background-color: lightgrey;
  }
`;