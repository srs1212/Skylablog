var TwitterCard = React.createClass({
	getInitialState: function(){
		return{
			tweets:[]
		}
	},

	loadTweetsFromServer: function(){
		var self = this;
		$.ajax({
			url: this.props.url,
			method: 'GET',
		}).done(function(data){
			self.setState({tweets: data})
		})
	},

	componentDidMount: function(){
		this.loadTweetsFromServer()
	},


	render: function(){
		
		var twitterCards = this.state.tweets.map(function(item){
			return(
					 <div class = "container">
					  <div className="media col-sm-12 twit">
				        <div className="media-body">
				          <h4 className="media-heading">{item.screen_name}</h4>
				          <p>{item.text}</p>
				          <p>{item.created_at}</p>
				        </div>
				      </div>
				     </div>


			);
		});
			return(
				<div>
				{twitterCards}
				</div>
			);
		}
			
});

React.render(<TwitterCard url = "api/tweets/javascript"/>,
	document.getElementById('twitter-card'));