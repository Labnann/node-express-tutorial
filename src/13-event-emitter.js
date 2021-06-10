const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`Data received ${name}, ${id}`);
});

customEmitter.on('response',()=>{
    console.log("some other Logic ");
});


customEmitter.emit('response','John',33);