import React, {Component} from 'react';
import {Loading, MovieGrid, SearchInput} from '../../components'
import {connect} from 'react-redux';
import {Body, Container, Header, LogoHeader, SearchHeader} from './style'
import Logo from '../../assets/logo-top.png';
import {getMoviesList} from "../../actions/movies";

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
      <Container>
        <Loading isShow={movies.isFetching}/>
        <Header>
          <LogoHeader>
            <img style={{width: '100%'}} src={Logo}/>
          </LogoHeader>
          <SearchHeader>
            <SearchInput onKeyPress={this.handleKeyPress} onChangeInput={this.onChangeInput} offMargin/>
          </SearchHeader>
        </Header>
        <Body>
        {
          movies.Search &&
          <MovieGrid list={movies.Search} onItemClick={this.onItemClick}/>
        }
        </Body>
      </Container>
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
