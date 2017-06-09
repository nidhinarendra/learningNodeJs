var http = require('http');
var fs = require('fs');

//if the file is in a different folder
//then use __dirname and concatenate the file name.
var myReadStream = fs.createReadStream('readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream('writeme.txt')
myReadStream.pipe(myWriteStream);


var server = http.createServer(function(req, res){
  console.log('The request made was: ' + req.url);
res.writeHead(200, {'Content-Type': 'text/plain'});
//if the file is in a different folder
//then use __dirname and concatenate the file name.
var myReadStream = fs.createReadStream('readme.txt', 'utf8');
myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('server listeing on 3000');
