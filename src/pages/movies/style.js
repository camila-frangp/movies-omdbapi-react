import styled from 'styled-components';
import {background} from './../../util/colors';

const Container = styled.div `
    height: 100%;
    width: 100%;
`
const Header = styled.div`
    height: 20%;
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${background};
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
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`


export {Container, Header, Body, LogoHeader, SearchHeader}

