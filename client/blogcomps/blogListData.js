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

*/

var React = require('react');
var Loader = require('../loader');
var BlogList = require ('./blogList');

var BlogListData = React.createClass({

	getInitialState: function(){
		return {
			allPosts: null,
			postID: null,
			}
	},

	loadAllPostsFromServer: function() {
	   	$.ajax({
	     url: '/api/post',
	     method: 'GET'
	   	}).done(data => this.setState({ allPosts: data }));
	},

	componentDidMount: function(){
		this.loadAllPostsFromServer();
	},

	

	render: function (){
		return this.state.allPosts ? <BlogList postArray = { this.state.allPosts } getId = { this.props.getId } /> : <Loader />
	}
});

module.exports = BlogListData;