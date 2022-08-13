import axios from 'axios';

const API_KEY = 'fd8ee8743c2ebf2b8396513fa8ff90d8';
const URL = 'https://api.themoviedb.org/3';

export const getAllMovies = () => {
  return axios.get(`${URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });
};
