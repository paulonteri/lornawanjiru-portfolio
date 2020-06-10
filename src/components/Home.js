import React from 'react';



 function Home(){
     return(
        <div>
                <div className = "postme">
                    <section id = "boxx">
                    <div id= "icons"><center><i class="fas fa-laptop-code"></i></center></div>  
                    <h3><center><bold>WEB DEVELOPMENT</bold></center></h3>
                    <p><center>I am Lorna</center></p>
                    </section> 
                    <section id = "boxx1">
                    <div id= "icons"><center><i class="fas fa-paw"></i></center></div>
                    <h3><center><bold>DOG BREEDING</bold></center></h3>
                    <p><center>I am Lorna</center></p>
                    </section> 
                    <section id = "boxx2">
                    <div id= "icons"><center><i class="fas fa-user-secret"></i></center></div>
                    <h3><center><bold>CYBERSECURIITY</bold></center></h3>
                    <p><center>I am Lorna</center></p>
                    </section> 
                </div>
                <article className="post featured">
                        <header class="major">
                            <span class="date"><h2>About Me</h2></span>
                           
                            <p>
                                Hello Everyone,<br></br>
                            I am Lorna Wanjiru Muchangi. I have so much to say about myself but i won't state my education or experience <br></br>
                            cause i feel like i thats rather a resume stuff and i have a link to that right here <br></br><button>RESUME</button>.<br></br>
                            So as I am a undergraduate Computer science student who loves Dogs and spends of the time infront of a screen if not a dog<br>
                            </br>.I like to define myself as a very social anti-social girl."I know that might be confusing."<br></br>
                            </p>
                        </header>
                        
                </article>
                <div className="mee"> 
                            <div id="doggy">
                                <div className="imgbox">
                                   
                                </div>
                                <div className="boxcontent">
                                  <center> <h3>DOG BREEDING</h3>
                                   <p>Dont I love dogs. All my life i havent actually being a dog person or lets say an animal person,
                                    but after staying for a while with someone i actually came to enjoy and love dog companies.
                                   I am not really experienced at dog breeding but for sure i love dogs and i think i do a good job at it.
                                   <button>LEARN MORE</button>
                                   </p></center>
                                </div>
                            </div>
                            <div id="webby">
                                <div className="imgbox1">
                                   
                                </div>
                                <div className="boxcontent">
                                   <center><h3>WEB DEVELOPMENT</h3>
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
                                <div className="boxcontent">
                                   <center><h3>CYBERSECURITY</h3>
                                   <p>
                                      Have you ever considered? I have children who will protect them? Well yes thats me. I love everything i develop cause thats my work.
                                      but they need protection and i loving my work.<br></br>
                                      <button>LEARN MORE</button> 
                                    </p></center>
                                </div>
                            </div>
                </div>
                
        </div>
     );
 }

 export default Home;