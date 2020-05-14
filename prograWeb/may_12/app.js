const express = require('express'),
    port = 3000,
    app = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('personData');
});

app.get('/person/:id', (req, res) => {
    res.render('person', {
        ID: req.params.id,
        Qstr: req.query.Qstr
    });
});

app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thanks');
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});

app.post('/personJson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser');
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});

app.listen(port, function () {
    console.log(`Corriendo en el puerto ${port}`)
})
