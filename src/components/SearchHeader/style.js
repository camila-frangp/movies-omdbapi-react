import { background } from '../../util/colors';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    background-color: ${background};
    flex: 1 1 0;
    padding-top: 10px;
    padding-bottom: 10px;
`;
const LogoHeader = styled.div`
    padding: 10px;
    display: flex;
    flex: 1 1 1;
`;
const Search = styled.div`
    display: flex;
    flex: 1 1 0;
`;
export { Container, LogoHeader, Search };
