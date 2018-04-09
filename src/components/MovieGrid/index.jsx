import React, {Component} from 'react';
import {Container, Description, Item, MovieCover, Text} from './style';
import PropTypes from 'prop-types';

export default function MovieGrid (props){
    return (
      <Container>
        {props.list.map(item =>
          <Item key={item.imdbID} onClick={e => props.onItemClick(e,item)}>
            <MovieCover src={item.Poster}/>
              <Description>
                <Text>{item.Title}</Text>
              </Description>
          </Item>
        )}
      </Container>
    )
}
MovieGrid.propTypes = {
  list: PropTypes.array
}