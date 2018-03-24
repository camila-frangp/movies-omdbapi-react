import React, {Component} from 'react';
import {Container, InputCustom} from "./style";

function SearchInput(props) {
  
  return (
    <Container>
      <InputCustom name="inputSearch" value={props.value}
             onChange={e => props.onChangeInput(e.target.name, e.target.value)}
             placeholder={props.hint} type='text'/>
      
    </Container>
  )
}

export default SearchInput;