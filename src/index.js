import './sass/main.scss';

fetch('https://restcountries.eu/rest/v2/name/ukraine')
.then(response => {
    return response.json();
})
.then(countrie => {
    console.log(countrie)
})
.catch(error => {
    console.log(error)
})