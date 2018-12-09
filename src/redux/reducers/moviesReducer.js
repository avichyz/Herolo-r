import { 
  ADD_MOVIE, EDIT_MOVIE, REMOVE_MOVIE,
  SELECT_MOVIE, CLEAR_SELECTED, FILTER_MOVIES, 
  LOAD_MOVIES,LOAD_MOVIE_DATA } from '../actions/actionTypes';

let initialState = [];

function movieApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES :
    return {
      movies: action.movies
    }

    case LOAD_MOVIE_DATA: 
      return {
        movies: state.movies.map(movie => (movie.id == action.movie.id) ? action.movie : movie)
      }

    case SELECT_MOVIE:
      return Object.assign({}, state, {
        selectedId: action.id
      })

    case CLEAR_SELECTED:
      return Object.assign({}, state, {
        selectedId: null
      })

    case FILTER_MOVIES:
      return Object.assign({}, state, {
        searchText: action.searchText
      })

    case ADD_MOVIE:
      return Object.assign({}, state, {
        movies: [
          ...state.movies,
          {
            id: new Date().getUTCMilliseconds(), // getting a unique id based on a timestamp
            title: action.title,
            year: action.year,
            genre: action.genre,
            runtime: action.runtime,
            director: action.director,
            poster: action.poster
          }
        ].sort(mov => mov.id)
      })
    case EDIT_MOVIE:
      return Object.assign({}, state, {
        movies: [
          Object.assign({}, {
            id:action.id,
            title:action.title,
            director: action.director,
            year: action.year, 
            runtime: action.runtime,
            genre:action.genre,
            poster: action.poster
          }),
          ...state.movies.filter(movie => movie.id !== action.id)
        ]
      })
    case REMOVE_MOVIE:
      return Object.assign({}, state, {
        movies: [
          ...state.movies.filter(movie => movie.id !== action.id)
        ]
      })
    default:
      return state
  }
}

export default movieApp;

