var smtpTransport = require('nodemailer-smtp-transport');
var express = require('express');

//when we install the middleware body-parser, we need to require it here to use
var bodyParser = require('body-parser');

//to send a mail to a person from the form
var nodemailer = require('nodemailer');

var app = express();

//Function required by the nodemailer
//var router = express.Router();

//this is the function which is required to parse the url to POST a req
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

app.post('/contact', urlencodedParser, function(req,res){
  res.render('contact-success', {data: req.body});
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: 'nidhi_bluebell@yahoo.co.in',
      pass: '***'
    }
  }));
  var mailOptions = {
    from: 'nidhi_bluebell@yahoo.co.in>', // sender address
    to: req.query.email, // list of receivers
    subject: 'Email Example', // Subject line
    text: 'Hi from node' //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log('There was a problem');
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
res.writeHead(200, {'Content-Type': 'application/json'})

})

//id is a variable and can be replaced with anything.
app.get('/profile/:id', function(req,res){
  var details = {Age: 30, Sex: 'Female', Hobbies: ['Fishing', 'cycling', 'Shopping']}
  res.render('profile', {person: req.params.id, data: details});
})

app.listen(3000);
