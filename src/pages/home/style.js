import styled from 'styled-components';

const Container = styled.div `
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #e3f0ff;
`
const FormContainer = styled.form `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubmitButton = styled.button`
    width: 50%;
    padding: 10px;
    border: 2px solid #008bf6;
    background: transparent;
    border-radius: 28px;
    outline: none;
    margin-top: 30px;
    color: #008bf6;
    font-weight: bold;
    &:hover {
      background: #0894FF;
      color: #fff;
      border: 2px solid transparent;

    }
`

export {SubmitButton, Container, FormContainer}

