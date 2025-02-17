

var events = require("events");
const { listeners } = require("process");

var eventEmitter = new events.EventEmitter();

var connection = function(){  // Listener 1
    console.log("\nConnection Successful");
}

var dataReceived = function(){  // Listener 2
    console.log('data received successfully.\n');
}

// One event (dataReading) binds with 2 Listener Functions
eventEmitter.addListener('dataReading', connection);
eventEmitter.on('dataReading', dataReceived);

// Get the count of listeners for the 'dataReading' event
var ListenerCount = eventEmitter.listenerCount('dataReading');
console.log(ListenerCount + " Listener(s) listening to the dataReading Event");

console.log("\nThe Listener are :")
eventEmitter.listeners('dataReading').forEach(function(listener){ // eventEmitter.listeners('dataReading') --> This gives an entire array of Listeners
    console.log(listener);
});

eventEmitter.emit('dataReading');

// Remove the binding of listener1 function
eventEmitter.removeListener('dataReading', connection);
console.log("connection eventHandler(observer) will not listen now.");

// Get the count of listeners for the 'dataReading' event
var ListenerCount = eventEmitter.listenerCount('dataReading');
console.log(ListenerCount + " Listener(s) listening to the dataReading Event");

console.log("\nThe Listener are :")
eventEmitter.listeners('dataReading').forEach(function(listener){
    console.log(listener);
});

eventEmitter.emit('dataReading');
console.log("Program Ended.");
