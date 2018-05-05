import styled from 'styled-components';
import { white, grayTransparent, primaryColor } from './../../util/colors';

const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-items: center;
  flex-flow: row wrap;
  overflow: overlay;
  justify-content: center;
`;

const Item = styled.div`
  width: 100px;
  display: flex;
  position: relative;
  border: 1px solid ${white};
  &:hover {
    border: 1px solid ${primaryColor};
  }
  @media only screen and (min-width: 768px) {
      width: 150px;
  }
  @media only screen and (min-width: 992px) {
    width: 250px;
  }
  @media only screen and (min-width: 1200px) {
    width: 350px;
  }
  `;
const MovieCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

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
`;

const Text = styled.p`
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
  text-align: center;
`;

export { Container, Item, Description, MovieCover, Text };
