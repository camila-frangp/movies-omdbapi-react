import IconSeach from '../../assets/search.svg';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;
const InputCustom = styled.input`
    padding-top: 10px;
    padding-bottom: 10px;
    text-indent: 35px;
    width: 100%;
    margin-bottom: 10px;
    background: #e8e8e8;
    border-radius: 28px;
    border-color: transparent;
    background-image: url(${IconSeach});
    background-repeat: no-repeat;
    background-position: 6px;
    box-shadow: 0 2px 5px;
    outline: none;
`;

export {Container, InputCustom};