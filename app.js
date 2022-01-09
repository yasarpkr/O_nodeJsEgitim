// const { resolveNaptr } = require('dns');


// var http = require('http');
// var fs = require('fs');


// var server = http.createServer(function(req,res)
// {
//     fs.readFile('index.html',function(error,data)
//     {
//     res.write(data);
//     res.end('mesaj bitti');
//     });
// });


// server.listen(8000)


var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if(req.url == '/'){

        fs.readFile('index.html',function(error,data1){ 

        res.write(data1);
        });        
    
    };

    if(req.url == '/login'){

        fs.readFile('index_login.html',function(error,data2){ 

        res.write(data2);
            
        });
    };
    console.log(req.url);
    

});

server.listen(8000)
