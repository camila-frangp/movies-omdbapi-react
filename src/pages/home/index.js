import React, {Component} from 'react';
import {style} from './style';
import {InputSearch} from '../../components'
import Logo from '../../assets/logo.png';

class Index extends Component {
  render() {
    return (
      <div style={style.container}>
        <img style={style.logo} src={Logo}/>
        <form style={style.form}>
          <InputSearch/>
          <input style={style.submit} type='submit' value="Buscar Filme"/>
        </form>
      </div>
    );
  }
}


export default Index;
