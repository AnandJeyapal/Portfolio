import React from 'react';
import {FaMailBulk} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import profile from '../images/profile.png'
const getColoredButton = function(bg, cl, text) {
   return (<div style = {{'background-color': bg, 'color': cl}}><FaMailBulk/><span>{text}</span></div>)
}
function Header() {
  return (
    <div className='profile-header'>
      <img className ="profile-image" src ={profile}/>
      <h2 className='name'>Anand Jeyapal</h2>
      <h4 className='profession'>Software Engineer</h4>
      <label class="company-span">Habib Bank AG Zurich</label>
      <div className='button-layout'>
           <div className='mail-button'><FaMailBulk/><span>Email</span></div>
           <div className='lin-button'><a href='https://www.linkedin.com/in/anand-jeyapal-464177a6/'><FaLinkedin/><span>LinkedIn</span></a></div>
      </div>
    </div>
  )
}
export default Header;