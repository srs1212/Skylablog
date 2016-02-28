var allHeader = React.createClass({
    render: function(){
        return (
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet" type="text/css" media="screen">
        <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="css/flexslider.css" rel="stylesheet" type="text/css" media="screen">
        <link href="css/animate.css" rel="stylesheet" type="text/css" media="screen">
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href="css/owl.carousel.css" rel="stylesheet" type="text/css" media="screen">
        <link href="css/owl.theme.css" rel="stylesheet" type="text/css" media="screen">
        <link href="css/magnific-popup.css" rel="stylesheet" type="text/css">
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        )
    }
});

ReactDOM.render(
  React.createElement(allHeader),
  document.getElementById('xx')
);
// Not working 