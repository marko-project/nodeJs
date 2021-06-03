// events

const EventEmitter = require('events')

//invoke it
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age)=>{
    console.log(`date recived ${name} with age: ${age}`);
})
customEmitter.on('response', ()=>{
    console.log('some other logic ');
})


// emits on name passe
// -> can emmit more than one time based on the same name

// -> order matters --> first on then emit !!!!
customEmitter.emit('response', 'john',34)
