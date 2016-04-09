/*
blogApp.js
blogcomps
 	-blogListData.js
 		-blogList.js (SL) 
 			-blogCard.js (SL)
 		-editBlogData.js
 			-editBlogForm.js(SL)
 		-blogFormData.js 
 			-blogForm.js (SL)
 		-singleBlogDetailData.js
 			-singBlogDetails.js (SL)
 				-commentFormData.js
 				   -commentForm.js (SL)
 				-commentList.js (SL)
					-commentCard.js (SL)
					title: String,  
title: String,
content: String,
author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
image: String,
date: {type: Date, default: Date.now }, 
*/

var React = require('react');

var BlogForm = require ('./blogform');
//Posting new Fish
var BlogFormData = React.createClass({
	getInitialState: function() {
		console.log("getting initial state blog post")
	    return {
	      title: null,
	      content: null,
	      image: null,


	    }
    },
    contextTypes: {
    	sendNotification: React.PropTypes.func.isRequired
    },

    
	onTitleChange: function(event){
    	this.setState({ title: event.target.value})
    },

    onContentChange: function(event){
    	this.setState({ content: event.target.value})
    },



    onImageChange: function(event){
    	this.setState ({ image: event.target.value})
    },

	
	onBlogSubmit: function(e){ 
		e.preventDefault();
		var blogData = {
			title: this.state.title.trim(),
    		content: this.state.content.trim(),
    		image: this.state.image,

    	};
    	var self = this;
    	var blogData = blogData;
	    $.ajax({
	      url: '/api/post',
	      type: 'POST',
	      data: blogData,
	    }).done(function(post){
	      self.props.toggleActiveComp('allblog');
	      self.context.sendNotification("Wow, you actually wrote a blog post!  Good Work - seriously")
	    });
   
   },

	render: function(){
		return (
			<BlogForm
			onBlogSubmit = { this.onBlogSubmit }
			onTitleChange = { this.onTitleChange }
			onContentChange = { this.onContentChange }
			onImageChange = { this.onImageChange }


			/>
			
		)
		
	}
});

module.exports = BlogFormData;