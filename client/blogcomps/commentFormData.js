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
body: this.state.body.trim(),
date: this.state.date,
blog: this.state.blog,
user: this.state.user
user: 
*/

var React = require('react');

var CommentForm = require ('./commentForm');
//Posting new Fish
var CommentFormData = React.createClass({
	getInitialState: function() {
		console.log("getting initial state blog comment")
	    return {
	      body: null,
		}
    },
    
	onBodyChange: function(event){
    	this.setState({ body: event.target.value})
    },

  
	onCommentSubmit: function(e){ 
		console.log("on comment submitting" )
		console.log(self.props.id);
		e.preventDefault();
		e.stopPropagation();
		var commentData = {
			body: this.state.body.trim()

    	};
    	var self = this;
	    $.ajax({
	      url: '/api/one_post/' + self.props.id + '/comment',
	      type: 'POST',
	      data: commentData,
	    }).done(function(data){
	    	console.log("should be getting just to here");
	  // 		this.props.loadCommentsFromServer();
			// this.props.loadOnePostFromServer(); 
			//these lines break, deleting yields "comment validation error"
			self.setState({ body: ''});
			console.log(data);
	    });
   
   },

	render: function(){
		return (
			<CommentForm
			onCommentSubmit={ this.onCommentSubmit }
			onBodyChange={ this.onBodyChange }
			body={ this.state.body }

			/>
			
		)
		
	}
});

module.exports = CommentFormData;

