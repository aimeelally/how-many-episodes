'use strict';

const https = require('https-browserify');
let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTM0ODYxOTcsImlkIjoiIiwib3JpZ19pYXQiOjE1NTMzOTk3OTcsInVzZXJpZCI6NTIyMzgyLCJ1c2VybmFtZSI6ImxhbGx5YWltZWVldzkifQ.ZUiVnJCCX6s6_X45uep022J1U9GmX8pi02LXHRY72BmLYYCGfpyMYXpI-pqBQ5PJMJjVHn4c3oKymh5i5EVpIDQ1eKmGDDX1b1IZDMwXBNVq9VeCI10yKT7FpgjefZlhVzAd9ZjD-45iKQdrtdyx-zX7aiOiPWD29UxboSqAp4LFDZ1Pimdma1GaZU8Mij1kW0noGRR9YH--6KC8eZRRqYzOvZUBVralGV62HgbVXm6TCML9IT4YHv52TGRIbZ5xIab1OlLaEGVW1qqEMtZ8t9UautSzJSFF7N9Mr4nNZ2oiEr5jyPkLSCEfq8CVlNqsR_cj8rVr8_is164Z6TzdYA';

var http_options = {
  host: 'api.thetvdb.com',
  path: '/search/series?name=game%20of%20thrones',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};

var req = https.get(http_options, (res) => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(body);
  });
  res.on("error", () => {
    console.log(res);
  });
});

req.end();

// let episodesBySeason = [ 10, 10, 10, 10, 10, 10, 7 ];
// let totalNumEpisodes = episodesBySeason.reduce((pre, cur) => pre ? pre + cur : pre = 0 ),
//     numberWeeksLeft = getNumWeeksLeft();

// howManyEpisodesLeftToWatch = () => {
//   let numEpisodesLeftToWatch = getNumEpisodesRemaining();

//   let el = document.getElementById('numEpisodes'),
//       numEpisodesPerWeek = numEpisodesLeftToWatch/numberWeeksLeft;
  
//   el.innerHTML = `You need to watch at least ${numEpisodesPerWeek} episodes a week to be ready for season 8.`;
//   el.style.opacity = '1';
  
//   return el;
// }

// function getNumWeeksLeft() {
//   let today = new Date(),
//       seasonStartDate = new Date(2019, 3, 15);

//   return Math.round((seasonStartDate - today) / (7 * 24 * 60 * 60 * 1000));
// }

// function getNumEpisodesRemaining() {
//   let currentSeason = Number(document.getElementById('season').value) - 1 || 0,
//       currEpisode = Number(document.getElementById('episode').value) || 0;

//   let totalEpisodesLeft = episodesBySeason
//         .slice(currentSeason, episodesBySeason.length)
//         .reduce((pre, curr) => pre ? pre + curr : pre = 0)
//         - currEpisode;

//   return totalEpisodesLeft;
// }