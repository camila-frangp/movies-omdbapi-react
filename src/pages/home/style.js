import styled from 'styled-components';
import { primaryColor, background, secondColor, white } from './../../util/colors';

const Container = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${background};
`;
const FormContainer = styled.form`
    width: 50%;
    display: flex;
    flex-flow: column wrap;
    text-align: center;
`;
const SearchInputContainer = styled.div`
    display: flex;
    flex: 1 1 1;
    margin-top: 60px;
`;
const SubmitContainer = styled(SearchInputContainer)`
    margin-top: 0;
    justify-content: center;
`
const SubmitButton = styled.button`
    width: 50%;
    padding: 10px;
    border: 2px solid ${primaryColor};
    background: transparent;
    border-radius: 28px;
    outline: none;
    margin-top: 30px;
    color: ${primaryColor};
    font-weight: bold;
    &:hover {
      background: ${secondColor};
      color: ${white};
      border: 2px solid transparent;
    }
`;

export { SubmitButton, Container, FormContainer, SearchInputContainer, SubmitContainer };

