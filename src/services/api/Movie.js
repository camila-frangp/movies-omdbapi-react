import Api, {API_KEY} from '../api';

export default class Movie {
  
  static searchMovieList = (movie, numberPage = 1) => {
    return Api.get('', {
      params: {
        apikey: API_KEY,
        s: movie,
        page: numberPage,
      }
    }).then(response => response.data)
      .catch(error => error);
  }
  static searchMovieItem = (id) => {
    return Api.get('', {
      params: {
        apikey: API_KEY,
        i: id
      }
    }).then(response => response.data)
      .catch(error => error);
  }
}