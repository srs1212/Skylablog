var express    = require('express');   
var app        = express();                 
var bodyParser = require('body-parser');  
var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/blog'); 

var blogRouter= require('./routes/blog');
var Post = require('./app/models/blog');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use(express.static('public')); 

app.get('/', function(req, res){
		res.render('index', {title: 'hi blog'});
});







var port = process.env.PORT || 5050;
var router = express.Router();

app.use('/api', blogRouter);

app.listen(port);
console.log('Blog happens on port ' + port);