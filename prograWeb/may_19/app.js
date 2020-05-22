const mongoose = require('mongoose');
const express = require('express');
const server = express();


mongoose.connect('mongodb+srv://admin:admin@cluster0-znksn.mongodb.net/Prueba?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true });

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});

var user = mongoose.model('Users', userSchema);

server.get('/datos', function(req,res){

    user.find({username:'nueva'}, function(err,data){
        data ? res.send(data) : res.send(err);
    });  
})

server.listen(3000, function(){
    console.log('Servidor corriendo por el puerto 3000')
})

