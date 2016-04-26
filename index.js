var express=require('express');
var app=express();

app.use('/api',express.static('public'));


app.get('/',function(req,res){
    res.send('hello word');

});


app.listen(8801,function(){
     console.log('listening on port 8801');

});





