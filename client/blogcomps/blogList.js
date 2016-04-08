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
getId = { props.getId } 
*/

var React = require('react');
var BlogCard = require('./blogCard');

function BlogList(props){
		var allPosts = props.postArray.map(item =>{
			return (
				<BlogCard 
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
			 <ul className="pager">
		     <li><a href="#">Previous Page</a></li>
		     <li><a href="#">Next Page</a></li>
		     </ul>
		     </div>
			)
	};

BlogList.propTypes = {
	postArray: React.PropTypes.array.isRequired

};


module.exports = BlogList;