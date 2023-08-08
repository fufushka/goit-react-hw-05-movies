import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../API/api';
import css from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await getMovieCast(movieId);

      setCast(res);
    };
    fetchCast().catch(err => console.log(err));
  }, [movieId]);
  return (
    <>
      <ul className={css.castList}>
        {cast?.cast?.map(member => {
          return (
            <li key={member.id} className={css.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                alt=""
                className={css.memberImage}
              />
              <p className={css.memberName}>{member.name}</p>
              <p className={css.memberCharacter}>{member.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
