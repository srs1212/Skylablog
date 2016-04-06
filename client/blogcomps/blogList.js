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
var BlogCard = require('./blogCard');

function BlogList(props){
		var allPosts = props.postArray.map(item =>{
			return (
				<blogCard
				getId = { props.getId }
				id = { item._id }
				key = { item._id }
				title ={ item.title }
				content ={ item.content }
				image ={ item.image }
				date ={ item.date }
				comments ={ item.comments } />
			);
		});
		return (
			<div>
				{ allPosts }
			</div>
			)
	};

BlogList.propTypes = {
	postArray: React.PropTypes.array.isRequired

};


module.exports = BlogList;