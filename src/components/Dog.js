import React from 'react';
import { Link } from 'react-router-dom';
 function Dog(){
     return(
		 <div id="dogsection">
			 <div classname = "post.featured">
				 <p>
					 Dogs are man's Bestfriend and that why we want to  ensure everyone
					 got a Bestfriend.
					 <ul>
					 <li>Heathly with proof.</li>
					 <li>Heathly with proof.</li>
					 <li>Heathly with proof.</li>
					 <li>Heathly with proof.</li>
					 </ul>
				 </p>
			 </div>
		<div className="mee"> 
		<div id="doggy">
			<div className="imgbox">
			   
			</div>
			<div className="boxcontent">
			   <h2>LILY</h2>
			   <h3>FEMALE</h3><br></br><br></br>
			   <button><Link to="">LEARN MORE</Link></button>
			</div>
		</div>
		<div id="webby">
			<div className="imgbox1">
			   
			</div>
			<div className="boxcontent">
			<h2>LILY</h2>
			   <h3>FEMALE</h3><br></br><br></br>
			   <button><Link to="">LEARN MORE</Link></button>
			</div>
		</div>
		<div id="cybey">
			<div className="imgbox2">
			   
			</div>
			<div className="boxcontent">
			<h2>LILY</h2>
			   <h3>FEMALE</h3><br></br><br></br>
			   <button><Link to="">LEARN MORE</Link></button>
			</div>
		</div>
		</div>
		</div>
     );
 }

 export default Dog;