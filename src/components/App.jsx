import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route
              path="cast"
              element={
                <div>
                  <Cast />
                </div>
              }
            />
            <Route
              path="reviews"
              element={
                <div>
                  <Reviews />
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
          <Route path="404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </>
  );
};
