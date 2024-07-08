// Hardcoded list of cities (for demonstration purposes)
const cities = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Sydney",
    "Los Angeles",
    "Berlin",
    "Rome",
    "Moscow",
    "Beijing",
    "Madrid",
    "Toronto",
    "Seoul",
    "Mexico City",
    "Cairo",
    "Hong Kong",
    "Bangkok",
    "Dubai",
    "Singapore",
    "Istanbul",
    "Mumbai",
    "Rio de Janeiro",
    "Cape Town",
    "Buenos Aires",
    "Stockholm",
    "Amsterdam",
    "Barcelona",
    "Vienna",
    "Prague",
    "Athens",
    "Lisbon",
    "Osaka",
    "Jakarta",
    "Manila",
    "New Delhi",
    "Kuala Lumpur",
    "Auckland",
    "Hanoi",
    "San Francisco",
    "Chicago",
    "Washington D.C.",
    "Miami",
    "Dallas",
    "Seattle",
    "Vancouver",
    "Montreal",
    "Dublin",
    "Zurich",
    "Geneva",
    "Copenhagen",
    "Oslo",
    "Helsinki",
    "Warsaw",
    "Budapest",
    "Bucharest",
    "Sofia",
    "Belgrade",
    "Bratislava",
    "Ljubljana",
    "Zagreb",
    "Skopje",
    "Sarajevo",
    "Tirana",
    "Podgorica",
    "Prishtina",
    "Nicosia",
    "Malta",
    "Reykjavik",
    "Luxembourg City",
    "Vilnius",
    "Riga",
    "Tallinn",
    "Brussels",
    "Lyon",
    "Marseille",
    "Nice",
    "Strasbourg",
    "Lille",
    "Porto",
    "Valencia",
    "Seville",
    "Milan",
    "Naples",
    "Venice",
    "Florence",
    "Turin",
    "Bologna",
    "Bari",
    "Palermo",
    "Catania",
    "Genoa",
    "Trieste",
    "Padua",
    "Verona",
    "Bergamo",
    "Brescia",
    "Fukuoka",
    "Sapporo",
    "Sendai",
    "Nagoya",
    "Kyoto",
    "Kobe",
    "Yokohama",
    "Kawasaki",
    "Saitama",
    "Hiroshima",
    "Kitakyushu",
    "Niigata",
    "Okayama",
    "Kumamoto",
    "Shizuoka",
    "Kagoshima",
    "Naha",
    "Toyama",
    "Matsuyama",
    "Miyazaki",
    "Okinawa",
    "Akita",
    "Kanazawa",
    "Fukushima",
    "Nagano",
    "Asahikawa",
    "Otaru",
    "Hakodate",
    "Obihiro",
    "Wakkanai",
    "Abashiri",
    "Kushiro",
    "Nemuro",
    "Muroran",
    "Tomakomai",
    "Yao",
    "Sakai",
    "Higashiosaka",
    "Kurashiki",
    "Matsusaka",
    "Tsu",
    "Uwajima",
    "Fukuchiyama",
    "Hikone",
    "Morioka",
    "Akashi",
    "Niihama",
    "Kure",
    "Chiba",
    "Kawagoe",
    "Kashiwa",
    "Matsudo",
    "Tachikawa",
    "Takasaki",
    "Tama",
    "Tokorozawa",
    "Utsunomiya",
    "Yamato",
    "Yokosuka",
    "Zama",
    "Fujisawa",
    "Hirakata",
    "Ibaraki",
    "Nara",
    "Neyagawa",
    "Suita",
    "Takarazuka",
    "Takatsuki",
    "Toyonaka",
    "Kiryu",
    "Fukaya",
    "Chikusei",
    "Fujieda",
    "Kanoya",
    "Kushimoto",
    "Gobo",
    "Kumano",
    "Shirahama",
    "Tanabe",
    "Kashihara",
    "Sakurai",
    "Tenri",
    "Yamatotakada",
    "Ikoma",
    "Kashiba",
    "Nabari",
    "Yamatokoriyama",
    "Gojo",
    "Gose",
    "Uda",
    "Koryo",
    "Sakurai",
    "Kumamoto",
    "Shizuoka",
    "Kagoshima",
    "Naha",
    "Toyama",
    "Matsuyama",
    "Miyazaki",
    "Okinawa",
    "Akita",
    "Kanazawa",
    "Fukushima",
    "Nagano",
    "Asahikawa",
    "Otaru",
    "Hakodate",
    "Obihiro",
    "Wakkanai",
    "Abashiri",
    "Kushiro",
    "Nemuro",
    "Muroran",
    "Tomakomai",
    "Yao",
    "Sakai",
    "Higashiosaka",
    "Kurashiki",
    "Matsusaka",
    "Tsu",
    "Uwajima",
    "Fukuchiyama",
    "Hikone",
    "Morioka",
    "Akashi",
    "Niihama",
    "Kure",
    "Chiba",
    "Kawagoe",
    "Kashiwa",
    "Matsudo",
    "Tachikawa",
    "Takasaki",
    "Tama",
    "Tokorozawa",
    "Utsunomiya",
    "Yamato",
    "Yokosuka",
    "Zama",
    "Fujisawa",
    "Hirakata",
    "Ibaraki",
    "Nara",
    "Neyagawa",
    "Suita",
    "Takarazuka",
    "Takatsuki",
    "Toyonaka",
    "Kiryu",
    "Fukaya",
    "Chikusei",
    "Fujieda",
    "Kanoya",
    "Kushimoto",
    "Gobo",
    "Kumano",
    "Shirahama",
    "Tanabe",
    "Kashihara",
    "Sakurai",
    "Tenri",
    "Yamatotakada",
    "Ikoma",
    "Kashiba",
    "Nabari",
    "Yamatokoriyama",
    "Gojo",
    "Gose",
    "Uda",
    "Koryo",
    "Sakurai",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Diego",
    "Denver",
    "Atlanta",
    "Boston",
    "Detroit",
    "Manchester",
    "Edinburgh",
    "Glasgow",
    "Leeds",
    "Liverpool",
    "Birmingham",
    "Sheffield",
    "Manchester",
    "Bristol",
    "Dublin",
    "Belfast",
    "Cardiff",
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Utrecht",
    "Eindhoven",
    "Groningen",
    "Milan",
    "Turin",
    "Naples",
    "Bologna",
    "Florence",
    "Venice",
    "Stockholm",
    "Gothenburg",
    "Malmö",
    "Uppsala",
    "Linköping",
    "Helsinki",
    "Espoo",
    "Tampere",
    "Vantaa",
    "Oulu",
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Bordeaux",
    "Lille",
    "Porto",
    "Lisbon",
    "Amadora",
    "Brussels",
    "Antwerp",
    "Ghent",
    "Charleroi",
    "Liège",
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Düsseldorf",
    "Leipzig",
    "Dortmund",
    "Essen",
    "Bremen",
    "Hanover",
    "Dresden",
    "Nuremberg",
    "Vienna",
    "Graz",
    "Linz",
    "Salzburg",
    "Innsbruck",
    "St. Pölten",
    "London",
    "Birmingham",
    "Manchester",
    "Leeds",
    "Glasgow",
    "Liverpool",
    "Newcastle",
    "Sheffield",
    "Bristol",
    "Edinburgh",
    "Cardiff",
    "Dublin",
    "Belfast",
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Utrecht",
    "Eindhoven",
    "Groningen",
    "Milan",
    "Turin",
    "Naples",
    "Bologna",
    "Florence",
    "Venice",
    "Stockholm",
    "Gothenburg",
    "Malmö",
    "Uppsala",
    "Linköping",
    "Helsinki",
    "Espoo",
    "Tampere",
    "Vantaa",
    "Oulu",
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Bordeaux",
    "Lille",
    "Porto",
    "Lisbon",
    "Amadora",
    "Brussels",
    "Antwerp",
    "Ghent",
    "Charleroi",
    "Liège",
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Düsseldorf",
    "Leipzig",
    "Dortmund",
    "Essen",
    "Bremen",
    "Hanover",
    "Dresden",
    "Nuremberg",
    "Vienna",
    "Graz",
    "Linz",
    "Salzburg",
    "Innsbruck",
    "St. Pölten",
    "Egypt"
];

// Function to filter cities based on user input for autocomplete
function filterCities(input) {
    return cities.filter(city => city.toLowerCase().startsWith(input.toLowerCase()));
}

// Function to display autocomplete suggestions
function displaySuggestions(input) {
    const filteredCities = filterCities(input);
    suggestions.innerHTML = '';

    filteredCities.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.addEventListener('click', () => {
            cityInput.value = city;
            suggestions.innerHTML = '';
        });
        suggestions.appendChild(li);
    });

    if (filteredCities.length > 0) {
        suggestions.style.display = 'block'; // Show suggestions if there are any
    } else {
        suggestions.style.display = 'none'; // Hide suggestions if there are none
    }
}

const cityInput = document.getElementById("cityInput");
const suggestions = document.getElementById("suggestions");
const searchButton = document.getElementById("searchButton");

// Event listener for input change (keyup event)
cityInput.addEventListener('keyup', () => {
    const input = cityInput.value.trim();

    if (input.length === 0) {
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
        return;
    }

    displaySuggestions(input);
});

// Event listener for search button click
searchButton.addEventListener('click', () => {
    const selectedCity = cityInput.value.trim();

    if (selectedCity === '') {
        alert('Please enter a city name or select from suggestions.');
        return;
    }

    const APIkey = '703cf14ff9b549f593a23559242506';
    fetch(`https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${selectedCity}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            const condition = json.current.condition.text.toLowerCase();

            // Set the weather icon based on condition
            switch (condition) {
                case 'clear':
                    image.src = 'images/clear.png';
                    break;
                case 'rain':
                    image.src = 'images/rain.png';
                    break;
                case 'snow':
                    image.src = 'images/snow.png';
                    break;
                case 'cloudy':
                case 'partly cloudy':
                    image.src = 'images/cloud.png';
                    break;
                case 'mist':
                case 'haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/cloud.png';
                    break;
            }

            // Set the background image based on condition
            switch (condition) {
                case 'clear':
                    document.body.style.backgroundImage = 'url(images/clear.gif)';
                    break;
                case 'rain':
                    document.body.style.backgroundImage = 'url(images/rain.gif)';
                    break;
                case 'snow':
                    document.body.style.backgroundImage = 'url(images/snow.gif)';
                    break;
                case 'cloudy':
                case 'partly cloudy':
                    document.body.style.backgroundImage = 'url(images/cloud.gif)';
                    break;
                case 'mist':
                case 'haze':
                    document.body.style.backgroundImage = 'url(images/mist.gif)';
                    break;
                default:
                    document.body.style.backgroundImage = 'url(images/cloud.gif)';
                    break;
            }

            temperature.innerHTML = `${json.current.temp_c}&deg;C`;
            description.textContent = json.current.condition.text;
            humidity.textContent = `${json.current.humidity}%`;
            wind.textContent = `${json.current.wind_kph} km/h`;

            weatherBox.style.display = 'block';
            weatherDetails.style.display = 'block';
        })

});
