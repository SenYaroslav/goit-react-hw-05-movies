import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams  } from 'react-router-dom';
import { Container, Input, Button, LinkItem, List, Item } from './Movies.styled';
import { searchMovies } from 'services/moviesApi';

const Movies = () => {
  const [moviesList, setMoviesList] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query')

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

    if (value) {
      setSearchParams({query: value})
    }
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
          <List>
            {moviesList.map(({ id, title }) => (
              <Item key={id}>
                <LinkItem to={`${id}`} state={{ from: location }}>
                  {title}
                </LinkItem>
              </Item>
            ))}
          </List>
        </div>
      )}
    </>
  );
};

export default Movies;
