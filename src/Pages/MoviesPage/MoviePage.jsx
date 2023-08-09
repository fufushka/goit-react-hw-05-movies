import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesbyName } from '../../API/api';
import FilmList from 'components/FilmList/FilmList';

const MoviePage = () => {
  const [params, setParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const query = params.get('query');
  console.log(query);
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setParams(nextParams);
  };

  const onSearch = () => {
    if (!query) return;
    setParams({ query: query });
  };
  const handleInputChange = e => {
    const newValue = e.target.value;
    updateQueryString(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMoviesbyName(query);
      setFilms(res);
    };
    fetchData().catch(error => console.log(error));
  }, [query]);
  return (
    <>
      <input type="text" value={query || ''} onChange={handleInputChange} />
      <button type="submit" onClick={onSearch}>
        Search
      </button>
      {films && <FilmList films={films} />}
    </>
  );
};

export default MoviePage;
// asdasd
