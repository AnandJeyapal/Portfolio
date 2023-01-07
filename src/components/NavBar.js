import React from "react";
import profile from '../images/profile.png'

export default function Nav(props) {
  const [selection, setSelection] = React.useState(1);
  
  function handleClick(e, pos) {
    setSelection(pos)
    props.handleClick(e, pos)

  }

  function getClassName(pos) {
     return selection === pos ? "nav-item active" : "nav-item"
  }

  return(
    <nav className="navbar">
      <a className="navbar-toggler">
        <img className = "nav-profile-img" src={profile}/>
      </a>
      <div className="navbar-menu-holder">
      <ul className="navbar-menu">
        <li className= {getClassName(1)} onClick={(e) => handleClick(e, 1)}>
          <a className="nav-menu-trigger" href="#">ABOUT</a>
        </li>
        <li className={getClassName(2)} onClick={(e) => handleClick(e, 2)}>
          <a className="nav-menu-trigger" href="#">EXPERIENCE</a>
        </li>
        <li className={getClassName(3)} onClick={(e) => handleClick(e, 3)}>
          <a className="nav-menu-trigger" href="#">EDUCATION</a>
        </li>
        <li className={getClassName(4)} onClick={(e) => handleClick(e, 4)}>
          <a className="nav-menu-trigger" href="#">SKILLS</a>
        </li>
        <li className={getClassName(5)} onClick={(e) => handleClick(e, 5)}>
          <a className="nav-menu-trigger" href="#">PROJECTS</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}