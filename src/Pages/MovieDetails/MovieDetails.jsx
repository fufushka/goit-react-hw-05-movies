import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../API/api';
import css from './MovieDetails.module.css';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getMovieDetails(movieId);
      console.log(res);
      setMovie(res);
    };
    fetchDetails().catch(err => console.log(err));
  }, [movieId]);
  const score = Math.round(movie?.vote_average * 10);

  return (
    <>
      <Link to={location?.state?.from || `/`} className={css.returnBtn}>
        <svg
          className={css.arrow}
          viewBox="0 0 448 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
        </svg>
        <span className={css.text}>Return </span>
      </Link>
      <div className={css.flex_div}>
        <img
          src={movie && `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie?.original_title}
          className={css.movieImg}
        />
        <div className={css.flex_div_2}>
          <h1 className={css.movieTitle}>{movie?.original_title}</h1>
          <p className={css.movieScore}>{`User Score: ${score}%`}</p>
          <p className={css.movieOverview}>{movie?.overview}</p>{' '}
          <ul className={css.genresList}>
            <span className={css.genres_span}> Genres:</span>
            {movie?.genres.map(genre => {
              return (
                <li key={genre.id} className={css.genresItem}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={css.additionalInfo}>
        <p>Adittional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
