var express = require('express');
var router = express.Router();

var Post = require('../app/models/post');

router.route('/post')
    .get(function(req, res){
        Post.find()
        .populate('author')
        .exec(function(err, post){
            if(err){
                console.log(err)
            } else {
                res.json(post)
            }
        });
    })

    .post(function(req, res){
        var user = req.user || "no user";
        console.log(user);
        var post = new Post();
       
        post.title = req.body.title || 'none';
        post.content= req.body.content || 'none';
        post.image = req.body.image || 'none';

        post.author = req.user._id || '56d5dfd34be1190c38e40db0';

        post.save(function(err, post){
            if(err){
                console.log(err)
            } else {
                res.json(post)
            }
        });
    })
    

router.route('/post/:post_id')
    .get(function(req, res){
        Post.find(req.params.post_id, function(err, post){
            if(err){
                console.log(err)
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