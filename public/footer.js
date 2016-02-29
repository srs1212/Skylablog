var MainFoot = React.createClass({
    render: function(){
        return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 margin-btm-30">

                        <div className="footer-col">
                            <ul className="list-inline social-1">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 margin-btm-30">
                        <div className="footer-col">
                                &nbsp;
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="footer-col">
                            <h3 className="widget-title">
                                Subscribe to my Newsletter
                            </h3>
                            <p>
                              Every now and again I have something interesting to say.
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            <div className="footer-btm">
                <ul className="footer-nav list-inline text-center">
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Sign In</a></li>
                </ul>
                <div className="copyright text-center">
                    Copyright 2016
                </div>
            </div>

        </footer>

     
        )
    }
});

ReactDOM.render(
<MainFoot />,
  document.getElementById('footerM')

);

 


           