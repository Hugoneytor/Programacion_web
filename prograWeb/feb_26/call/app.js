//El metodo "call" llama a una funcion con valor "this"
//Javascript funciones siempre es firstClass

//diferencia "apply" envia los parametros como un vector
//"call" manda los parametros como argumentos

var obj = {
    name:'Joe Doe',
    greet: function(param, param2){
        console.log(`Hello ${this.name}, ${param}` );
    }
}



obj.greet();

//Creamos las variables que usaremos en el metodo apply
var param = 'Hugo';
var param2 = 'Alvarez';

//La llamada call que usamos a continuacion es considerada como el this
obj.greet.call({name:'Jane Doe'});

obj.greet.apply({name: 'Jane Doe'}, [param, param2]);
//Con esta llamada apply modificamos el campo this por los parametros que le siguen

