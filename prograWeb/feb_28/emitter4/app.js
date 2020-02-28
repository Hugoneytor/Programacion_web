'use strict';

var EventEmitter = require('events');
var util = require('util');
// Util me permite combinar las funcionalidades

class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = "Hello World";
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

let data = 'corona';

var greeter1 = new Greetr();


greeter1.on('greet', function(data){
    console.log('Someone greeted! '+ data);
});

greeter1.greet(data);

