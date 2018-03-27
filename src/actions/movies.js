import Movie from '../services/api/Movie';

export const REQUEST = 'REQUEST';
export const RECEIVER_MOVIES_LIST = 'RECEIVER_MOVIES_LIST';
export const RECEIVER_MOVIES_LIST_ERROR = 'RECEIVER_MOVIES_LIST_ERROR';

export const startRequest = () => ({
  type: REQUEST
})

export const movieList = (movies) => ({
  type: RECEIVER_MOVIES_LIST,
  movies
});

export const movieListError = (error) => ({
  type: RECEIVER_MOVIES_LIST_ERROR,
  isError: true,
  error
});

export const getMovieList = (movie) => dispatch => {
  dispatch(startRequest());
  Movie.searchMovieList(movie)
    .then(response => dispatch(movieList(response)))
    .catch(error => dispatch(movieListError({error: 'Error'})));
}