import React, {useState} from 'react'
import "./Header.css"

const Header=()=> {
 const [isDrawerOpen, setDrawerOpen] = useState(false);

 const handleToggle = () => {
  setDrawerOpen(!isDrawerOpen); 
}
  
  return (
    <>
    <div className={isDrawerOpen?"shadow-active":"shadow-inactive"} onClick={handleToggle}></div>
    <header>
    <img src='./images/ees_logo.png' className="logo"/>
    <div id="ees_title">Electrical Engineering Society <br/>NIT Jamshedpur</div>
    <nav className={isDrawerOpen?"drawer-open":"drawer-close"}>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#alumnis">Alumnis</a></li>
        <li><a href="#contactUs">Contact Us</a></li>
      </ul>
    </nav>
    <div className={`burger ${isDrawerOpen ? 'toggle' : ''}`} onClick={handleToggle}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </header>
  </>
  )
}


export default Header