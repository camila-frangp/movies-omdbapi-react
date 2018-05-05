import styled from 'styled-components';
import {
  primaryColor,
  primaryGray,
  secondGray,
  white,
} from './../../../util/colors';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${secondGray}
`;
const RootSecond = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  flex: 1 1 0;
  width: 100%;
  overflow: auto;
  `;
const Page = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${white}
`;

const Header = styled.div`
   width: 100%;
   background: ${primaryGray}
   color: ${white}
   display: flex;
   flex: 1 1 1;
   flex-flow: column wrap;
`;
const Cover = styled.div`
   display; flex;
   flex: 1 1 0;
   align-self: center;
`;
const Description = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
  font-size: large;
  flex: 3 1 0;
  align-self: center;
`;
const Title = styled.div`
  padding-left: 20px;
  margin-bottom: 5px;
  margin-top: 1%;
  display; flex;
  flex: 1 1 1;
`;
const Name = styled.a`
   text-align: center;
   color: ${primaryColor}
   font-size: xx-large;
`;
const Year = styled.a`
   font-size: x-large;
`;
const TextSmall = styled.span`
   font-size: large;
   margin-left: 20px;
   display; flex;
   flex: 1 1 1;
`;
const LineRateImdb = styled.span`
   font-size: large;
   display: flex;
   padding-top: 10px;
   padding-bottom: 5px;
   flex: 1 1 1;
   margin-left: 22px;
`;
const MetascoreContainer = styled.div`
  display: inline-block;
  margin-left: 80px;
`;
const MetascoreLabel = styled.span`
   background-color: #61c74f;
   color: ${white};
   padding: 1px 4px;
   vertical-align: baseline;
`;
const Plot = styled.p`
  line-height: 25px;
  padding-right: 10px;
  margin-bottom: 0;
`;
const Awards = styled.div`
  background: ${primaryColor}
  width: 90%;
  display; flex;
  flex: 1 1 1;
  color: ${white}
`;
const ContainerSearchHeader = styled.div`
  background: ${white}
  flex: 1 1 1;
  display: flex;
`;
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
  Header,
  ContainerSearchHeader,
  RootSecond,
};
