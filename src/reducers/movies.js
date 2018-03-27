import {REQUEST, RECEIVER_MOVIES_LIST_ERROR, RECEIVER_MOVIES_LIST} from '../actions/movies'

const initialState = {
  Response: '',
  Search: [],
  totalResults: '',
};

function movies(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVER_MOVIES_LIST:
      return {
        ...state,
        isFetching: false,
        ...action.movies
        
      }
    case RECEIVER_MOVIES_LIST_ERROR:
      return{
        isFetching: false,
        Response: false,
        ...action.movies
      }
      
    default:
      return state;
  }
}

export default movies;