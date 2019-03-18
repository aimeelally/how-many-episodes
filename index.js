// var request = require('request');

//   request.post(
//       'https://api.thetvdb.com/login',
//       { json: { key: 'value' } },
//       function (error, response, body) {
//         debugger;
//           if (!error && response.statusCode == 200) {
//               console.log(body);
//           }
//       }
//   );

// module.exports = function() {
//   console.log('hi');
// };

console.log('I am running!');

var request = require('request');
(function() {
  // request.post(
  //   'https://api.thetvdb.com/login',
  //   { json: { 
  //       'apikey': 'Z3BTX2TVJCAZFDPX',
  //       'userkey': 'AKKLFY7DSIO9JU8Q',
  //       'username': 'lallyaimeeew9'
  //     } },
  //   function (error, response, body) {
  //       if (!error && response.statusCode == 200) {
  //           console.log(body);
  //       }
  //   }
  // );

  let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTIyMTM2NDcsImlkIjoiIiwib3JpZ19pYXQiOjE1NTIxMjcyNDcsInVzZXJpZCI6NTIyMzgyLCJ1c2VybmFtZSI6ImxhbGx5YWltZWVldzkifQ.zbEQwoRBQ2I0-OQV8gTUrQ3a7u6_x2nzyV6eKyD_qrRCcT1vvCOJ-XddgmA5FhoE0ns3ff_NAIWOr-B-BXww3fjdxR5s_tlWBZmP7eXNXf2rMOdx2y2QoTVxXm8r8VzTfbUu0T1FOZU1BL2QWnsZ6kX9iVvWg1DWQKKjfxcoRfSyfzZCGxmGxW73bTtwvtU8upev2TYxQasipKD_NliTUsyz3ofy4joxuKPrhYiInpgQN2dbIj_KuSPFvy0Mr0AKgRLBMbqTHQYM9PAFrURnqZyyu2_NLfr_7NjGatj1J-FZ23FeUzH-H6f_EuBlt3hkSca8pKtq8QNdKDReOE2sFw';
  request.get('https://api.thetvdb.com/search/series?name=game%20of%20thrones', {
    json: true,
    'auth': {
      'bearer': token
    },
    function (error, response, body) {
      console.log(error, response, body)
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
  });
  // request.get(
  //   'https://api.thetvdb.com/search/series?name=game%20of%20thrones',
  //   { Authorization: Bearer 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTIyMTM2NDcsImlkIjoiIiwib3JpZ19pYXQiOjE1NTIxMjcyNDcsInVzZXJpZCI6NTIyMzgyLCJ1c2VybmFtZSI6ImxhbGx5YWltZWVldzkifQ.zbEQwoRBQ2I0-OQV8gTUrQ3a7u6_x2nzyV6eKyD_qrRCcT1vvCOJ-XddgmA5FhoE0ns3ff_NAIWOr-B-BXww3fjdxR5s_tlWBZmP7eXNXf2rMOdx2y2QoTVxXm8r8VzTfbUu0T1FOZU1BL2QWnsZ6kX9iVvWg1DWQKKjfxcoRfSyfzZCGxmGxW73bTtwvtU8upev2TYxQasipKD_NliTUsyz3ofy4joxuKPrhYiInpgQN2dbIj_KuSPFvy0Mr0AKgRLBMbqTHQYM9PAFrURnqZyyu2_NLfr_7NjGatj1J-FZ23FeUzH-H6f_EuBlt3hkSca8pKtq8QNdKDReOE2sFw' },
  //   function (error, response, body) {
  //       if (!error && response.statusCode == 200) {
  //           console.log(body);
  //       }
  //   }
  // );
})();