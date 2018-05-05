import React from 'react';
import {
  Container,
  LogoHeader,
  Search,
} from './style';
import Logo from '../../assets/logo-top.png';
import { SearchInput } from '../index';

function SearchHeader(props) {
  return (
    <Container>
      <LogoHeader>
        <img style={{ width: '100%' }} src={Logo} />
      </LogoHeader>
      <Search>
        <SearchInput onKeyPress={props.onKeyPress} onChangeInput={props.onChangeInput} offMargin />
      </Search>
    </Container>
  );
}

export default SearchHeader;
