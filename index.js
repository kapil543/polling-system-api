const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){console.log('getting error -->>',err);return;}
    console.log('server is started...');
});
