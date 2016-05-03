/*
blogApp.js
 	-blogListData.js
 		-blogList.js (SL) 
 			-blogCard.js (SL)
 		-editBlogData.js
 			-editBlogForm.js(SL)
 		-blogFormData.js 
 			-blogForm.js (SL)
 		-singleBlogDetailData.js
 			-singBlogDetail.js (SL)
 				-commentFormData.js
 				   -commentForm.js (SL)
 				-commentList.js (SL)
					-commentCard.js (SL) 
*/

var React = require('react');
var ReactDOM = require('react-dom');
var Loader = require('../loader');
var SingleBlogDetail= require('./singleBlogDetail');

var SingleBlogDetailData =  React.createClass({

	getInitialState: function() {
	    return {
	    	onePost: null,
	    	comments: []
	    }
    },

    loadOnePostFromServer: function() {
    	var self = this;
    	$.ajax({
    		url: '/api/one_post/' + self.props.id,
    		method: 'GET'
    	}).done(function(data){
		   self.setState({onePost: data});
    	});

	 },

	 loadCommentsFromServer: function(){
	 	console.log("load comments from server");
		var self = this;
		$.ajax({
			url: '/api/one_post/' + self.props.id + '/comment',
			method: 'GET'
		}).done(function(data){
			self.setState({ comments: data })
		})
	},

	 componentDidMount: function(){
	 	this.loadOnePostFromServer();
	 	this.loadCommentsFromServer();
	 },

	render: function (){
		console.log("ID IN SINGLE BLOG DETAIL RENDER  ", this.props.id )
		return this.state.onePost ?	<SingleBlogDetail  { ...this.state.onePost }  commentArray={this.state.comments} getId={ this.props.getId } blogId={this.props.id} loadOnePostFromServer={ this.loadOnePostFromServer } loadCommentsFromServer={ this.loadCommentsFromServer } /> : <Loader />
				
	}
});

module.exports = SingleBlogDetailData;
