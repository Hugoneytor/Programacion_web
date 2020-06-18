const express = require('express'),
    port = 3000,
    app = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./src/routes')

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0-znksn.mongodb.net/Prueba?retryWrites=true&w' +
            '=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use('/', routes);



//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.listen(port, function () {
    console.log(`Corriendo en el puerto ${port}`)
})


// From Carlos Ulibarri to Everyone:  08:59 PM
// mongoose.Promise = global.Promise;
// From Carlos Ulibarri to Everyone:  09:05 PM
// router.get('/usersList', function (req, res) {
//     let user = mongoose.model('User', userSchema);
//     user.find({})
//         .exec()
//         .then((users) => {
//             res.render('home', { users });
//         })
//         .catch((err) => {
//             res.send('algo salio mal');
//         })
// });
