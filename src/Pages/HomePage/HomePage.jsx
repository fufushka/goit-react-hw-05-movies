import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../API/api';
import { Link, useLocation } from 'react-router-dom';
import css from './HomePage.module.css';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTrendingMovies();
      console.log(res);
      setMovies(res.results);
    };

    fetchData().catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      <ul className={css.moviesList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.moviesItem}>
            <Link
              className={css.movieLink}
              to={`/movies/${movie.id}`}
              state={{
                from: location,
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
