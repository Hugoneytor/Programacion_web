// Creación de un clase con un objeto vacío
function Emitter(){
    this.events = {};
}

// A la clase Emisor se le agrega una funcion llamada "on", donde agregamos dos parametros
// El tipo y un listener
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// A la misma clase Emisor agregamos otra función llamada "emit" 
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;

