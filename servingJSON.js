var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
  console.log('The request made was: ' + req.url);
res.writeHead(200, {'Content-Type': 'application/json'});

var someObject = {
  Name: 'Nidhi',
  University: 'SJSU',
  Age: 28,
  Course: 'Computers'
};

res.end(JSON.stringify(someObject));

});

server.listen(3000, '127.0.0.1');
console.log('server listeing on 3000');
