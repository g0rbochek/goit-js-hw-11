import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39359074-e45fdef78225c532d049ef6e9';

export async function getFetch(name, totalNumberOfPges, currentPage = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: name,
      per_page: totalNumberOfPges,
      page: currentPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response;
}
