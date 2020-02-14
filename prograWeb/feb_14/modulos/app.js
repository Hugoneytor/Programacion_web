let a = require('./greet');
let b = require('./greet2').greet;
let c = require('./greet3');

a();
b();
c.greet();