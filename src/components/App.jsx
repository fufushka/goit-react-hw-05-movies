import { Route, Routes } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
import HomePage from 'Pages/HomePage/HomePage';
import Layout from 'layouts/Layout';
import MoviePage from 'Pages/MoviesPage/MoviePage';
import MovieDetails from '../Pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
