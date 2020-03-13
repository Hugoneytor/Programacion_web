const random = require("simple-random-number-generator");
const swapi = require('swapi-node');
const object = require('./address');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');

const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=jfEvlaB7AsRBlMIydCOZXNP55zRAuGWu&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500'

let params = {
  min: 1,
  max: 20,
  integer: true
};

swapi.getPerson(random(params)).then((result) => {
    console.log(`${result.name} vive en la calle ${object.street} y hay una temperatura de: `);
});