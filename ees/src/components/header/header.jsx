import React, {useState} from 'react'
import "./header.css"
import eesLogo from "./ees_logo.png"

function Header() {
 const [isDrawerOpen, setDrawerOpen] = useState(false);

 const handleToggle = () => {
  setDrawerOpen(!isDrawerOpen); 
}
  
  return (
    <>
    <div className={isDrawerOpen?"shadow-active":"shadow-inactive"} onClick={handleToggle}></div>
    <header>
    <img src={eesLogo} className="logo"/>
    <div id="ees_title">Electrical Engineering Society <br/>NIT Jamshedpur</div>
    <nav className={isDrawerOpen?"drawer-open":"drawer-close"}>
      <ul className="nav-links">
        <li href="#">Home</li>
        <li href="#about">About</li>
        <li href="#events">Events</li>
        <li href="#team">Team</li>
        <li href="#alumnis">Alumnis</li>
        <li href="#contactUs">Contact Us</li>
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