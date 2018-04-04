import React, {Component} from 'react';
import {Container, Description, Item, MovieCover, Text} from './style';

export default function MovieGrid (props){
  
 
    return (
      <Container>
        {props.list.map(item =>
          <Item key={item.imdbID}>
            <MovieCover src={item.Poster}/>
            
              <Description>
                <Text>{item.Title}</Text>
              </Description>
          </Item>
        )}
      </Container>
    )
}
