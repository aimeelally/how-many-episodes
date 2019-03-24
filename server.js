var http = require('http');
var fs = require("fs");

http.createServer(function(request, response) {

	if(request.url === "/index"){
		sendFileContent(response, "index.html", "text/html");
	}
	else if(request.url === "/"){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
	}
	else if(/^\/[a-zA-Z0-9\/]*.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/css");
	}
	else{
		console.log("Requested URL is: " + request.url);
		response.end();
	}
}).listen(3000);

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}

// const https = require("https");
// const url = "https://api.thetvdb.com/search/series?name=game%20of%20thrones";
// let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTM0ODYxOTcsImlkIjoiIiwib3JpZ19pYXQiOjE1NTMzOTk3OTcsInVzZXJpZCI6NTIyMzgyLCJ1c2VybmFtZSI6ImxhbGx5YWltZWVldzkifQ.ZUiVnJCCX6s6_X45uep022J1U9GmX8pi02LXHRY72BmLYYCGfpyMYXpI-pqBQ5PJMJjVHn4c3oKymh5i5EVpIDQ1eKmGDDX1b1IZDMwXBNVq9VeCI10yKT7FpgjefZlhVzAd9ZjD-45iKQdrtdyx-zX7aiOiPWD29UxboSqAp4LFDZ1Pimdma1GaZU8Mij1kW0noGRR9YH--6KC8eZRRqYzOvZUBVralGV62HgbVXm6TCML9IT4YHv52TGRIbZ5xIab1OlLaEGVW1qqEMtZ8t9UautSzJSFF7N9Mr4nNZ2oiEr5jyPkLSCEfq8CVlNqsR_cj8rVr8_is164Z6TzdYA';
// // let http_options = {
// //   headers: {
// //     Authorization: {
// //       bearer: token
// //     }
// //   }
// // }

// var http_options = {
//   host: 'api.thetvdb.com',
//   path: '/search/series?name=game%20of%20thrones',
//   method: 'GET',
//   headers: {
//     'Authorization': 'Bearer ' + token
//   }
// };

// var req = https.get(http_options, (res) => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     console.log(body);
//   });
//   res.on("error", () => {
//     console.log(res);
//   });
// });

// req.end();