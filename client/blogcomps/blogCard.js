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
 			-singleBlogDetail.js (SL)
 				-commentFormData.js
 				   -commentForm.js (SL)
 				-commentList.js (SL)
					-commentCard.js (SL) 
*/

var React = require('react');

function BlogCard(props) {
	var dayDate = new Date(props.date).getDate();
	var monthDate = new Date(props.date).toString().substr(4,4);
	var yearDate = new Date(props.date).getFullYear();
		return (
		        <section id="blog-wrapper" className="section-padding">
		            <div className="container">
		                <div className="row">
		                    <div className="col-sm-12">
		                        <div className="blog-post-wrap">
		                            <div className="row">
		                                <div className="col-sm-2 margin-btm-30 hidden-xs">
		                                    <div className="post-date text-right">
		                                        <h2> { dayDate } </h2>
		                                        <span> { monthDate } &nbsp; { yearDate } </span>
		                                    </div>
		                                    <div className="post-left-info">
		                                        <p><i className="fa fa-comment"></i> <a href="#">3 Comments</a></p>
		                                    </div>
		                                </div>
		                                <div className="col-sm-10">
		                                    <div className="blog-post-info">
		                                        <a href="#">
		                                            <img src="img/blog-1.jpg" className="img-responsive" /></a>
		                                        <h3> { props.title } </h3>
		                                        <ul className="list-inline xs-post-info visible-xs">
		                                            <li><i className="fa fa-comment"></i> <a href="#">3 Comments</a></li>
		                                        </ul>
		                                        <p>
		                                            { props.content }
		                                        </p>
		                                        <p className="text-right">
		                                            <button onClick={ props.getId.bind(null, 'oneblog', props.id) } className="btn btn-dark btn-sm">
		                                                Read more
		                                            </button>
		                                        </p>
		                                    </div>
		                                </div> 
		                            </div>
		                        </div> 

		                    </div>
		                </div>
		            </div>
		        </section>
		     )
};

module.exports = BlogCard;
