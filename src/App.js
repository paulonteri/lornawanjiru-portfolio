import React  from 'react';
import  Header  from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { BrowserRouter }  from "react-router-dom";

export default function App  () {
  

       return(
   
        
        <div className = "is-preload">
        <div id="wrapper" className="fade-in">
         <BrowserRouter>
          <Header />
          <Content />
          <Footer />
          </BrowserRouter> 

          
        </div>
     
   </div>
  
       );
 
  
}



