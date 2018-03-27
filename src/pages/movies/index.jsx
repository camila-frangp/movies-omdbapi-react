import React, { Component } from 'react';
import {Loading} from '../../components'
import {connect} from 'react-redux';
import {Container, Header} from './style'
class Index extends Component {
  render() {
    const {movies} = this.props;
    
    return (
      <Header>
        <Loading isShow={movies.isFetching}/>
        <Container>
        <p>Movies</p>
      </Container>
      </Header>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(Index);
