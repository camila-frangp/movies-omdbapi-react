import styled from 'styled-components';

const Container = styled.div `
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #e3f0ff;

    `
const ChildFirst = styled.div`
    padding-top: 10px;
    padding-left: 10px;
    flex-grow: 0;
    padding-right: 1%;
`
const ChildSecond = styled.div`
    flex-grow: 1;
`

export {Container, ChildFirst, ChildSecond};