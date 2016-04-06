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

var BlogListData = React.createClass({

	getInitialState: function(){
		return {
			allPosts: null,
			postID: null,
			}
	},

	loadAllPostsFromServer: function() {
	   	$.ajax({
	     url: '/api/post' ,
	     method: 'GET'
	   	}).done(data => this.setState({ allFish: data }));
	},

	componentDidMount: function(){
		this.loadAllFishFromServer();
	},

	getId: function(whichCompState, id) {
    	if( whichCompState === 'showOne') {
            return this.setState({ activeFishId: id, activeComponent: 'oneFish'})
        } else {
            return this.setState({ activeFishId: id, activeComponent: 'editFish'})
        }
    },


	showComp: function(){
		if(this.state.activeComponent === 'fish'){
			return <FishListData getId= { this.getId }/> 
		} else if (this.state.activeComponent === 'form') {
			return <FishFormData toggleActiveComp = { this.toggleActiveComp } />
		} else if (this.state.activeComponent === 'oneFish') {
			return <FishDetailsData id={ this.state.activeFishId } />
		} else if (this.state.activeComponent === 'editFish'){
			return <EditFishData id = { this.state.activeFishId } toggleActiveComp = { this.toggleActiveComp } />
		} else {
			throw new Error("invalid activecomponant", this.state.activeComponent)
		}
	
	},
	toggleActiveComp: function(name){
		this.setState ({ activeComponent: name})
	},

	render: function (){
		return (
			<div className = "container marginbottom">
				<Toggler toggleActiveComp = {this.toggleActiveComp }/>
				{ this.showComp() }
			</div>


			);
	}
});

module.exports = FishBox;