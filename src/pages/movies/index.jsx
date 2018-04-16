import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Loading,
  MovieGrid,
  Header,
  NotFound,
  Pagination
} from '../../components'
import {
  Body,
  Container,
  Root
} from './style'
import { getMoviesList } from "../../actions/movies";

class Index extends Component {
  
  state = {
    inputSearch: ''
  }
  
  onChangeInput = (name, value) => {
    this.setState({[name]: value});
  }
  
  searchMovie = () => {
    this.props.moviesList(this.state.inputSearch, 1);
  }
  
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchMovie();
    }
  }
  
  onItemClick = (e, item) => {
    this.props.history.push(`/movies/${item.imdbID}`);
  }
  
  render() {
    const {movies} = this.props;
    return (
      <Root>
        <Loading isShow={movies.isFetching}/>
        <Container>
          <Header onKeyPress={this.handleKeyPress} onChangeInput={this.onChangeInput}/>
          <Body>
          {
            movies.Search ?
              <MovieGrid list={movies.Search} onItemClick={this.onItemClick}/>
              :
              <NotFound message={movies.Error}/>
          }
          {/*<Pagination totalItems={movies.totalResults} itemsCountPerPage={10}/>*/}
          </Body>
        </Container>
      </Root>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    moviesList: (movie, numberPage) => dispatch(getMoviesList(movie, numberPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
