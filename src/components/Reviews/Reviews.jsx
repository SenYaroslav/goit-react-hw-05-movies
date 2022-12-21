import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';
import { Li, Ul, Wrapper } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => {
        setMovieReviews(res.data.results);
      })
      .catch(console.log);
  }, [movieId]);

  return movieReviews.length > 0 ? (
    <Ul>
      {movieReviews.map(({ id, author, content }) => (
        <Li key={id}>
          <Wrapper>
            <h4>{author}</h4>
            <p>{content}</p>
          </Wrapper>
        </Li>
      ))}
    </Ul>
  ) : (
    <p>There are no reviews for this movie</p>
  );
};

export default Reviews;
