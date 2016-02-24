var express    = require('express');  //library/tool dependency 
var app        = express();                 // this tells us to run express(from line 1) as a function.

app.use(express.static('public')); 

app.listen(5050);