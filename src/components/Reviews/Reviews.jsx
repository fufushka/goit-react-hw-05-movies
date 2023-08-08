import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../API/api';
import css from './Reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getReviews(movieId);

      setReviews(res.results);
    };
    fetchReviews().catch(err => console.log(err));
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 ? (
        <p>There are no reviews,sorry</p>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id} className={css.card}>
                <p className={css.author}>{review.author}</p>
                <p className={css.content}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
