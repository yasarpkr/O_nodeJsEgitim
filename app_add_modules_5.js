//  -----aliasların getirilmesi----- //

var fs = require('fs');
var path = require ('path');
var express = require('express');
var app = express();
var ctrlElektronik = require ('./ElektronikController');


app.use('/public', express.static(path.join(__dirname, 'public')));

var elektronik = (function(req,res){

    res.sendFile(path.join(__dirname,'index.html'));

});


var bilgisayar = (function(req,res){

    res.sendFile(path.join(__dirname,'index_login.html'));

});

app.get('/elektronik',ctrlElektronik.index);
app.get('/elektronik/bilgisayar',ctrlElektronik.bilgisayar);

//  -----Portun hangisi üzerinden çağırılacağının belirlenmesi----- //

app.listen(8000);