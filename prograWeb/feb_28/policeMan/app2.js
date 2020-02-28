'use strict';

var EventEmitter = require('events');
var util = require('util');


class Person {
    constructor(){
        this.firstName = 'Hugo';
        this.lastName = 'Alvarez';
    }

    greet(){
        console.log(`Hello ${this.firstName} ${this.lastName} ${this.badgenumber}`);
    }
}

class PoliceMan extends Person{
    constructor(){
        super();
        this.badgenumber = '1234';
    }
    
}

let police = new PoliceMan();

police.greet();


//what thw heck is the event loop anyway || philip roberts || jsconf eu