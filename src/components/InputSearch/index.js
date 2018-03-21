import React, {Component} from 'react';
import IconSeach from '../../assets/search.svg';
import {style} from "./style";

class InputSearch extends Component{
  render(){
    return (
      <div style={style.container}>
        <img style={style.logo} src={IconSeach}/>
        <input style={style.input} placeholder='Pesquise seu filme' type='text'/>
      </div>
    )
  }
}
export default InputSearch;