let a = require('./greet');
a();

let b = require('./greet2').greet;
b();

let c = require('./greet3');
c.greet();
c.greeting = 'Changed hello world';

let greet3b = require('./greet3');
greet3b.greet();

let Greet4 = require('./greet4');
let gtr = new Greet4();
gtr.greet();

