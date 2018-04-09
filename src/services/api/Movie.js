import Api, {API_KEY} from '../api';

export default class Movie {
  
  static searchMovieList = (movie) => {
    return Api.get('', {
      params: {
        apikey: API_KEY,
        s: movie
      }
    }).then(response => response.data)
      .catch(error => console.log(error));
  }
  static searchMovieItem = (id) => {
    return Api.get('', {
      params: {
        apikey: API_KEY,
        i: id
      }
    }).then(response => response.data)
      .catch(error => console.log(error));
  }
}