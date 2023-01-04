import React from 'react';
import NavBar from './NavBar';
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProfileHeader from "./ProfileHeader";
import SkillsSection from "./SkillsSection";


const profileRef = React.createRef();
const skillsRef = React.createRef();
const educationRef = React.createRef();
const experienceRef = React.createRef();

function ProfileLayout() {

  return (
    <div className="profile--layout">
      <ProfileHeader ref = {profileRef} />
      <hr/>
      <ExperienceSection ref = {experienceRef} />
      <hr/>
      <EducationSection ref = {educationRef} />
      <hr/>
      <SkillsSection ref = {skillsRef} />
    </div>
  )
}

export default function Application() {

  function onNavClick(e, pos) {
    e.preventDefault()
    if(pos === 1) {
      profileRef.current.scrollIntoView({behavior: 'smooth'})
    } else if(pos === 2) {
      experienceRef.current.scrollIntoView({behavior: 'smooth'})
    } else if(pos === 3) {
      educationRef.current.scrollIntoView({behavior: 'smooth'})
    } else if(pos === 4) {
      skillsRef.current.scrollIntoView({behavior: 'smooth'})
    }
  
  }

  return (
    <main className='main-layout'>
      <NavBar handleClick ={onNavClick}/>
      <ProfileLayout/>
    </main> 
  )
}
