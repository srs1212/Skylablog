
var React = require('react');

function SingleBlogDetail(props) {
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
	                            <h4>3 Comments</h4>
	                            <div className="comment-list">
	                                <h4><img src="img/team-1.jpg" className="img-responsive" />
	                                    by User on 27 Aug <a href="#">Reply</a>
	                                </h4>
	                                <p>
	                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie
	                                </p>
	                            </div>
	                            <div className="comment-list">
	                                <h4><img src="img/team-5.jpg" className="img-responsive" />
	                                    by User on 27 Aug <a href="#">Reply</a>
	                                </h4>
	                                <p>
	                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie
	                                </p>
	                            </div>
	                            <div className="comment-list">
	                                <h4><img src="img/team-3.jpg" className="img-responsive" />
	                                    by User on 27 Aug <a href="#">Reply</a>
	                                </h4>
	                                <p>
	                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie
	                                </p>
	                            </div>
	                        </div>

	                        <div className="comment-form margin-btm-30">
	                            <h4>Leave a Comment</h4>
	                            <form role="form">
	                                <div className="form-group">
	                                    <input type="text" className="form-control" placeholder="Name" />
	                                </div>
	                                <div className="form-group">
	                                    <input type="email" className="form-control" placeholder="Email" />
	                                </div>
	                                <div className="form-group">
	                                    <textarea className="form-control comment-textarea" rows="5" placeholder="Enter your comment here"></textarea>
	                                </div>
	                                <button type="submit" className="btn btn-dark btn-sm comment-send-btn">Submit</button>
	                            </form>
	                        </div>
	                    </div>
	                    
	                </div>
	            </div>
	        </section>

			);

};

module.exports = SingleBlogDetail;