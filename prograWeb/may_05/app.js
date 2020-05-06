const express = require('express');

const app = express();

const port = 3000;

//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));

//route handler para la raiz
app.get('/', (req,res)=>{
    res.send('<html><head> <link href=/assets/style.css type=text/css rel=stylesheet> </head><title>Page title</title><body><h1>My first Heading</h1><p>My first paragraph</p></body></html>');
})

app.get('/person/:id', (req,res)=>{
    res.send(`<html><head> <link href=/assets/style.css type=text/css rel=stylesheet> </head><title>Page title</title><body><h1>el id de la persona es ${req.params.id}</h1><p>My first paragraph</p></body></html>`);
});



app.listen(port, ()=>{
    console.log("Escuchando en el puerto: "+port);
});

