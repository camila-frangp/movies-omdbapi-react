import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Loader} from './style'

export default class Loading extends Component {
  
  render() {
    return (
      <Container hidden={!this.props.isShow}>
        <Loader/>
      </Container>
    )
  }
}
Loading.propTypes = {
  isShow: PropTypes.bool
};