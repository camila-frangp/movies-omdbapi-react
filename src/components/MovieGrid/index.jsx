import React from 'react';
import {Container, Item} from './style';

function MovieGrid(props) {
  
  return (
    <Container>
        {props.list.map(item =>
          <Item key={item.imdbID}>
            <img style={{width: '100%', height: '100%'}} src={item.Poster}/>
          </Item>
        )}
    </Container>
  )
}

export default MovieGrid;