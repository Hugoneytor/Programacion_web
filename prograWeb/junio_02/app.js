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

var user = mongoose.model('Users', userSchema);


//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/buscar', urlencodedParser, function(req,res){
    res.render('personData');
});

app.get('/insertar',urlencodedParser, function(req,res){
    res.render('insertar');
});

app.get('/ListaDeUsuarios', function(req,res){
    let user = mongoose.model('Users', userSchema);
    user.find({}, function(err, users){
        res.render('home', {users})
    })
});

app.get('/borrar', urlencodedParser, function(req,res){
    res.render('borrarUsuario');
});

app.post('/borrado', urlencodedParser, (req,res)=>{
    user.find({id: req.body.id},
        function(err,data){
            if(err){
                console.log(err);
            }else{
                user.findByIdAndDelete(req.body.id, function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        res.send('Eliminado');
                    }
                })
            }
        });
});


app.post('/insertarPersona', urlencodedParser, (req, res) => {
    console.log(req.body.userName);
        user.find({username: req.body.userName}, function(err,data){

            var myUser = user({
                username: req.body.userName,
                password: req.body.password
            });

            if(err){
                console.log('Error');
            }else{
                if(data.length > 0){
                    res.send('Ya existe');
                }else{
                    myUser.save(new Promise((res,rej)=>{
                        res('Colección añadida');
                    }).then((resultado)=>{
                        res.send(resultado);
                    }).catch((err)=>{
                        console.log(err);
                    })
                    )
                }
            }
        });  
   

});

app.post('/buscarPersona', urlencodedParser, (req, res) => {
    console.log(req.body.userName);



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


app.listen(port, function () {
    console.log(`Corriendo en el puerto ${port}`)
})
