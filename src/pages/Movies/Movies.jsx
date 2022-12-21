import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Input, Button, LinkItem } from './Movies.styled';
import { searchMovies } from 'services/moviesApi';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovies(query)
      .then(({ data: { results } }) => {
        if (results.length === 0) {
          alert('There are no results');
          return;
        }
        setMoviesList(results);
      })
      .catch(console.log);
  }, [query]);

  const submitHandler = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.query;
    return setQuery(value.trim());
  };

  return (
    <>
      <Container>
        <form onSubmit={submitHandler}>
          <Input
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Movie title"
            autoFocus
          />
          <Button type="submit">Search movies</Button>
        </form>
      </Container>
      {moviesList && (
        <div>
          <ul>
            {moviesList.map(({ id, title }) => (
              <li key={id}>
                <LinkItem to={`${id}`} state={{ location }}>
                  {title}
                </LinkItem>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Movies;
