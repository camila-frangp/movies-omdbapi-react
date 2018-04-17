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
  
  searchMovie = (pageid) => {
    this.props.moviesList(this.state.inputSearch, pageid);
  }
  
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchMovie(1);
    }
  }
  
  onItemClick = (e, item) => {
    this.props.history.push(`/movies/${item.imdbID}`);
  }
  
  onPageChange = (page) => {
    this.searchMovie(page);
  
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
          </Body>
          <Pagination totalItems={movies.totalResults} itemsCountPerPage={10} onPageChange={this.onPageChange}/>
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
