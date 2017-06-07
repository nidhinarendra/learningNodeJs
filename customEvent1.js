var myEvents = require('events');

var customEvent = new myEvents.EventEmitter();

customEvent.on('firstEvent', function(message){
  console.log(message);
});

customEvent.emit('firstEvent',
'Hello people! This is message is displayed by the custom event emitter');
