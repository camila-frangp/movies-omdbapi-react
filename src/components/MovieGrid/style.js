import styled from 'styled-components';
import {primaryColor, grayTransparent} from './../../util/colors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 30%;
  width: 100%;
  height: 100%;
  grid-gap: 10px;
  justify-items: center;
`

const Item = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    transition-delay: .2s;
		width: 70%;
		height: 100%;
    border: 1px solid ${primaryColor};
    transform: translateY(1%) translateX(0%);
		transition-duration: 1s;
  }
  `
const MovieCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const Description = styled.div`
  position: absolute;
  color: black;
  font-weight: bold;
  font-size: large;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  opacity: 0;
  &:hover {
    background: ${grayTransparent};
    opacity: 1;
    
  }
`

const Text = styled.p`
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
  text-align: center;
`

export {Container, Item, Description, MovieCover, Text}