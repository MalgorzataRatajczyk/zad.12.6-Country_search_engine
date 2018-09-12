"use strict"
// zmienne z adresem url i z listą krajów
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

// podpięcie żądania pod przycisk z id search
document.getElementById('search').addEventListener('click', searchCountries);

// funkcja wyszukująca kraje
function searchCountries() {
    var countryName = document.getElementById('country-name').value;// pobranie wartości wpisanej przez użytkownika i przypisanie do zmiennej poprzez odczytanie właściwości value
    if(!countryName.length) countryName = 'Poland';  //jeśli użytkownik nic nie wpisze w pole wyszukiwania to ustawiamy jego wartość na "Poland"
    fetch(url + countryName)
    .then(function(resp) {

        return resp.json();

    })
    .then(showCountriesList);
}

// funkcja pokazująca listę krajów
function showCountriesList(resp) {
    
    countriesList.innerHTML = ''; //wyczyszczenie listy krajów po poprzednim zapytaniu
    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });
  }