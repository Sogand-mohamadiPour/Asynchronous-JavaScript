'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Function to render a country card
const renderCountry = function (data, className = '') {
  // Take neccesary information from obj
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0];

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.continents}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency.name} (${currency.symbol})</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getCountryData = function(country){
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Extract language and currency safely
//     const language = Object.values(data.languages)[0];
//     const currency = Object.values(data.currencies)[0];

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.continents}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
//         <p class="country__row"><span>🗣️</span>${language}</p>
//         <p class="country__row"><span>💰</span>${currency.name} (${currency.symbol})</p>
//       </div>
//     </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// });
// };

// getCountryData('portugal');
// getCountryData('usa');
///////////////////////////////////////////////////////////////////////////////////////////////

//v2


// Function to get country data from API
// const getCountryAndNeighbour = function (country) {
// Ajax call country 1
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

// Render country
// renderCountry(data);

//Get neighbour country (2)
// const neighbour = data.borders?.[0];

// if (!neighbour) return;

// Ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// Test with countries
// getCountryAndNeighbour('usa');


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();


// const request = fetch('https://restcountries.com/v3.1/name/portugal')
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//     console.log(response);
//     return response.json();
//   }).then(function (data) {
//     console.log(data);
//     renderCountry(data[0])
//   });
// };
/////////////////////////////////////////////////
// const request = fetch('https://restcountries.com/v3.1/name/portugal')

//   const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Country not found (${response.status})`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Check if data is empty or invalid
//         if (!data || data.length === 0) {
//           throw new Error('Country not found');
//         }

//         renderCountry(data[0]);

//         // Check if country has borders
//         const neighbour = data[0].borders?.[0];

//         if (!neighbour) return;

//         // Country 2 - fetch neighbour
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       })
//       .then(response => {
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`);

//         return response.json();
//       })
//       .then(data => renderCountry(data[0], 'neighbour'))
//       .catch(err => {
//         console.error(`${err} 💥💥💥`);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       });
//   }

//   btn.addEventListener('click', function () {
//     getCountryData('portugal');
//   });
////////////////////////////////////////////////


// Using the getJSON helper function
// simplfied version
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok)
//       throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const request = fetch('https://restcountries.com/v3.1/name/portugal')

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`,
//     'Country not found')
//     .then(data => {
//       // Check if data is empty or invalid
//       if (!data || data.length === 0) {
//         throw new Error('Country not found');
//       }

//       renderCountry(data[0]);

//       // Check if country has borders
//       const neighbour = data[0].borders?.[0];


//       if (!neighbour) throw new Error("No neighbour found!");

//       // Country 2 - fetch neighbour
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found');
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });


// console.log('Test start');

// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');
// //////////////////////

// const latteryPromis = new Promise(function (resolve, reject) {
//   console.log('Lattery draw is happening 🔮');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     }
//     else {
//       reject(new Error('You lost your money 💩'))
//     }
//   }, 2000)
// });

// latteryPromis.then(res => console.log(res)).catch
//   (err => console.error(err));

// promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2).then(() =>  {
//   console.log('I waited for 2 seconds');
//   return wait(1);
// }).then( () => console.log('I waited for 1 second'));


// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// Async Await
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation  
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=904460109414542997888x62139`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const countryName = encodeURIComponent(dataGeo.country || '');
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
}
whereAmI();
console.log('FIRST');
