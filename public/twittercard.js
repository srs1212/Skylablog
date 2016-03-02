var TwitterCard = React.createClass({
	getInitialState: function(){ // sets initial state, the return is empty because at birth it's empty.
		return{
			tweets:[] //we'll go back and fill this later.
		}
	},

	loadTweetsFromServer: function(){ // AJAX goes and gets the data from our API
		var self = this;
		$.ajax({
			url: this.props.url,  //this could have been hardcoded to '/api/tweets/<our keyword>' but we call it as a property in the final react render
			method: 'GET',  //we're retrieving stuff, so its GET
		}).done(function(data){ //done because its an AJAX success call back.
			self.setState({tweets: data}) //this populates the tweets array w/ the actual data - 
		})
	},

	componentDidMount: function(){
		this.loadTweetsFromServer() 
	},


	render: function(){
		
		var twitterCards = this.state.tweets.map(function(item){ //.state instead of .props becuase we're right in the correct componant.
			return(
					 <div className = "twit panel panel-default">
					  <div className="panel panel-heading">
				          <h4 className="media-heading"><img src={item.profile_image_url} /> {item.screen_name}</h4>
				          <div className = "panel panel-body">
					          <p>{item.text}</p>
					          <p className ="twittext">{item.created_at}</p>
					      </div>
				   
				      </div>
				     </div>


			);
		});
			return( // have to have 2 returns, because the first return refers only to the map, not the render.
				<div>
				{twitterCards}
				</div>
			);
		}
			
});

React.render(<TwitterCard url = "api/tweets/javascript"/>, //the javascript here is what we're searching for - our dynamic :keyword
	document.getElementById('twitter-card'));