import Api, {API_KEY} from '../api';

export default class Movie {
  
  static searchMovieList = (movie) => {
    Api.get('',{
      params: {
        apikey: API_KEY,
        s: movie
      }
    }).then(response => response.data)
      .catch(error => console.log(error));
  }
}