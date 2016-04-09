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

function CommentCard(props) {
	var dayDate = new Date(props.date).getDate();
	var monthDate = new Date(props.date).toString().substr(4,4);
	var yearDate = new Date(props.date).getFullYear();
	return (
		
            <div className="comment-list">
                <h4><img src="img/team-1.jpg" className="img-responsive" />
                    by: { props.user } on { monthDate } &nbsp; { dayDate } 
                </h4>
                <p>
                { props.body }
                </p>
            </div>


		);
};
module.exports = CommentCard;