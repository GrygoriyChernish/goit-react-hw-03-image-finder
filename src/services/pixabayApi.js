import Axios from 'axios';

const KEY = '19220903-64d397b0478b4f9618e32d188';
const BASE_URL = `https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&q=`;

async function fetchData(searchQuery, page) {
  const response = await Axios.get(`${BASE_URL}${searchQuery}&page=${page}`);
  const { data } = response;
  return data;
}

export default fetchData;
