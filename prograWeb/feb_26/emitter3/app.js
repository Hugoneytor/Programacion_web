var EventEmitter = require('events');
var util = require('util');
// Util me permite combinar las funcionalidades

function Greetr(){
    this.greeting = "Hello World";
}

util.inherits(Greetr, EventEmitter);
//inherits hace que el primer parametro herede las funciones del segundo parametro


Greetr.prototype.greet = function(data){
    console.log(this.greeting + " " + data);
    this.emit('greet', data);
    //El metodo emit manda a buscar la funcion que se llame greet
}

//Creamos la clase Greetr
var greeter1 = new Greetr();

//La funcion siguiente "on" hace que llames a la funcion greet para anadirle la funcion que esta como segundo parametro
greeter1.on('greet', function(data){
    console.log('Someone greeted! '+ data);
});

greeter1.greet("Tony");
