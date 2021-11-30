//import User Components from Local Files
import React, { Component } from 'react';

/**
 * @author:"Madhavi itikala and Spandana"
 * @returns {Html}
 * @description Implementation of Forgot Component, If user forgot password then we redirect this page.
 */

class Footer extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "grey", color: "white", font: "castellar", padding: "20px" }}>
				<footer class="page-footer font-small pt-4">

					<div class="container-fluid text-center text-md-left">
						<div class="row">

							<div class="col-md-3 mt-md-0 mt-3">
								<p><h5 class="text-uppercase">QUICK LINKS</h5></p>
								<ul class="list-unstyled">
									<li>RETURN & EXCHANGE REQUEST</li>
									<li>Contact Us!</li>
									<li>Frequently Asked Questions</li>
									<li>We Are Hiring!</li>
									<li>Wholesale Enquiries</li>
									<li>Suta Earth</li>
									<li>About Us!</li>
									<li>Suta Coins</li>
								</ul>
							</div>



							<div class="col-md-3 mx-auto">
								<h5 class="font-weight-bold text-uppercase mt-3 mb-4">NEWS LETTER</h5>
								<p>Subscribe to receive updates, access to exclusive deals, and more.</p>
								<ul class="list-unstyled">
									<li><button type="checked" class="btn btn-secondary btn-lg" aria-pressed="true" style={{ color: "white" }} disabled>SUBSCRIBE</button></li>
								</ul>


							</div>


							<div class="col-md-3 mb-md-0 mb-2">
								<h5 class="text-uppercase">CUSTOMER SERVICE</h5>

								<ul class="list-unstyled">
									<li>Terms & Conditions</li>
									<li>Shipping & Delivery Policy</li>
									<li>Privacy Policy</li>
									<li>Disclaimer Policy</li>
									<li>Cancellation & Refund Policy</li>
								</ul>
							</div>

							<div class="col-md-3 mb-md-0 mb-2">
								<h5 class="text-uppercase">ABOUT SUTA</h5>
								<ul class="list-unstyled">
									<li>Suta combines India's centuries-old weaving traditions with contemporary style- so that what looks good, feels good too</li><br />
									<li>Toll Free: 1800 123 236 511</li><br />
									<li>Email: info@suta.in</li>
								</ul>
							</div>

						</div>

						<div class="footer-copyright text-left py-3">Copyright 2020 © Suta Private Limited. All rights reserved
						</div>

						<div class="row justify-content-between col-3">
							<img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/Screenshot_2020-11-05_at_5.14._1200x768.png?qbPeEkmH2KWK1YfUw65UmVr8EjYDRPgb&size=770:433" height="30" width="50"></img>
							<img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2016%2F07%2FMastercard_new_logo-1200x865.jpg" height="30" width="50"></img>
							<img src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png" height="30" width="50"></img>
							<img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/rupay-logo.png" height="40" width="50"></img>
							<img src="data:image/png;base64,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" height="30" width="50"></img>
						</div>

					</div>

				</footer>
			</div>

		);
	}
}
export default Footer;