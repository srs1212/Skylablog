
var React = require('react');
var CommentList = require('./commentList');
var CommentFormData = require('./commentFormData');

function SingleBlogDetail(props) {
	console.log(props);
	var dayDate = new Date(props.date).getDate();
	var monthDate = new Date(props.date).toString().substr(4,4);
	var yearDate = new Date(props.date).getFullYear();
	return (
			<section id="blog-wrapper" className="section-padding">
	            <div className="container">
	                <div className="row">
	                    <div className="col-md-12">
	                        <div className="center-heading text-center">
	                            <h2> { props.title }</h2>
	                            <span className="icon"><i className="fa fa-quote-left"></i></span> 
	                        </div>
	                    </div>
	                </div>
	                <div className="row">
	                    <div className="col-sm-12">
	                        <div className="blog-post-wrap">
	                            <div className="row">
	                                <div className="col-sm-2 margin-btm-30 hidden-xs">
	                                    <div className="post-date   text-right">
	                                        <h2>{ dayDate } </h2>
	                                        <span>{ monthDate } &nbsp; { yearDate }</span>
	                                    </div>
	                                    <div className="post-left-info">
	                                        <p><i className="fa fa-comment"></i> <a href="#">3 Comments</a></p>
	                                    </div>
	                                </div>
	                                <div className="col-sm-10">
	                                    <div className="blog-post-info">                                  
	                                        <img src="img/blog-1.jpg" className="img-responsive" />
	                                        <p></p>
	                                        <ul className="list-inline xs-post-info visible-xs">
	                                            <li><i className="fa fa-comment"></i> <a href="#">3 Comments</a></li>
	                                        </ul>
	                                       <p> { props.content }
	                                       </p>

	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="post-cmnt-wrap">
	                            <h4>3(needs JS) Comments</h4>
	                            <div className="comment-list">
	                               <CommentList commentArray={ props.comments} />
	                            </div>
	                            
	                        </div>

	                        <div className="comment-form margin-btm-30">
                       			 <h4>Leave a Comment</h4>
                       			 <CommentFormData />
                       		</div>

	                    </div>
	                    
	                </div>
	            </div>
	        </section>

			);

};

module.exports = SingleBlogDetail;
