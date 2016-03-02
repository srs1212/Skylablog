
require('dotenv').config();
var express = require('express');
var router = express.Router(); //this var router - could be called anything, then the f(x) below line 16 would say anything.route
var Twit = require('twit');
//below is a constructor f(x) holding ou personal keys
var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//below - creating a new router to an api endpoint for people to use, but we're controlling the response.
router.route ('/:keyword') // : says dynamic - keyword is just placeholder for whatever we put in - in my case javascript. see twittercard.js
	.get (function(req, res){
		var keyword = req.params.keyword; //used line 20 for cleaner line 20.
	//T.get was obtained from the Twit API docs.  data was declared in line 20 below from the call back - it could be called anything as long as mirrored below.	
	T.get('search/tweets', { q: keyword + ' since:2011-07-11', count: 10 }, function(err, data, response) { 
		var myTweetsArr = data.statuses.map(function(tweet){
			return {text: tweet.text,  //this is object literal where we define left side (key) and assign it a value
					screen_name: tweet.user.screen_name, //the user.screen_name etc. is twitters nomenclature that you can see in their data.
					created_at: tweet.created_at,
					profile_image_url: tweet.user.profile_image_url,
			}
		});	
		res.json(myTweetsArr);
	});
});

module.exports = router;	
//this whole file makes it possible to talk to Twitter - Twit takes care of saying we are who we say we are.
