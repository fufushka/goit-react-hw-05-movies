import axios from 'axios';
export async function getTrendingMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: '7835d044267892348807711fd2fa474b',
      },
    }
  );
  const result = response.data;
  return result;
}

export async function getMoviesbyName(query) {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: '7835d044267892348807711fd2fa474b',
        query,
      },
    }
  );
  const result = response.data;
  return result;
}
export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: '7835d044267892348807711fd2fa474b',
      },
    }
  );
  const result = response.data;
  return result;
}
export async function getMovieCast(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: '7835d044267892348807711fd2fa474b',
      },
    }
  );
  const result = response.data;
  return result;
}
export async function getReviews(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: {
        api_key: '7835d044267892348807711fd2fa474b',
      },
    }
  );
  const result = response.data;
  return result;
}
