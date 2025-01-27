// node js: Event - Driver

// Event (olay) 
// Listener (dinleyici)

//Event Module Create
const dataEvent = require('events');

//Event Emitter Create
const dataEmitter = new dataEvent.EventEmitter();

//Event Name
const eventName = "Data Send";

//on: çok kere
//once: 1 kere
dataEmitter.on(eventName, ()=>{
    console.log("Data Send Event: ");

});

// Event Trigger
dataEmitter.emit(eventName);
dataEmitter.emit(eventName);

setInterval(()=>{
    dataEmitter.emit(eventName);
}, 2000); //2sn