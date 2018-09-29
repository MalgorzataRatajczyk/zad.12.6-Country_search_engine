"use strict"
// zmienna z adresem url i z listą krajów
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countryTable');

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
    			
    countryTable.innerHTML = ''; //wyczyszczenie listy krajów po poprzednim zapytaniu
    resp.forEach(function(item) {
			
			// zmienna z kodem HTML tabeli
			var table = ' \
				<table> \
					<thead> \
						<tr><th></th><th>' + item.name + '</th></tr> \
					</thead> \
					<tbody> \
						<tr> \
							<th colspan="2">Background Information:</th></tr> \
						<tr> \
							<th>Continent:</th><td id="continent">' + item.region + '</td> \
						</tr> \
						<tr> \
							<th>Capital:</th><td id="capital">' + item.capital + '</td> \
						</tr> \
						<tr> \
							<th>Land area:</th><td id="area">' + item.area + '</td> \
						</tr> \
						<tr> \
							<th>Population:</th><td id="population">' + item.population + '</td> \
						</tr>\
						<tr> \
							<th>Language(s):</th><td id="language">' + item.languages + '</td> \
						</tr> \
						<tr> \
							<th>Currency:</th><td id="currency">' + item.currencies + '</td> \
						</tr> \
					</tbody> \
				</table>';
			
			// wstawienie tabeli do div'a o id "countryTable"
			var finalTable = document.getElementById('countryTable').innerHTML += table;
			
    });

  }

  

