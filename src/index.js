// import './sass/main.scss';
import countryCardTpl from '../src/partials/country-card.hbs';
import countryListTpl from '../src/partials/countries.hbs';

const refs = {
  input: document.querySelector('.input'),
  countriesList: document.querySelector('.countries-list'),
  countryCard: document.querySelector('.country-card'),
};

fetchCountry()
  .then(renderCountryCard)
  .catch(error => {
    console.log(error);
  });

function fetchCountry() {
  return fetch('https://restcountries.eu/rest/v2/name/ukraine').then(response => {
    return response.json();
  });
}

function renderCountryCard(country) {
  const card = countryCardTpl(country);
  refs.countryCard.innerHTML = card;
}
