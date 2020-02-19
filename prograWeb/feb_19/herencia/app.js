function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person('John', 'Doe');


Person.prototype.greet = function(){
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
}

john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();
