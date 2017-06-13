var express = require('express');
var app = express();

//send can be used when we have to send a normal string to the web page.
//sendFile needs to be used to send a HTML file
app.get('/', function(req,res){
  //res.send('This is the home page');
  res.sendFile(__dirname + '/index.html');
})

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/contact.html');
})

//id is a variable and can be replaced with anything.
app.get('/profile/:id', function(req,res){
  res.send('The profile id you requested for is ' + req.params.id);
})

app.listen(3000);
