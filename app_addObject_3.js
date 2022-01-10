//  -----aliasların getirilmesi----- //

var http = require('http');
var fs = require('fs');

// Obje kullanımı yonlendirici // 

var yonlendirici = new Object();

//  -----functionların var olarak tanımlanması----- //

var homePrinter = function(req,res){

    fs.readFile('index.html',function(err,data){

        res.write(data);
        console.log('homePrinterCagrildi');

    });

};

var loginPrinter = function(req,res){

    fs.readFile('index_login.html',function(err,data){
        
        res.write(data);
        console.log('loginPrinterCagrildi');
    });

}

/*  -----Create server' ın çağrılması req.url' in çağrılması 
req url' e göre Printer fuction' ların değişmesi*/

yonlendirici['/'] = homePrinter;
yonlendirici['/login'] = loginPrinter;

var server = http.createServer(function(req,res){
    
    if (req.url in yonlendirici)
    yonlendirici[req.url](req,res)
});

//  -----Portun hangisi üzerinden çağırılacağının belirlenmesi----- //

server.listen(8000);