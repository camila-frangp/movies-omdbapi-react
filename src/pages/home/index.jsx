import React, {Component} from 'react';
import {style} from './style';
import {SearchInput} from '../../components'
import Logo from '../../assets/logo.png';

class Index extends Component {
  
  onChangeInput = (name, value) => {
    this.setState({[name]: value});
  }
  
  state = {
    inputSearch: ''
  }
  
  render() {
    return (
      <div style={style.container}>
        <img style={style.logo} src={Logo}/>
        <form style={style.form}>
          <SearchInput hint="Nome do filme" value={this.state.inputSearch} onChangeInput={this.onChangeInput}/>
          <input style={style.submit} type='submit' value="Buscar Filme"/>
        </form>
      </div>
    );
  }
}


export default Index;
