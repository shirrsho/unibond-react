import { useEffect, useState } from 'react';
import React from 'react'

function Topbar() {

    const [currText, setCurrText] = useState('');

    const topbartext = [
      'We Export Apparels',
      'We provide high quality Produtcs',
      'Bond with Trust'
    ]
    let ind = 0;
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Code to be executed every 1 second goes here
        setCurrText(topbartext[ind++%3]);
      }, 3000);
  
      // Cleanup function to clear the interval when the component unmounts or the dependency changes
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    
  return (
    <div className="top-bar">
    <div className="text-container">
        <p className="circulating-text">{currText}</p>
        {/* <p className="circulating-text">We provide high quality Produtcs</p>
        <p className="circulating-text">Bond with Trust</p> */}
    </div>
    <nav id="navbar" className="navbarclass">
        <ul>
            {/* <li><a href="./about.html">ABOUT</a></li> */}
            <li><a href="#products">PRODUTCS</a></li>
            <li><a href="./services.html">SERVICES</a></li>
            <li><a href="./services.html">TEAM</a></li>
            <li><a href="./contact.html">CONTACT</a></li>
        </ul>
    </nav>
</div>
  )
}

export default Topbar
