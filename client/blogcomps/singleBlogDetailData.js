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
	    	onePost: null
	    }
    },

    loadOnePostFromServer: function() {
    	var self = this;
    	$.ajax({
    		url: '/api/one_post/' + self.props.id,
    		method: 'GET'
    	}).done(function(data){
    		console.log(data, "data here;");
    		self.setState({onePost: data});
    	});

	 },

	 componentDidMount: function(){
	 	this.loadOnePostFromServer();
	 },

	render: function (){
		console.log(this.state.onePost);
		return this.state.onePost ?	<SingleBlogDetail  { ...this.state.onePost } /> : <Loader />
				
	}
});

module.exports = SingleBlogDetailData;
