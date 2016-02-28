var mainNav = React.createClass({
    render: function(){
        return (
                <div className ="navbar navbar-default navbar-static-top " role="navigation">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="index.html">skyla</a>
                                </div>
                                <div className="navbar-collapse collapse">

                                    <ul className="nav navbar-nav navbar-right scrollto">
                                        <li><a href="/#home">Home</a></li>
                                        <li><a href="/#about">About</a></li>
                                        <li><a href="/#skills">Skills</a></li>
                                        <li><a href="/#services">Services</a></li> 
                                        <li><a href="/#work">Portfolio</a></li>
                                        <li><a href="#blog">Blog</a></li>
                                        <li><a href="/index.html/#contact">Contact</a></li>
                                    </ul>

                                </div>
                            </div>
                </div>
        )
    }
});

ReactDOM.render(
  React.createElement(mainNav),
  document.getElementById('mainnavigation')
);




