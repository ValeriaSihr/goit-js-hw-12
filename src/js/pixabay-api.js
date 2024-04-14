import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43231904-ed1d7987ff22f73c70c274b13';

export async function objectSearch(text, page) {
  const response = await axios(BASE_URL, {
    params: {
      key: KEY,
      q: text,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 15,
    },
  });

  return response.data;
}
