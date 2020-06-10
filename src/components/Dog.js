import React from 'react';
import { Link } from 'react-router-dom';
 function Dog(){
     return(
		<div className="mee"> 
		<div id="doggy">
			<div className="imgbox">
			   
			</div>
			<div className="boxcontent">
			  <center> <h3>LILY</h3>
			   <p>Dont I love dogs. All my life i havent actually being a dog person or lets say an animal person,
				but after staying for a while with someone i actually came to enjoy and love dog companies.
			   I am not really experienced at dog breeding but for sure i love dogs and i think i do a good job at it.
			   <button><Link to="">LEARN MORE</Link></button>
			   </p></center>
			</div>
		</div>
		<div id="webby">
			<div className="imgbox1">
			   
			</div>
			<div className="boxcontent1">
			   <center><h3>SNOW</h3>
			   <p>I am a passionated web developer. I remember being in a senior class cause i felt like i had known enough 
				   about web developing. i have always loved making things look magical on the screen and cause i know
				   its not making a movie so making websites is my way.
				   <br></br> <button>LEARN MORE</button></p>
			   </center>
			</div>
		</div>
		<div id="cybey">
			<div className="imgbox2">
			   
			</div>
			<div className="boxcontent2">
			   <center><h3>SIMBA</h3>
			   <p>
				  Have you ever considered? I have children who will protect them? Well yes thats me. I love everything i develop cause thats my work.
				  but they need protection and i loving my work.<br></br>
				  <button>LEARN MORE</button> 
				</p></center>
			</div>
		</div>
		</div>
     );
 }

 export default Dog;