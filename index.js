var express=require('express');

var app=express();

app.use(express.static(__dirname+'/public'))

app.use(function(req,res){
    console.log(req.body);
})

app.listen(8080,function(){
    console.log('My app is listening at port 8080')
});

