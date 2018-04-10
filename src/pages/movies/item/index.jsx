import React, {Component} from 'react';
import {Header as SearchHeader, Loading} from '../../../components'
import {
  Awards,
  Container,
  Cover,
  Description,
  Header,
  LineRateImdb,
  MetascoreContainer,
  MetascoreLabel,
  Name,
  Page,
  Plot,
  Root,
  TextSmall,
  Title,
  Year
} from './style';
import {connect} from 'react-redux';
import {getMovieItem, getMoviesList} from '../../../actions/movies';

class Index extends Component {
  
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchMovie();
      this.props.history.goBack();
    }
  }
  
  searchMovie = () => {
    this.props.moviesList(this.state.inputSearch);
  }
  
  state = {
    inputSearch: ''
  }
  onChangeInput = (name, value) => {
    this.setState({[name]: value});
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovieItem(id);
  }
  
  render() {
    const idMovie = this.props.match.params.id;
    const {movies} = this.props;
    const item = movies.item;
    return (
      <Root>
        <Loading isShow={movies.isFetching}/>
        {item &&
        <Page>
          <Header>
            <SearchHeader onKeyPress={this.handleKeyPress} onChangeInput={this.onChangeInput}/>
            <Title>
              <Name>{item.Title} </Name>
              <Year>({item.Year})</Year>
            </Title>
            <TextSmall>
              <span>{item.Runtime}</span>
              <span> | </span>
              <span>{item.Genre}</span>
              <span> | </span>
              <span>{item.Released}</span>
            </TextSmall>
            <LineRateImdb>
              <strong>{item.imdbRating}</strong>
              <MetascoreContainer>
                <MetascoreLabel>
                  {item.Metascore}
                </MetascoreLabel>
                <span> Metascore</span>
              </MetascoreContainer>
            </LineRateImdb>
          </Header>
          <Container>
            <Cover>
              <img style={{width: '100%', objectFit: 'cover', objectPosition: 'center'}} src={item.Poster}/>
            </Cover>
            <Description>
              <Plot>{item.Plot}</Plot>
              <div>
                <p>
                  <strong>Directors: </strong>
                  <span>{item.Director}</span>
                </p>
                <p>
                  <strong>Writer: </strong>
                  <span>{item.Writer}</span>
                </p>
                <p>
                  <strong>Actors: </strong>
                  <span>{item.Actors}</span>
                </p>
              </div>
            </Description>
          </Container>
          <Awards>
            <p style={{marginLeft: '10px'}}>
              <strong>{item.Awards}</strong>
            </p>
            <p style={{marginLeft: '10px'}}>{item.Language} | {item.Country} | {item.Production}</p>
          </Awards>
        </Page>
        }
      </Root>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieItem: (id) => dispatch(getMovieItem(id)),
    moviesList: (movie) => dispatch(getMoviesList(movie))
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);