import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesbyName } from '../../API/api';
import FilmList from 'components/FilmList/FilmList';

const MoviePage = () => {
  const [params, setParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const query = params.get('query');

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setParams(nextParams);
  };

  const handleInputChange = e => {
    const newValue = e.target.value;
    updateQueryString(newValue);
  };
  const onSubmit = async () => {
    const res = await getMoviesbyName(query);
    setFilms(res);
  };
  return (
    <>
      <input type="text" value={query || ''} onChange={handleInputChange} />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
      {films && <FilmList films={films} />}
    </>
  );
};

export default MoviePage;
