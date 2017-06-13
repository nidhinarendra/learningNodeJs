var express = require('express');
var app = express();
//we have installed ejs(embedded javascript) to embed a javascript into html page
//to use its functionality, we need to tell express that the
//viewing engine is gonna be ejs

app.set('view engine', 'ejs');

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
  var details = {Age: 30, Sex: 'Female', Hobbies: ['Fishing', 'cycling', 'Shopping']}
  res.render('profile', {person: req.params.id, data: details});
})

app.listen(3000);
