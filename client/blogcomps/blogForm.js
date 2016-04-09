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
content: String,
author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
image: String,
date: {type: Date, default: Date.now },  
*/

var React = require('react');

function BlogForm(props){
  return (
		<section id="blog-wrapper" className="section-padding">
	            <div className="container">
	                <div className="row">
						<h3>Submit a Post</h3>	
						<form onSubmit = { props.onBlogSubmit } >
							  <fieldset className ="form-group">
							    <label>TITLE</label>
							    <input onChange= { props.onTitleChange }  type="text" className ="form-control"  placeholder="title" />
							  </fieldset>
							  <fieldset className ="form-group">
							    <label>BODY/CONTENT</label>
							    <input onChange = { props.onContentChange }  type="text" className ="form-control"  placeholder="content" />
							  </fieldset>

							  <fieldset className ="form-group">
							    <label>IMAGE</label>
							    <input onChange = { props.onImageChange }  type="text" className ="form-control"  placeholder="image URL" />
							  </fieldset>
							       <button type="submit" className="btn btn-dark btn-sm comment-send-btn">Post Away</button>
						</form>
					</div>
				</div>
		</section>
		
			);
}



module.exports = BlogForm;

