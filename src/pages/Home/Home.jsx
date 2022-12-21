import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/moviesApi';
import * as sc from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(({ data: { results } }) => setTrendingMovies(results))
      .catch(console.log);
  }, []);

  return (
    <>
      <sc.H1>Trending today</sc.H1>
      <sc.List>
        {trendingMovies.length &&
          trendingMovies.map(({ id, title }) => (
            <sc.Item key={id}>
              <sc.LinkItem to={`movies/${id}`} state={{ from: location }}>
                {title}
              </sc.LinkItem>
            </sc.Item>
          ))}
      </sc.List>
    </>
  );
};

export default Home;
