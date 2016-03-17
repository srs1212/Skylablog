var TwitterApp = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired
	},

	getInitialState: function(){
		return {
			tweets: [],
			keyword: 'Drumpf'
		}
	},

	onKeywordSubmit: function(newKeyword){
		this.setState({keyword: newKeyword});

		this.loadTweetsFromServer(newKeyword);
	},

	loadTweetsFromServer: function(keyword){
		var self=this;
		$.ajax ({
			url: this.props.url + keyword,
			method: 'GET'
		}).done(function(d){
			self.setState({
				tweets: d
			})
		})
	},

	componentDidMount: function(){
		this.loadTweetsFromServer(this.state.keyword)
	},

	render: function(){
		return (
			<div>
				<p>Searching Twitter for: {this.state.keyword}</p>
				<TwitterSearchBar onKeywordSubmit={this.onKeywordSubmit} />
				<TwitterBox tweetsArray={ this.state.tweets } />
			</div>
			)
	}
});

React.render(<TwitterApp url="/api/tweets/"/>,
	document.getElementById('twitter-app'));