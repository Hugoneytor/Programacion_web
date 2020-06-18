require('./src/db/connection');
const express = require('express');
const app = express();
const routes = require('./src/routes');
const ejs = require('ejs');
const port = 3000;
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('assets', express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});




//Ruta handler para raíz
app.set('view engine', 'ejs');

app.use('/', routes);


/* app.get('/', (req, res) => {
    res.render('index');
});

app.get('/insert', (req, res) => {
    res.render('insert');
});

app.get('/search', (req, res) => {
    res.render('personData');
})

//app.post('/delete/:id', function (req, res) {
  //  res.send(req.params.id);
    //res.redirect('/User');
//});

//app.post('/update/:id', function (req, res) {
  //  req.body.password
    //res.render('update');
//});


app.get('/usuarios', function (req, res) {
    user.find({}, function (err, users) {
        res.render('home', {users})
    })
});

app.post('/updateUsuarios', urlencodedParser, (req,res)=>{
    user.findOneAndUpdate({_id:idUsuario},
        {username: req.body.username, password:req.body.password}, 
        function(err,data){
        if(err){
            console.log(err);
        }else{
            res.redirect('/usuarios');
        }
    });
});
var idUsuario;

//app.get('/home', function (req, res)  {
  //  let user = mongoose.model('User', userSchema);
    //user.find({}, function (err, users) {
      // if(err) {
        //   console.log('Algo salio mal');
        //}
        //res.render('home', { users });
//});
//});

//Ruta handler para /person
app.get('/person/:id', (req, res) => {
    res.render('person', {
    ID: req.params.id,
    Qstr: req.query.Qstr
    });
});

//dentro del metodo POST tiene que estar en Body
app.post('/person', urlencodedParser, (req, res) => {
    //res.send('El usuario se registro correctamente');
    console.log(req.body.userName);
    console.log(req.body.password);
    // console.log(req.body.lastname);
    //aqui empieza la busqueda
    //var user = mongoose.model('User', userSchema);
    user.find({ username: req.body.userName }, function (err, data) {
        // doc is a Document
        if (err) {
            console.log('Hubo un error');
        } else {
            if (data.length > 0) {
                // console.log(data);
                res.send('El usuario ya se registro anteriormente')
                // console.log(doc);
            } else {
                var myUser = user({
                    username: req.body.userName,
                    password: req.body.password
                });
                myUser.save((err) => {
                    if (err) {
                        console.log('Ocurrio un error' + err);
                    } else {
                        console.log('Se registro correctamente');
                    }
                });
                res.send('Agregado con éxito');
            }
        }
    });
}); 

app.post('/eliminar/:id', urlencodedParser, (req, res) => {
    user.findByIdAndDelete(req.params.id, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/usuarios');
        }
    })
});

app.post('/searchUsuarios', urlencodedParser, (req, res) => {
    console.log(req.body.userName);
    user.find({
        username: req.body.userName
    }, function (err, data) {
        if (err) {
            console.log('Error');
        } else {
            if (data.length > 0) {
                res.render('results', {data});
            } else {
                res.send('No se ha encontrado un registro con ese nombre');
            }
        }
    })
});

app.post('/editar/:id', urlencodedParser, (req,res)=>{
    idUsuario = req.params.id;
    res.render('update');
}); */