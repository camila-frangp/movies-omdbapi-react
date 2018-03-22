import React, {Component} from 'react';
import {style} from "./style";
import PropTypes from 'prop-types';
class InputSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputSearch: ''
    }
  }
  
  onChangeInput = (name, value)=> {
    this.setState({[name]:value});
    this.props.onChangeInput(name, value);
  }
  
  render(){
    const {textInput} = this.state;
    return (
      <div style={style.container}>
        <input name="inputSearch" value={textInput} onChange={e => this.onChangeInput(e.target.name, e.target.value)} style={style.input} placeholder={this.props.hint} type='text'/>
      </div>
    )
  }
}
InputSearch.propTypes = {
  hint: PropTypes.string
}

InputSearch.defaultProps = {
  hint: 'Movie'
}
export default InputSearch;