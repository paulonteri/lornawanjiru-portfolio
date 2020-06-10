import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
 function Footer(){
     return(
		 <BrowserRouter>
         <div>
             <div id="odd">
             {/* <!-- Footer --> */}
					<footer id="footer">
						<section>
							<form method="post" action="#">
								<div className="fields">
									<div className="field">
										<label htmlFor="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label htmlFor="email">Email</label>
										<input type="text" name="email" id="email" />
									</div>
									<div className="field">
										<label htmlFor="message">Message</label>
										<textarea name="message" id="message" rows="3"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
						</section>
						<section className="split contact">
							<section className="alt">
								<h3>Website</h3>
								<p><Link to="#" className="">www.lornawanjiru.com</Link></p>
							</section>
							<section>
								<h3>Phone</h3>
								<p><Link to="#">0717426148</Link></p>
							</section>
							<section>
								<h3>Email</h3>
								<p><Link to="#">lornawanjirumuchangi@gmail.com</Link></p>
							</section>
							<section>
								<h3>Social</h3>
								<ul className="icons alt">
									<li><Link to="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></Link></li>
									<li><Link to="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></Link></li>
									<li><Link to="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></Link></li>
									<li><Link to="#" className="icon brands alt fa-github"><span className="label">GitHub</span></Link></li>
								</ul>
							</section>
						</section>
					</footer>

				{/* <!-- Copyright --> */}
					<div id="copyright">
						<ul><li>&copy; Untitled</li><li>Design: <Link to="#">Lorna Wanjiru </Link> 2020</li></ul>
					</div>
             </div>        
         </div>
		 </BrowserRouter> 
     )
 }

 export default Footer;