const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log('listening on 8080')
});


app.get('경로', function(){
 응답.send();
});

app.get('/', function(요청,응답){
 응답.sendFile(__dirname + '/index.html')
});