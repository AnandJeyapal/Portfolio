import React from "react";
import profile from '../images/profile.png'

export default function Nav(props) {
  return(
    <nav className="navbar">
      <a className="navbar-toggler">
        <img className = "nav-profile-img" src={profile}/>
      </a>
      <div className="navbar-menu-holder">
      <ul className="navbar-menu">
        <li className="nav-item" onClick={(e) => props.handleClick(e, 1)}>
          <a className="nav-menu-trigger" href="#">ABOUT</a>
        </li>
        <li className="nav-item" onClick={(e) => props.handleClick(e, 2)}>
          <a className="nav-menu-trigger" href="#">EXPERIENCE</a>
        </li>
        <li className="nav-item" onClick={(e) => props.handleClick(e, 3)}>
          <a className="nav-menu-trigger" href="#">EDUCATION</a>
        </li>
        <li className="nav-item" onClick={(e) => props.handleClick(e, 4)}>
          <a className="nav-menu-trigger" href="#">SKILLS</a>
        </li>
        <li className="nav-item" onClick={(e) => props.handleClick(e, 5)}>
          <a className="nav-menu-trigger" href="#">PROJECTS</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}