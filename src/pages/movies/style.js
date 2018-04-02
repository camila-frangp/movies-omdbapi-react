import styled from 'styled-components';
import {background} from './../../util/colors';

const Container = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`
const Header = styled.div`
    order: 1;
    padding: 1%;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${background};
    height: 10%;
    width: 100%;
`
const LogoHeader = styled.div`
    padding-top: 10px;
    padding-left: 10px;
    flex-grow: 0;
    padding-right: 1%;
`
const SearchHeader = styled.div`
    flex-grow: 1;
    padding-right: 10px;
`

const Body = styled.div`
    order: 2;
    margin: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`


export {Container, Header, Body, LogoHeader, SearchHeader}

