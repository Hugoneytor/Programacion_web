const express = require('express'), 
port = 3000, 
app = express(), 
ejs = require('ejs');

//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//route handler para la raiz
// app.get('/', (req,res)=>{
//     res.render('index');
// })

app.get('/person/:id', (req,res)=>{
    // res.send(`<html><head> <link href=/assets/style.css type=text/css rel=stylesheet> </head><title>Servidor con express</title><body><h1>el id de la persona es ${req.params.id}</h1><p>My first paragraph</p></body></html>`);

    res.render('index', {ID: req.params.id})
});


app.listen(port, function(){
    console.log(`Corriendo en el puerto ${port}`)
})

