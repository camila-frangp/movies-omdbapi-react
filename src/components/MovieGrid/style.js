import styled from 'styled-components';
import {blue} from './../../util/colors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 30%;
  grid-gap: 10px;
  justify-items: center;

`
const Item = styled.div`
  
  `


export {Container, Item}