import React from 'react'
import './Team.css'
// import img1 from './images/linkdin.png'

const Team=() =>{
  return (
    <section id="team">
    <h2 id="t">Our Team</h2>
    <div id="members">
      <div class="card">
        <div class="l">
          <img src='./images/team/linkedin.png' alt="LinkedIn"/>
        </div>
          <img src='./images/team/profile.png' alt="EES Member"/>
          <h2>Aditya Raj</h2>
          <h3>President</h3>
      </div>
      <div class="card">
        <div class="l">
          <img src='./images/team/linkedin.png'alt="LinkedIn"/>
        </div>
          <img src='./images/team/profile.png' alt="EES Member"/>
          <h2>Shruti Priyadarshini</h2>
          <h3>General Secretary</h3>
      </div>
      <div class="card">
        <div class="l">
          <img src='./images/team/linkedin.png' alt="LinkedIn"/>
        </div>
          <img src='./images/team/profile.png' alt="EES Member"/>
          <h2>Divyanshu Dubey</h2>
          <h3>Manager</h3>
      </div>
    </div>
  </section>
  )
}

export default Team