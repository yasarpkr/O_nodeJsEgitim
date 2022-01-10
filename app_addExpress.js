//  -----aliasların getirilmesi----- //

var fs = require('fs');
var path = require ('path');
var express = require('express');
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){

    fs.readFile('index.html',function(err,data){

        res.write(data);
        console.log('homePrinterCagrildi');

    });


});

app.get('/login',function(req,res){

    fs.readFile('index_login.html',function(err,data){
        
        res.write(data);
        console.log('loginPrinterCagrildi');
    });
});


//  -----Portun hangisi üzerinden çağırılacağının belirlenmesi----- //

app.listen(8000);