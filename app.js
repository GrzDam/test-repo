var express= require('express');
var app = express();

app.get('/', function(req,res){
    res.send("Witaj! ");
});

app.listen(3000);
console.log("test2");
console.log("test2");
