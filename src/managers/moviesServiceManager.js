
const apiKey = '98dc9cb7';

export async function searchMovies(searchString) {
    let moviesBasic = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchString}&r=json`);
    moviesBasic = await moviesBasic.json();
    return moviesBasic.Search.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
    }))
}

export async function getMovieById(id) {
    let movieData = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&r=json`);
    movieData = await movieData.json();
    return ({
        id: movieData.imdbID,
        title: movieData.Title,
        year: movieData.Year,
        genre: movieData.Genre,
        director: movieData.Director,
        poster: movieData.Poster
    })
}

