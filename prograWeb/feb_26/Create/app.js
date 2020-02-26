// Creaciin de un objeto Persona
var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return `${this.firstname} ${this.lastname}`;
    }
}

//Se puede crear la persona con la funcion object.create con el parametro del objeto creado anteriormente
var john = Object.create(person);
john.firstname = 'Joe';
john.lastname = 'Doe';
//Se le agregan los atributos de primer y segundo nombre


var jane = Object.create(person);
jane.firstname = 'jane';
jane.lastname = 'Doe';

//imprimimos los valores de las personas.
console.log(john.greet());
console.log(jane.greet());