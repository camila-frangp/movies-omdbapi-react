import IconSeach from '../../assets/search.svg';
import styled from 'styled-components';
import { gray, white } from './../../util/colors';

const Container = styled.div`
    display: flex;
    flex: 1 1 0;
    border: 1px green solid;
`;
const InputCustom = styled.input`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-indent: 35px;
    background: ${white};
    border-radius: 28px;
    border-color: transparent;
    background-image: url(${IconSeach});
    background-repeat: no-repeat;
    background-position: 6px;
    box-shadow: 0 2px 5px;
    outline: none;
    &:hover{
      background: ${gray};
      background-image: url(${IconSeach});
      background-repeat: no-repeat;
      background-position: 6px;
    }
   
`;

export { Container, InputCustom };
