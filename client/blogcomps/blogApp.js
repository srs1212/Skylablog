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
var BlogListData = require('./blogListData');
var BlogFormData = require('./blogFormData');
var SingleBlogDetailData  = require('./singleBlogDetailData');
var EditBlogData = require('./editBlogData');
//BlogApp renders directly to the blog.ejs page under views.

var Toggler = React.createClass({
	render: function (){
		return (
			<div className ="btn-group marginbottom" data-toggle="buttons">
			  <button onClick = {this.props.toggleActiveComp.bind(null, 'allblog')}> All Blog Posts</button>
			  <button onClick = {this.props.toggleActiveComp.bind(null, 'addnew')}> Add New Post  </button>
			</div>
			);
	}
});

var BlogApp = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'allblog',
			activeBlogId: null,
			}
	},

	getId: function(whichCompState, id) {
    	if( whichCompState === 'oneblog') {
            return this.setState({ activeBlogId: id, activeComponent: 'oneblog'})
        } else {
            return this.setState({ activeBlogId: id, activeComponent: 'addnew'})
        }
    },


	showComp: function(){
		if(this.state.activeComponent === 'allblog'){
			return <BlogListData getId= { this.getId }/> 
		} else if (this.state.activeComponent === 'addnew') {
			return <BlogFormData toggleActiveComp = { this.toggleActiveComp } />
		} else if (this.state.activeComponent === 'oneblog') {
			return <SingleBlogDetailData id={ this.state.activeBlogId } />
		} else if (this.state.activeComponent === 'editblog'){
			return <EditBlogData id = { this.state.activeBlogId } toggleActiveComp = { this.toggleActiveComp } />
		} else {
			throw new Error("invalid activecomponant", this.state.activeComponent)
		}
	
	},
	toggleActiveComp: function(name){
		this.setState ({ activeComponent: name})
	},


	render: function (){
		return (
			<div>
				<Toggler toggleActiveComp = {this.toggleActiveComp }/>
				{ this.showComp() }

			</div>
			);
	}
});

ReactDOM.render(<BlogApp/>, document.getElementById('blogapp'));


 	