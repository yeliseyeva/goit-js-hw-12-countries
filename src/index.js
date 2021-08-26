// import './sass/main.scss';
import countryCardTpl from '../src/partials/country-card.hbs';
import countryListTpl from '../src/partials/countries.hbs';

// import API from './fetchCountries.js'

const refs = {
  input: document.querySelector('.input'),
  countriesList: document.querySelector('.countries-list'),
  countryCard: document.querySelector('.country-card'),
};

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

refs.input.addEventListener('input', onInput);

function onInput(e) {
  e.preventDefault();

  const inputValue = e.target.value;



  fetchCountry(inputValue)
    .then(renderCountryCard)
    .catch(error => {
      console.log(error);
    });


}

function fetchCountry(inputValue) {
  return fetch(`${BASE_URL}${inputValue}`).then(response => {
    return response.json();
  });
}

function renderCountryCard(country) {
  const card = countryCardTpl(country);
  const list = countryListTpl(country);
  // refs.countryCard.innerHTML = card;
  refs.countriesList.innerHTML = list;
}
