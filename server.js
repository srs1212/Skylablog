var express    = require('express');   
var app        = express();                 
var bodyParser = require('body-parser');  
var mongoose = require('mongoose'); 
var passport = require('passport');
mongoose.connect('mongodb://localhost/blog'); 
var flash = require('connect-flash');
var session = require('express-session');

var blogRouter= require('./routes/blog');
var testRouter= require('./routes/test');
var Post = require('./app/models/blog');
var Test = require('./app/models/test');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
//start routing for passport
app.use(session({
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use(flash());

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);
//end passport routing

app.use(express.static('public')); 

app.use(function(req, res, next){
  var user = req.user || "no user";
  console.log(user);
  next();
});

app.set('view engine', 'ejs');



app.get('/', function(req, res){
		res.render('index', {user: 'I am an user'});
});

app.get('/blog', function(req, res){
	var user = req.user || "no user";
		res.render('blog', {user: user});
});

app.get('/blog-post', function(req, res){
		res.render('blog-post', {title: 'hi blog-post'});
});

app.get('./partials/mainnav', function(req, res){
		res.render('mainnav', {title: 'hi mainnav'});
});

app.get('./partials/footer', function(req, res){
		res.render('footer', {title: 'hi footer'});
});



app.get('/test', function(req, res){

		Test.find(function(err, tests){
			if(err){
				console.log(err);
			}else {
				res.render('test', {tests: tests});
			}	
		});
});



var port = process.env.PORT || 5050;
var router = express.Router();

app.use('/api', testRouter); 
//changed from blogRouter

app.listen(port);
console.log('Blog happens on port ' + port);