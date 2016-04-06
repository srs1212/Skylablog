var React = require('react');
var TwitterCard = require ('./twitterCard');
var TwitterBox = React.createClass({
	propTypes: {
			tweetsArray: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	},
	
	render: function (){
		console.log(this.props.tweetsArray);
		var tweets = this.props.tweetsArray.map(function(t){	
			return <TwitterCard
						 text={t.text}
						 user_name={t.user_name}
						 created_at={t.created_at}
						 profile_image_url={t.profile_image_url}
						 />
		});
			return(
				<div>
					{tweets}
				</div>
				)
		}

});

module.exports = TwitterBox;

