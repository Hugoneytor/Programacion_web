const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0-znksn.mongodb.net/Prueba?retryWrites=true&w' + '=majority'
// mongoose.connect(
//     'mongodb+srv://admin:admin@cluster0-znksn.mongodb.net/Prueba?retryWrites=true&w' +
//             '=majority',

// ).then(function(db){
//     console.log('Todo ok');
// }).catch(function(){
//     console.log('Salio mal');
// })

mongoose.connect(url,     {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function (db) { // <- db as first argument
        console.log('connected');
    })
    .catch(function (err) {
        console.log('algo salio mal');
    });
