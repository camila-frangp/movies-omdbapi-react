import React, {Component} from 'react';
import {ChildFirst, ChildSecond, Container} from './style';
import {SearchInput} from '../index'
import Logo from '../../assets/logo-top.png';

export default class Index extends Component {
  
  state = {
    inputSearch: ''
  }
  
  onChangeInput = (name, value) => {
    this.setState({inputSearch: value});
  }
  
  render() {
    return (
      <Container>
        <ChildFirst>
          <img style={{width: '100%'}} src={Logo}/>
        </ChildFirst>
        <ChildSecond>
          <SearchInput onChangeInput={this.onChangeInput} offMargin/>
        </ChildSecond>
      </Container>
    )
  }
}