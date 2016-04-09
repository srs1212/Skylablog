var express = require('express');
var router = express.Router();
var Comment = require('../models/comment'); 
var Post = require('../models/post');

router.route('/post')
    .get(function(req, res){
        console.log('regular POST route!');
        Post.find()
        .populate('author')
        .populate('comments')
        .exec(function(err, post){
            if(err){
                console.log(err)
            } else {
                res.json(post)
            }
        });
    })

    .post(function(req, res){
        var user = req.user;
        if (!user){
            res.status(500).send("Must be logged in to post");
            return; 
        } 

        console.log(user);
        var post = new Post();
       
        post.title = req.body.title || 'none';
        post.content= req.body.content || 'none';
        post.image = req.body.image || 'none';

        post.author = req.user._id; 

        post.save(function(err, post){
            if(err){
                console.log(err)
            } else {
                res.json(post)
            }
        });
    })
    
//line below is for the posting to comments
router.route('/one_post/:post_id/comment')
    .post(function(req,res){
        var comment = new Comment(); 
        comment.body = req.body.body;
        comment.user = req.user._id;
        comment.blog = req.params.post_id;

        comment.save(function(err,com){
            if (err){
            res.send(err);
        } else {
            //find blog by id and
            //push comments into comments array
            Post.findById(req.params.post_id, function(err,post){
                if(err){
                    res.send(err)
                } else {
                    post.comments.push(com._id);
                    post.save();
                    res.json(com);
                }
            });
        }
        });
    });

//end comments code
router.route('/one_post/:post_id')
    .get(function(req, res){
        Post.findById(req.params.post_id)
        .populate ('comments')
        .exec (function(err, post){
            if(err){
                console.log(err);
            } else {
                res.json(post)
            }
        });
    })
    .put(function(req, res){
        Post.findById(req.params.blog_id, function(err, post){
            if(err){
                console.log(err)
            } else {
                post.author = req.body.author ? req.body.author : post.author;
                post.title = req.body.title ? req.body.title : post.title;
                post.content = req.body.content ? req.body.content : post.content;
                post.date = req.body.date ? req.body.date : post.date;

                post.save(function(err, post){
                    if(err){
                        console.log(err)
                    } else {
                        res.json({message: "post updated!"})
                    }
                })
            }
        });
    })
    .delete(function(req, res){
        Post.remove({_id: req.params.blog_id}, function(err, post){
            if(err){
                console.log(err)
            } else {
                console.log(Post)
                res.json ({message: "post deleted!"})
            }
        });
    })


module.exports = router;