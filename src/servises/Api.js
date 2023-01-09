import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '11d4efaad8c688269f57854481682aca';
export const IMAGE_URL = 'https://www.themoviedb.org/t/p/w300';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    api_key: API_KEY,
};

export const getTrendingMovies = async (period) => {
    try {
        const response = await axios.get(`trending/movie/${period}`);
        return response.data.results;
    } catch (err) {
        console.log(err);
    }
};

export const getInfoMovie = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};




// Want to use async/await? Add the `async` keyword to your outer function/method.
//  async function getUser() {
//    try {
//      const response = await axios.get('/user?ID=12345');
//      console.log(response);
//    } catch (error) {
//      console.error(error);
//    }
//  }