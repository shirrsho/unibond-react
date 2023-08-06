import React from 'react'
import '../styles/homepage.css'

function Hero() {
  return (
    <section style={{height:'100vh'}}>
        <div className="hero-text">
            <img id="logoImage" src="images/logos/sq-white.png" alt="Logo" className="logo"/>
            <h1>UNIBOND</h1>
            {/* <!-- <h3>Vestir Internationsl Ltd</h3> --> */}
            <p>We export high quality clothings for the top Brands!<br /> Originated in Bangladesh</p>
            {/* <!-- <div className="buttons">
                <button className="fancy-button" id="moreButton">DETAILS</button>
                <button className="fancy-button" id="contactButton">CONTACT</button>
            </div> --> */}
        </div>

        <div className="overlay" id="overlay"></div>
        <video autoPlay muted loop id="myVideo">
            <source src="images/computer.mp4" type="video/mp4"/>
        </video>
        <video autoPlay muted loop id="myPhoneVideo">
            <source src="images/phone.mp4" type="video/mp4"/>
        </video>
    </section>
  )
}

export default Hero
