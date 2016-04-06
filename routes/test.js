	var express = require('express');
	var router = express.Router();
	var Test = require('../models/test');


router.route('/tests') //express function to use root/testsas our API endpoint.
	.post(function(req, res){  //http verb terminology for standard POST, then node terminology req/res.?
		var test = new Test();  //constructing a new Bear from our Schema, calling it bear
		test.name = req.body.name; //next 3 lines: pulling it from the req. from our form the req.body.name
		test.date = req.body.date;  //is dot notation from standard http request. we just want to pull the body piece

		
		test.save(function(err,test) { //creating a test save (save is mongoose set terminology to send to Db) f(x) w/  params to throw error or post the test
			if(err){
				console.log(err);
			} else {
				res.json(test); //respond by posting the new new test (lowercase test because of line 8 declaration)
			}	

	})
	});
router.route('/tests')

    // create a bear (accessed at POST http://localhost:8080/api/bears)

	.get(function(req, res){ //just like post - http standard funciton for GET versus post
		Test.find(function(err, tests){ //instead of .save, it's standard .find - caps Bear- because we want to return whole collection from Schema
			if(err){
				console.log(err);
			}else {
				res.json(tests); //returns all bears
			}	
		});
	});

router.route('/tests/:test_id')   //the : makes this dynamic and says this will be a parameter put into URL
	.get(function(req, res){
		Test.findById(req.params.test_id,function(err, test){ //like .body tells us to look in http data, 
		if(err) {										//params tell us to look in the URL 
			console.log(err);
		} else {
			res.json(test);
		}
	  });
	})

	.put(function(req, res){
		Test.findById(req.params.test_id,function(err, test){
			if(err) {
				console.log(err);
			} else {
				test.name = req.body.name ? req.body.name : test.name;
				test.date = req.body.date ? req.body.date : test.date;

				test.save(function(err){
					if(err){
						console.log(err);
					}else {
						res.json({title: 'Test updated'});
					}
			    });
	  		}
   	     });
	})

	.delete(function(req, res) {
        Test.remove({_id: req.params.test_id}, function(err, test) {
            if (err) {
            	console.log(err);
            } else {
          	res.json({ title: 'successfully deleted' });
        	}
        });
    });





	router.get('/', function(req, res) {
    res.json({ message: 'WhoopWhoop working' });   //this is just test to make sure we're linked
});

module.exports = router;