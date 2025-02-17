

var events = require("events");

var eventEmitter = new events.EventEmitter();

// var myEventHandler = function(){
//     console.log("I hear a Scream: Ganpati Bappa Morya");
// }

eventEmitter.on('scream',function(){
    console.log("I hear a Scream: Ganpati Bappa Morya");
});

eventEmitter.emit('scream');
