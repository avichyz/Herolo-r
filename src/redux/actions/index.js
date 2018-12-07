
import { searchMovies, getMovieById } from '../../managers/moviesServiceManager';
import { ADD_MOVIE, EDIT_MOVIE, SELECT_MOVIE, FILTER_MOVIES, LOAD_MOVIES, LOAD_MOVIE_DATA } from './actionTypes';


export function loadMoviesWithData() {
  return function (dispatch) {

    return searchMovies("world")
    .then(movies => 
      {
        dispatch(loadMovies(movies))
        return movies;
      })
      .then(movies => movies.forEach(movie => {
        getMovieById(movie.id)
          .then(movieWithData => dispatch(loadMovieData(movieWithData)))
      }))
    
  }
}

export function loadMovies(movies) {
  return { type: LOAD_MOVIES, movies }
}

export function loadMovieData(movie) {
  return { type: LOAD_MOVIE_DATA, movie }
}

export function addMovie(title, year, genre, runtime, director, poster) {
  return { type: ADD_MOVIE, title, year, genre, runtime, director, poster }
}

export function editMovie(id ,title, year, genre, runtime, director, poster) {
  return { type: EDIT_MOVIE, id, title, year, genre, runtime, director, poster }
}


export function selectMovie(id) {
  return { type: SELECT_MOVIE, id }
}

export function filterMovies(searchText) {
  return { type: FILTER_MOVIES, searchText }
}

