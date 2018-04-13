import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Loading,
  MovieGrid,
  Header,
  NotFound
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
    this.props.moviesList(this.state.inputSearch);
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
      <Container>
        <Loading isShow={movies.isFetching}/>
        <Header onKeyPress={this.handleKeyPress} onChangeInput={this.onChangeInput}/>
        <Body>
        {
          movies.Search ?
            <MovieGrid list={movies.Search} onItemClick={this.onItemClick}/>
            :
            <NotFound message={movies.Error}/>
        }
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
    moviesList: (movie) => dispatch(getMoviesList(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
