import React, { Component } from 'react';
import {Loading, SearchHead} from '../../components'
import {connect} from 'react-redux';
import {Container} from './style'
class Index extends Component {
  render() {
    const {movies} = this.props;
    
    return (
      <Container>
        <Loading isShow={movies.isFetching}/>
        <SearchHead />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(Index);
