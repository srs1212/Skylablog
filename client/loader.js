var React = require('react');

var Loader = React.createClass({
	render: function (){
		return (
			<div>
	       		<i className="fa-spin fa fa-spinner fa-6 fa-spin loader"></i>
	    	</div>
		);
	}
});

module.exports = Loader;