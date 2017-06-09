var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
  console.log('The request made was: ' + req.url);
res.writeHead(200, {'Content-Type': 'text/html'});
//if the file is in a different folder
//then use __dirname and concatenate the file name.
var myReadStream = fs.createReadStream('index.html');

myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('server listeing on 3000');
