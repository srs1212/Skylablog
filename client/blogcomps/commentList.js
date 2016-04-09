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
var CommentCard = require('./commentCard');

function CommentList(props){
		var allComments = props.commentArray.map(item =>{
			return (
				<CommentCard 
				getId = { props.getId }
				id = { item._id }
				key = { item._id }
				body ={ item.body }
				date ={ item.date }
				blog ={ item.blog }
				user ={ item.user }
				/>
			);
		});
		return (
			<div>
				<div className="post-cmnt-wrap">
		       		{ allComments }
		       	</div>			
		    </div>
			)
	};

CommentList.propTypes = {
	commentArray: React.PropTypes.array.isRequired

};


module.exports = CommentList;

