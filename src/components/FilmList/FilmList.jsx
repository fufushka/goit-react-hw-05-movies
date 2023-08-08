import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../../Pages/HomePage/HomePage.module.css';
const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {films?.results?.map(film => {
        return (
          <li key={film.id} className={css.moviesItem}>
            <Link
              className={css.movieLink}
              to={`/movies/${film.id}`}
              state={{
                from: location,
              }}
            >
              {film.title}
            </Link>
          </li>
        );
      })}
    </ul>
    // <div></div>
  );
};

export default FilmList;
