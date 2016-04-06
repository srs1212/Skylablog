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
function BlogCard(props) {
		return (
		        <section id="blog-wrapper" className="section-padding">
		            <div className="container">
		                <div className="row">
		                    <div className="col-sm-12">
		                        <div className="blog-post-wrap">
		                            <div className="row">
		                                <div className="col-sm-2 margin-btm-30 hidden-xs">
		                                    <div className="post-date text-right">
		                                        <h2>27</h2>
		                                        <span>Aug 2014</span>
		                                    </div>
		                                    <div className="post-left-info">
		                                        <p><i className="fa fa-user"></i> <a href="#">Author</a></p>
		                                        <p><i className="fa fa-comment"></i> <a href="#">3 Comments</a></p>
		                                    </div>
		                                </div>
		                                <div className="col-sm-10">
		                                    <div className="blog-post-info">
		                                        <a href="#">
		                                            <img src="img/blog-1.jpg" className="img-responsive" /></a>
		                                        <h3><a href="#">Title:Reading news in free time</a></h3>
		                                        <ul className="list-inline xs-post-info visible-xs">
		                                            <li><i className="fa fa-user"></i> <a href="#">Author</a></li>
		                                            <li><i className="fa fa-comment"></i> <a href="#">3 Comments</a></li>
		                                        </ul>
		                                        <p>
		                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		                                        </p>
		                                        <p className="text-right">
		                                            <a href="blog-post.html" className="btn btn-dark btn-sm">
		                                                Read more configure
		                                            </a>
		                                        </p>
		                                    </div>
		                                </div> 
		                            </div>
		                        </div> 
		                        <ul className="pager">
		                            <li><a href="#">Previous Page</a></li>
		                            <li><a href="#">Next Page</a></li>
		                        </ul>
		                    </div>
		                </div>
		            </div>
		        </section>
		     )
};

module.exports = BlogCard;
