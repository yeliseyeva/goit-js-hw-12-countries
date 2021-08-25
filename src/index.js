import './sass/main.scss';
import countryCardTpl from '../src/partials/country-card.hbs';
import countryListTpl from '../src/partials/countries.hbs';

const refs = {
  input: document.querySelector('.input'),
  countriesList: document.querySelector('.countries-list'),
  countryCard: document.querySelector('.country-card'),
};

fetchCountry()
  .then(renderCountyCard)
  .catch(error => {
    console.log(error);
  });

function fetchCountry() {
  return fetch('https://restcountries.eu/rest/v2/name/').then(response => {
    return response.json();
  });
}

function renderCountyCard(country) {
  const card = countryCardTpl(country);
  refs.countryCard.innerHTML = card;
}
