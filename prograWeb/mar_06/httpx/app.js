/*
Lo que tenemos que hacer siempre para realizar una peticion a un servidor API es registrarnos y 
obtener la key
*/

//
const request = require('request')
var fahrenheitToCelsius = require('fahrenheit-to-celsius');


//
const url = 'https://api.darksky.net/forecast/c850702f43107572964f34d441ba8fc8/19.2433,-103.725?lang=es'


// Request tiene dos parametros, el segundo es un callback que recibe dos parametros: error y response
//Si no hay error podemos imprimir nuestra respuesta.
request({url, json:true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently);
    // console.log(fahrenheitToCelsius(data.currently.summary));
    console.log(fahrenheitToCelsius(response.body.currently.temperature));
    console.log(response.body.daily.data[0].summary);
})


//Todas las restful api contestan un JSON