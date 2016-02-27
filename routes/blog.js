	var express = require('express');
	var router = express.Router();
	var Blog = require('../app/models/blog');



	router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to my api!' });   //this is just test to make sure we're linked
});

module.exports = router;