const express = require('express'),
    port = 3000,
    app = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();


mongoose.connect('mongodb+srv://admin:admin@cluster0-znksn.mongodb.net/Prueba?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true });

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});


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
    console.log(req.body.userName);

    var user = mongoose.model('Users', userSchema);

        user.find({username: req.body.userName}, function(err,data){
            if(err){
                console.log('Error');
            }else{
                if(data.length > 0){
                    res.render('results', {data});
                }else{
                    res.send('No hay concidencias');
                }
            }
        });  
   

});

app.post('/personJson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser');
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});

app.listen(port, function () {
    console.log(`Corriendo en el puerto ${port}`)
})
