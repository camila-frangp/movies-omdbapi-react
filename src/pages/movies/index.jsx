import React, {Component} from 'react';
import {Loading, MovieGrid, SearchInput} from '../../components'
import {connect} from 'react-redux';
import {Body, Container, Header, LogoHeader, SearchHeader} from './style'
import Logo from '../../assets/logo-top.png';

class Index extends Component {
  
  state = {
    inputSearch: ''
  }
  
  onChangeInput = (name, value) => {
    this.setState({[name]: value});
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
            <SearchInput onChangeInput={this.onChangeInput} offMargin/>
          </SearchHeader>
        </Header>
        <Body>
        {
          movies.Search &&
          <MovieGrid list={movies.Search}/>
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

export default connect(mapStateToProps, null)(Index);
