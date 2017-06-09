var myEvents = require('events');
var myUtil = require('util');

var person = function(name){
  this.name = name;
}

myUtil.inherits(person, myEvents.EventEmitter);

var person1 = new person('Adam');
var person2 = new person('Brain');
var person3 = new person('David');
var listPerson = [person1, person2, person3];

listPerson.forEach(function(person){
  person.on('speak', function(message){
    console.log(person.name + ' said: ' + message )
  })
})

person1.emit('speak', 'Hello everybody!');
