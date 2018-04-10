import React from 'react';
import {Container, LogoHeader, SearchHeader} from './style'
import Logo from '../../assets/logo-top.png';
import {SearchInput} from '../index'

function Header(props){
  return (
    <Container>
      <LogoHeader>
        <img style={{width: '100%'}} src={Logo}/>
      </LogoHeader>
      <SearchHeader>
        <SearchInput onKeyPress={props.onKeyPress} onChangeInput={props.onChangeInput} offMargin/>
      </SearchHeader>
    </Container>
  )
}

export default Header;