var http = require('http');
var fs = require('fs');

//Estaremos escribiendo los headers del paquete 
http.createServer(function(req,res){

    //Sera texto plano
    res.writeHead(200, { 'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);

    //Estara escuchando a una peticion en el local host del puerto 1337
}).listen(1337, '127.0.0.1');