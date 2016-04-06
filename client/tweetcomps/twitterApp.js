var React = require('react');
var ReactDOM = require('react-dom');
var TwitterSearchBar = require('./twitterSearchBar');
var TwitterBox = require('./twitterBox');

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
		this.loadTweetsFromServer(this.state.keyword);
	},

	render: function(){
		var keyword = this.state.keyword ? this.state.keyword : null;
		return(
			<div>
				<p>Searching Twitter for: { this.state.keyword }</p>
				<TwitterSearchBar onKeywordSubmit={ this.onKeywordSubmit } />
				<TwitterBox tweetsArray={ this.state.tweets } />
			</div>
			)
	}
});

ReactDOM.render(<TwitterApp url="/api/tweets/"/>,
	document.getElementById('twitter-app'));