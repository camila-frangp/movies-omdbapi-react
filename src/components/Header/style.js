import {background} from "../../util/colors";
import styled from "styled-components";

const Container = styled.div`
    order: 1;
    padding-top: 2%;
    padding-bottom: 2%;
    flex-direction: row;
    display: flex;
    align-items: center;
    background-color: ${background};
    height: 10%;
    width: 100%;
`
const LogoHeader = styled.div`
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 1%;
`
const SearchHeader = styled.div`
    width: 100%;
    padding-right: 10px;
`
export {Container, LogoHeader, SearchHeader}
