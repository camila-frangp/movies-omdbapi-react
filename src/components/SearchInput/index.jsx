import React from 'react';
import {Container, InputCustom} from "./style";
import PropTypes from 'prop-types';
function SearchInput(props) {
  
  return (
    <Container>
      <InputCustom offMargin={props.offMargin} name="inputSearch" value={props.value}
             onChange={e => props.onChangeInput(e.target.name, e.target.value)}
             placeholder={props.hint} type="text" />
      
    </Container>
  )
}
SearchInput.propTypes = {
  offMargin: PropTypes.bool,
  onChangeInput: PropTypes.func.isRequired
}
export default SearchInput;