// import './sass/main.scss';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/desktop/dist/PNotifyDesktop';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/desktop/dist/PNotifyDesktop';
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import countryCardTpl from '../src/partials/country-card.hbs';
import countryListTpl from '../src/partials/countries.hbs';

import debounce from 'lodash.debounce';

import API from './fetchCountries'

const refs = {
  input: document.querySelector('.input'),
  countryCard: document.querySelector('.country-card'),
};

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  e.preventDefault();

  const inputValue = e.target.value;

  API.fetchCountry(inputValue)
    .then(renderCountryCard)
    .catch(error => {
      console.log(error);
    });

    resetHTML()
}

function resetHTML(){
  refs.countryCard.innerHTML = '';
}

function renderCountryCard(country) {
  const length = country.length;
  if(length === 1) {
    refs.countryCard.innerHTML = countryCardTpl(country);
  } else if (length > 10) {
    error({
      text: 'Too many countries found. Please enter a more specific query',
    });
  } else {
    refs.countryCard.innerHTML = countryListTpl(country);
  }
}
