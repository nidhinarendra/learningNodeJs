var express = require('express');
var app = express();
//we have installed ejs(embedded javascript) to embed a javascript into html page
//to use its functionality, we need to tell express that the
//viewing engine is gonna be ejs

app.set('view engine', 'ejs');

/*The style sheet will not be linked or accessible by this code and hence
we do not get any styles when we run this code.
we need a middleware between the req and res to include such static files
like css styling.*/

//to fire the middleware express has some inbuilt functionality
app.use('/assets', express.static('assets'));
//This allows the styling to be available to all the pages

//send can be used when we have to send a normal string to the web page.
//sendFile needs to be used to send a HTML file
app.get('/', function(req,res){
  //res.send('This is the home page');
  res.render('home');
})

app.get('/contact', function(req,res){
  res.render('contact', {qs: req.query});
})

//id is a variable and can be replaced with anything.
app.get('/profile/:id', function(req,res){
  var details = {Age: 30, Sex: 'Female', Hobbies: ['Fishing', 'cycling', 'Shopping']}
  res.render('profile', {person: req.params.id, data: details});
})

app.listen(3000);
