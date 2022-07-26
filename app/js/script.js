let ipAdd = document.querySelector('#ipIn');
let submit = document.querySelector('.submit');
let address = document.querySelector('.address');
let loc = document.querySelector('.location');
let timezone = document.querySelector('.timezone');
let isp = document.querySelector('.isp');

// submit.addEventListener('click', () => {
//     let ip = ipAdd.value;

//     let api = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_dJHitRNMZWs203ndPIrfdwkQIIfJK&ipAddress=';
//     // let apiAddress = ip + '8.8.8.8';
//     let apiAddress = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_dJHitRNMZWs203ndPIrfdwkQIIfJK&ipAddress=8.8.8.8';
//     fetch(apiAddress)
//         .then(response => response.json())
//         .then(data => {
//             address.innerHTML = input;

//             loc.innerHTML = data.location.city;
//         })
//         .catch(err => 'IP Address does not exist')
        
// })