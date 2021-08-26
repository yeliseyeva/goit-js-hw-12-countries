// const BASE_URL = 'https://restcountries.eu/rest/v2/name/'

// function fetchCountry() {
//   return fetch(`${BASE_URL}${inputValue}`).then(response => {
//     return response.json();
//   });
// }

// export default {fetchCountry};

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

function fetchCountry(inputValue) {
    return fetch(`${BASE_URL}${inputValue}`).then(response => {
      return response.json();
    });
  }

  export default {fetchCountry}