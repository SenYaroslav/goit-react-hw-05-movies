import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesApi';
import * as sc from './MovieDetails.styled';
import { HiOutlineReply } from 'react-icons/hi';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  const getMovieById = id => {
    getMovieDetails(id)
      .then(res => setMovie(res.data))
      .catch(console.log);
  };
console.log('location >>>', location)
  const BackLinkHref = location.state?.from ?? '/';

  return (
    <>
      {movie && (
        <>
          <sc.Container>
            <sc.Wrapper>
              <sc.LinkItem to={BackLinkHref}>
                <HiOutlineReply /> Go back
              </sc.LinkItem>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                max-width="350px"
              />
            </sc.Wrapper>
            <sc.Wrapper>
              <h2>{movie.title}</h2>
              <sc.Year>{movie.release_date.slice(0, 4)}</sc.Year>
              <p>
                User score: <span>{movie.vote_average.toFixed(2)}</span>
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            </sc.Wrapper>
          </sc.Container>
          <sc.WrapperInfo>
            <p>
              <b>Aditional information</b>
            </p>
            <ul>
              <li>
                <sc.LinkItem to="cast" state={{ from: location.state?.from }}>
                  Cast
                </sc.LinkItem>
              </li>
              <li>
                <sc.LinkItem to="reviews" state={{ from: location.state?.from }}>
                  Reviews
                </sc.LinkItem>
              </li>
            </ul>
          </sc.WrapperInfo>
          <sc.Wrapper>
            <Outlet />
          </sc.Wrapper>
        </>
      )}
    </>
  );
};

export default MovieDetails;
