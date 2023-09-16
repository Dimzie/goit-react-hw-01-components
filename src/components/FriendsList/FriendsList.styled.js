import styled from 'styled-components';

export const Section = styled.section`
    padding: 100px 0px;
`

export const List = styled.ul`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    height: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const SpanStatus = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.selected ? 'green' : 'red'};
`

export const Img = styled.img`
    width: 60px;
    height: 60px;
`

export const ItemName = styled.p`
    font-size: 32px;
    font-weight: 700;
    color: #122236;
`