var http = require('http');

var server = http.createServer(function(req, res){
  console.log('The request made was: ' + req.url);
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('How are you?');
});

server.listen(3000, '127.0.0.1');
console.log('server listeing on 3000');
