import styled from 'styled-components';
import {primaryColor, primaryGray, secondGray, white} from './../../../util/colors';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${secondGray}
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  `
const Page = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${white}
`

const Header = styled.div`
   width: 100%;
   background: ${primaryGray}
   color: ${white}
`
const Cover = styled.div`
  object-fit: cover;
  object-position: center;
  `
const Description = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
  font-size: x-large;
`
const Title = styled.div`
  padding-left: 20px;
  margin-bottom: 5px;
  margin-top: 1%;
`
const Name = styled.a`
   text-align: center;
   color: ${primaryColor}
   font-size: xx-large;
`
const Year = styled.a`
   font-size: x-large;
`
const TextSmall = styled.span`
   font-size: large;
   margin-left: 20px;
`
const LineRateImdb = styled.div`
   margin-left: 20px;
   margin-bottom: 1%;
   margin-top: 1%;
   font-size: large;

`

const MetascoreContainer = styled.div`
  display: inline-block;
  margin-left: 80px;
`
const MetascoreLabel = styled.span`
   background-color: #61c74f;
   color: ${white};
   padding: 1px 4px;
   vertical-align: baseline;

`
const Plot = styled.p`
  line-height: 25px;
  padding-right: 10px;
  margin-bottom: 0;
`
const Awards = styled.div`
  background: ${primaryColor}
  width: 100%;
  color: ${white}
`

export {
  Container,
  Cover,
  Description,
  Title,
  Name,
  Year,
  TextSmall,
  LineRateImdb,
  MetascoreContainer,
  MetascoreLabel,
  Plot,
  Awards,
  Root,
  Page,
  Header
}