//  -----aliasların getirilmesi----- //

var http = require('http');
var fs = require('fs');

//  -----functionların var olarak tanımlanması----- //

var homePrinter = function(req,res){

    fs.readFile('index.html',function(err,data){

        res.write(data);

    });

};

var loginPrinter = function(req,res){

    fs.readFile('index_login.html',function(err,data){
        
        res.write(data);
    });

}

/*  -----Create server' ın çağrılması req.url' in çağrılması 
req url' e göre Printer fuction' ların değişmesi*/

var server = http.createServer(function(req,res){
    
    if (req.url == '/'){
        loginPrinter(req,res) 
    };
    if (req.url == '/login'){
        homePrinter(req,res)
    };
});

//  -----Portun hangisi üzerinden çağırılacağının belirlenmesi----- //

server.listen(8000);