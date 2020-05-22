const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb+srv://admin:admin@cluster0-znksn.mongodb.net/Prueba?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true });

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});

var user = mongoose.model('Users', userSchema);

var myUser = user({
    username: "nueva",
    password: "Promesa 5"
});


myUser.save(new Promise((res,rej)=>{
    res('Colección añadida');
}).then((resultado)=>{
    console.log(resultado);
}).catch((err)=>{
    console.log(err);
})
)



// myUser.save((err)=>{
//     if(err){
//         console.log('Algo salio mal');
//     }else{
//         console.log('todo Ok');
//     }
// })

