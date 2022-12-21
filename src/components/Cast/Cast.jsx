import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesApi';
import { Img, Li, Ul, Wrapper } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(res => {
        setMovieCast(res.data.cast);
      })
      .catch(console.log);
  }, [movieId]);

  return movieCast.length ? (
    <Ul>
      {movieCast.map(({ id, profile_path, name, character }) => (
        <Li key={id}>
          {profile_path ? (
            <Img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
          ) : (
            <Img
              src="https://bnmf.ca/assets/img/photos/leadership/image-not-available.png"
              alt="image-not-available"
            />
          )}
          <Wrapper>
            <h4>{name}</h4>
            <p>{character}</p>
          </Wrapper>
        </Li>
      ))}
    </Ul>
  ) : (
    <p>There are no info about this movie</p>
  );
};

export default Cast;
