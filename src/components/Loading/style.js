import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
        left:0;
    background-color: rgba(0,0,0,0.2);
    z-index: 999;
    text-align:center;
`

const Loader = styled.div`
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    top: 40%;
    left: 45%;
    width: 120px;
    height: 120px;
    position: absolute;
    animation: spin 2s linear infinite;
`

export {Loader, Container}