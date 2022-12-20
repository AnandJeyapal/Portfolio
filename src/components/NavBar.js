import React from "react";
import profile from '../images/profile.png'

export default function Nav() {
  return(
    <nav className="navbar">
      <a className="navbar-toggler">
        <img className = "nav-profile-img" src={profile}/>
      </a>
      <div className="navbar-menu-holder">
      <ul className="navbar-menu">
        <li className="nav-item">
          <a className="nav-menu-trigger" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-menu-trigger" href="#">EXPERIENCE</a>
        </li>
        <li className="nav-item">
          <a className="nav-menu-trigger" href="#">EDUCATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-menu-trigger" href="#">SKILLS</a>
        </li>
        <li className="nav-item">
          <a className="nav-menu-trigger" href="#">INTERESTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-menu-trigger" href="#">AWARDS</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}