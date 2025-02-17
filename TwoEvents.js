

var events = require("events");

var eventEmitter = new events.EventEmitter();

var connection = function(){
    console.log("Connection Successful");
    eventEmitter.emit('dataReading');
}

var dataReceived = function(){
    console.log('data received successfully.');
}

eventEmitter.on('connection', connection);
eventEmitter.on('dataReading', dataReceived);

eventEmitter.emit('connection');
console.log("Program Ended.");