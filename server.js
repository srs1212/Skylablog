var express    = require('express');   
var app        = express();                 
var bodyParser = require('body-parser');  
var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/blog'); 

var blogRouter= require('./routes/blog');
var Post = require('./app/models/blog');
var Test = require('./app/models/test');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use(express.static('public')); 
app.set('view engine', 'ejs');

app.get('/', function(req, res){
		res.render('index', {title: 'hi blog'});
});


app.get('/test', function(req, res){

		Test.find(function(err, tests){
			if(err){
				console.log(err);
			}else {
				res.render('tests', {tests: tests});
			}	
		});
});



var port = process.env.PORT || 5050;
var router = express.Router();

app.use('/api', blogRouter);

app.listen(port);
console.log('Blog happens on port ' + port);