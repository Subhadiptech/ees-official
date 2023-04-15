import React from 'react'
import "./Footer.css"

const Footer =() =>{
    return(
        <>
      <footer>
      <div className="footer-container">
      <div class="address">
        <h1>Our Address</h1>
        <div>Electrical Engineering Department </div>
          <div>NIT Jamshedpur</div> 
          <div>Adityapur, Jamshedpur </div> 
          <div>Jharkhand 831014</div>
          <div>P:- 3434343434 </div>
          <div>Email:- ees_eed@nitjsr.ac.in </div>        
      </div>

      <div class="social">
        <h2>Electrical Engineering society</h2>
        <h3>NIT Jamshedpur</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquam!</p>
        <div class="social-links">
          <a href="https://www.facebook.com/eesnitjsr/" target="_blank"><img src="./images/social/fb-icon.png" alt=""/></a>
          <a href="https://www.instagram.com/nitjamshedpur_official/?hl=en" target="_blank"><img src="./images/social/insta-icon.png" alt=""/></a>
          <a href="https://www.linkedin.com/company/eesnitjsr/?originalSubdomain=in" target="_blank"><img src="./images/social/linkdin-icon.png" alt=""/></a>
          <a href="https://twitter.com/ees_electrical?lang=en" target="_blank"><img src="./images/social/twitter-icon.png" alt=""/></a>
        </div>
      </div>
      </div>
      <div class="copyright">
          © Copyright <strong><span>Electrical Engineering Society</span></strong>. All Rights Reserved
        </div>
    </footer>

        </>
    )
}

export default Footer;