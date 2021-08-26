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

    resetHTML()
}

function resetHTML(){
  refs.countryCard.innerHTML = '';
}

function fetchCountry(inputValue) {
  return fetch(`${BASE_URL}${inputValue}`).then(response => {
    return response.json();
  });
}

function renderCountryCard(country) {
  const length = country.length;
  if(length === 1) {
    refs.countryCard.innerHTML = countryCardTpl(country);
  } else if (length > 10) {
    console.log('ERROR')
  } else {
    refs.countryCard.innerHTML = countryListTpl(country);
  }
  // refs.countryCard.innerHTML = countryCardTpl(country);
  // refs.countryCard.innerHTML = countryListTpl(country);
}
