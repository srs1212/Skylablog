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

function CommentForm(props){
  return (

	 	<div className="comment-form margin-btm-30">
                <form role="form" onSubmit={ props.onCommentSubmit }>
                    <div className="form-group">
                        <textarea className="form-control comment-textarea" onChange={ props.onBodyChange }
    				value={ props.body }rows="6" placeholder="Enter your comment here"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark btn-sm comment-send-btn">Submit Comment</button>
                </form>
            </div>
		
			);
};

module.exports = CommentForm;

