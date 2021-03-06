const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = 'dc6zaTOxFJmzC'; //public beta api key

const getTrending = () => {
  return fetch(`${BASE_URL}trending?api_key=${API_KEY}`)
    .then(response => response.json());
};

const search = searchTerm => {
  return fetch(`${BASE_URL}search?q=${searchTerm}&api_key=${API_KEY}`)
    .then(response => response.json());
};

export {
  getTrending,
  search
};
