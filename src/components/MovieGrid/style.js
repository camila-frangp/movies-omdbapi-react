import styled from 'styled-components';
import {blue} from './../../util/colors';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: flex-start;
    flex-flow: row wrap;
`
const Item = styled.div`
  width: 20%;
  padding: 15px;
  background: ${blue}
  height: 40%;
  `


export {Container, Item}