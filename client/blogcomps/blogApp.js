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

Parent main rendering component (could be outside comps but used it in the webpack entry route)

*/

var React = require('react');
var Loader = require('../loader');
var BlogList = require('./blogList');
var BlogCard = require('./blogCard');
var BlogListData = require('./blogListData')
//BlogApp renders directly to the blog.ejs page under views.
var BlogApp = React.createClass({
	render: function (){
		return (
			<div>
				<h3>Hello World </h3>
				<BlogCard />

			</div>
			);
	}
});

ReactDOM.render(<BlogApp/>, document.getElementById('blogapp'));


 	