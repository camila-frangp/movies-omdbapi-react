import React, {Component} from 'react';
import {Loading} from '../../../components'
import {
  Awards,
  Container,
  Cover,
  Description,
  Title,
  LineRateImdb,
  MetascoreContainer,
  MetascoreLabel,
  Page,
  Plot,
  Root,
  TextSmall,
  Name,
  Header,
  Year
} from './style';
import {connect} from 'react-redux';
import {getMovieItem} from '../../../actions/movies';

class Index extends Component {
  
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
              <img src={item.Poster}/>
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
    getMovieItem: (id) => dispatch(getMovieItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);