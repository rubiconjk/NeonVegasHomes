<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$address = $_POST['address'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$from = 'Home Analysis Request'; 
		$to = 'harrisonnv@gmail.com'; 
		$subject = "$name Home Analysis Request";
		
		$body ="From: $name\nE-Mail: $email\nPhone Number: $phone\nAddress: $address";
		
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}
		
		// Check if address has been entered
		if (!$_POST['address']) {
			$errAddress = 'Please enter the property address';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		//Check if phone has been entered
		if (!$_POST['phone']) {
			$errPhone = 'Please enter your phone number';
		}
		
		// If there are no errors, send the email
		if (!$errName && !$errAddress && !$errEmail && !$errPhone) {
			if (mail ($to, $subject, $body, $from)) {
				$result='<div class="alert alert-success">Thank You! I will be in touch soon with your Home Analysis report.</div>';
			} else {
				$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>';
			}
		}
	}
?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Fill out this short form for a free home analysis report.">
		<meta name="author" content="Suzanne Harrison">
		<meta name="keywords" content="Free Home Analysis, Las Vegas, Las Vegas Valley, Clark County, City of Las Vegas, City of North Las Vegas, City of Henderson, Boulder City, Nellis Air Force Base, Spring Mountains, Mount Charleston, Southern Nevada, Real Estate, Broker, Selling, 1031 Exchange, Short Sale, Foreclosure, Sell, Buying, Buy, Renting, Rent, MLS, Multiple Listing Service, Mortgate, Calculator, Maps, Reference Maps, Weather, Weather Forecast, Current Conditions, Personal Weather Station">
		<link rel="icon" href="images/favicon.ico">
		
		<!-- website title -->
		<title>Las Vegas Free Home Analysis Report</title>

		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/custom_css.css" rel="stylesheet">
		<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">

	</head>
    
    <!-- HTML code from Bootply.com editor -->
    
	<body>
		<div class="page-container">

			<!-- top navbar -->
			<div class="navbar container-top navbar-fixed-top" role="navigation">
				<div class="container-fluid">
					<div class="navbar-header">
						<div class="btn-group btn-group-topnav" role="group" aria-label="...">
							<a href="http://www.neonvegashomes.com"><button type="button" class="btn btn-danger"><i class="fa fa-home"></i></button></a>
							<a href="tel:+17024191888"><button type="button" class="btn btn-success"><i class="fa fa-phone-square"></i>&nbsp&nbsp702-419-1888</button></a>
						</div>
						<button type="button" class="navbar-toggle" data-toggle="offcanvas" data-target=".sidebar-nav">
							<a href="#top" class="link-white"><small>Menu</small></a>
						</button>
					</div>
				</div>
			</div>
			<!-- end top navbar -->
		
			<div class="container-fluid">
				<div class="row row-offcanvas row-offcanvas-left">
					
					<!-- sidebar -->
					<div class="col-xs-6 col-sm-2 sidebar-offcanvas" id="sidebar" role="navigation">
						<ul class="nav nvh-list">
							<li><a href="http://www.neonvegashomes.com" class="link-white">Home</a></li>
							<li><a href="http://suzanneharrison.las.mlsmatrix.com/Matrix/Public/?L=1&ap=PP-8" target="_blank" class="link-white">Listings</a></li>
							<li><a href="las-vegas-rental-listings.html" class="link-white">Rentals</a></li>
							<li><a href="http://suzanneharrison.las.mlsmatrix.com/Matrix/Public/?L=1&ap=SCH" class="link-white" >MLS Search</a></li>
							<li class="active"><a href="las-vegas-realtor-home-value-analysis.php" class="link-white">Home Analysis</a></li>
							<li><a href="las-vegas-gated-neighborhoods.html" class="link-white">Gated Neighborhoods</a></li>
							<li><a href="las-vegas-high-rise-condos.html" class="link-white">High-Rises</a></li>
							<li><a href="las-vegas-community-resources.html" class="link-white">Community</a></li>
							<li><a href="las-vegas-local-contacts.html" class="link-white">Local Contacts</a></li>
							<li><a href="las-vegas-maps-information.html" class="link-white">Maps & Info</a></li>
							<li><a href="las-vegas-news.html" class="link-white">Las Vegas Valley News</a></li>
							<li><a href="lasvegasvalleyweather.html" class="link-white">Las Vegas Valley Weather</a></li>
							<li><a href="las-vegas-traffic-cameras.html" class="link-white">Traffic Cameras</a></li>
							<li><a href="las-vegas-history.html" class="link-white">Las Vegas History</a></li>
							<li><a href="las-vegas-home-buying-help.html" class="link-white">Financial Help</a></li>
							<li><a href="las-vegas-real-estate-calculators.html" class="link-white">Calculators</a></li>
							<li><a href="las-vegas-realtor-reviews.html" class="link-white">Testimonials</a></li>
							<li><a href="las-vegas-realtor.html" class="link-white">About Me</a></li>
						</ul>
					</div>
					<!-- end sidebar -->
					
			
					<!-- main page content -->
					<div class="col-xs-12 col-sm-10" id="MainDiv">
						<img src="images/NVH_homeanalysis.png" class="center-block img-responsive" alt="Las Vegas Valley News">
						<h3 class="text-center text-info" class><strong>Suzanne Harrison - Broker-Sales, REALTOR&reg&nbsp&nbsp</strong></h3>
						<h4 class="text-center"><strong><a class="text-info" href="tel:+17024191888">702-419-1888</a></strong></h4>
						<h4 class="text-center"><strong><a href="mailto:HarrisonNV@gmail.com" class="text-info">HarrisonNV@gmail.com</a></strong></h4>

						<br>
						
						<!-- start focus -->
						
						<div>
							<br>
							<p>
							If you are thinking about selling your home this is the place to start.  I would be happy to do a market analysis for your home so you can see how much it is worth in today's Real Estate market.  Please fill out this form and I will get in touch with you shortly.  Alternatively, you can always call or text me at <a href="tel:+17024191888" class="text-primary">(702) 419-1888</a>.  I look forward to working with you!
							</p>
						</div>
						
						<div class="panel panel-primary">
							<div class="panel-heading text-center">
								<h4>Free Home Analysis Form</h4>
							</div>
							<div class="panel-body">
								<form class="form-horizontal" role="form" method="post" action="las-vegas-realtor-home-value-analysis.php">
									<div class="form-group">
										<div class="col-sm-10 col-sm-offset-2">
											<?php echo $result; ?>	
										</div>
									</div>
									<div class="form-group">
										<label for="name" class="col-sm-2 control-label">Name</label>
										<div class="col-sm-10">
											<input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
											<?php echo "<p class='text-danger'>$errName</p>";?>
										</div>
									</div>
									<div class="form-group">
										<label for="name" class="col-sm-2 control-label">Property Address</label>
										<div class="col-sm-10">
											<input type="text" class="form-control" id="address" name="address" placeholder="Your Property's Address" value="<?php echo htmlspecialchars($_POST['address']); ?>">
											<?php echo "<p class='text-danger'>$errAddress</p>";?>
										</div>
									</div>
									<div class="form-group">
										<label for="email" class="col-sm-2 control-label">Email</label>
										<div class="col-sm-10">
											<input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
											<?php echo "<p class='text-danger'>$errEmail</p>";?>
										</div>
									</div>
									<div class="form-group">
										<label for="phone" class="col-sm-2 control-label">Phone</label>
										<div class="col-sm-10">
											<input type="text" class="form-control" id="phone" name="phone" placeholder="000-000-0000" value="<?php echo htmlspecialchars($_POST['phone']); ?>">
											<?php echo "<p class='text-danger'>$errPhone</p>";?>
										</div>
									</div>
									
									
									<div class="form-group">
										<div class="col-sm-10 col-sm-offset-2">
											<input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
										</div>
									</div>
									
								</form>
							</div>
						</div>

						<!-- end focus -->
						
						<!-- begin footer information -->
						<div class="row text-center">
							<div class="col-sm-4">
								<img src="images/eq_small.png" alt="Equal Housing Opportunity" style="width:100px;height:103px">
							</div>
							
							<div class="col-sm-4">
								<img src="images/VVV_realty_logo.png" alt="Very Vintage Vegas Realty" style="width:250px;height:70px">
								<br>
								<small>5473 S Eastern Ave, Suite A</small><br>
								<small>Las Vegas, NV 89119</small>
							
							</div>
							
							<div class="col-sm-4">
								<img src="images/MLS_small.png" alt="Multiple Listing Service" style="width:200px;height:100px">
							</div>
						</div>
			
						<hr>
			
						<div class="text-center">
							<h5><a href="index.html" class="text-primary">Suzanne Harrison</a></h5>
							<h5><a href="index.html" class="text-primary">Broker-Sales, REALTOR&reg</a></h5>
							<h5><a href="tel:+17024191888" class="text-primary">(702) 419-1888</a></h5>
							<h5><a href="mailto:HarrisonNV@gmail.com" class="text-primary">HarrisonNV@gmail.com</a></h5>
							<h5 class="text-success"><em>I look forward to hearing from you!</em>
							<br>
							<h5 class="text-danger">Copyright &copy2016 Suzanne Harrison. All rights reserved.</h5>
							<h5><a href="http://www.NeonVegasHomes.com" class="text-primary">www.NeonVegasHomes.com</a></h5>
						</div>
						<br><br>
						<!-- end footer information -->
						
						
					</div>
					<!-- end main page content -->
				</div>
			</div>
			<!-- end fluid container -->

		


		<!-- core bootstrap javascript -->
		<script type="text/javascript" src="js/bootstrap.min.js"></script>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>

		<!-- custom side navigation menu javascript  -->
		<script type="text/javascript" src="js/menu.js"></script>

		<!-- news feed javascript -->
		<!-- CC -->
		<script src="nvh_js/news.js"></script>
		<script src="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.clarkcountynv.gov%2F_layouts%2Ffeed.aspx%3Fxsl%3D1%26web%3D%2FNews%26page%3D5679e91a-69f5-4418-acc0-e31d2d044b9a%26wp%3Df424826a-02a0-4f70-8484-f4cc45990c0b'&format=json&diagnostics=true&callback=ccNewsCallback"></script>


		<!-- COH -->
		<script src="nvh_js/cohnews.js"></script>
		<script src="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feed%20where%20url%3D'http%3A%2F%2Ffeeds.feedburner.com%2FCityOfHendersonNewsReleases%3Fformat%3Dxml'&format=json&diagnostics=true&callback=cohNewsCallback"></script>
		
		<!-- Google Analytics -->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-40198419-3', 'auto');
		  ga('send', 'pageview');
		</script>
		
	</body>
	

</html>