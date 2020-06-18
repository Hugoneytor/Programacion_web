const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const { Schema } = mongoose;

let user = require('./../../models/userModel')


//mongoose.Promise = global.Promise;


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/usuarios', async function (req, res) {
    try{

        let users = await user.find({})
        res.render('home', {users});
    
    }catch(error){
        res.send('Algo salio mal')
    }}

);

module.exports = router;