var EventEmitter = require('events');
var util = require('util');

function Person(){
    this.firstName = 'Hugo';
    this.lastName = 'Alvarez';
}

Person.prototype.greet = function(){
    console.log(`Hello ${this.firstName} ${this.lastName} ${this.badgenumber}`);
}

function PoliceMan(){
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(PoliceMan, Person);

var officer = new PoliceMan();
officer.greet();
