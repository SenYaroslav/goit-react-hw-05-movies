import axios from 'axios';

const API_KEY = 'ecdc0bede86c5d627d8e7926f2be8d3a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const trending = 'trending/movie/day';
const search = 'search/movie';

export function getTrending() {
  return axios.get(`${trending}`, {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
}

export function searchMovies(query) {
  return axios.get(`${search}`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
}

export function getMovieDetails(id) {
  return axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export function getMovieCredits(id) {
  return axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export function getMovieReviews(id) {
  return axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
}
