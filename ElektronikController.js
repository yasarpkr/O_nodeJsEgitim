var path = require ('path');

module.exports.index = function(req,res){

    res.sendFile(path.join(__dirname,'index.html'));

};


module.exports.bilgisayar = function(req,res){

    res.sendFile(path.join(__dirname,'index_login.html'));

};
