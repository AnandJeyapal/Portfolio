import React from "react";
import {FaJava} from "react-icons/fa"
import {FaJs} from "react-icons/fa"
import {FaAndroid} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {FaVaadin} from "react-icons/fa"

export default function SkillsSection() {
  return(
    <section className="resume-section expand">
      <div className="experience--layout">
        <h2>Skills</h2>
        <div className="subheading mb-0">PROGRAMMING LANGUAGES & TOOLS</div>
          <div className="skill-icons">
          <a className="skill-icon"><FaJava/></a>
          <a className="skill-icon"><FaJs/></a>
          <a className="skill-icon"><FaAndroid/></a>
          <a className="skill-icon"><FaReact/></a>
          <a className="skill-icon"><FaVaadin/></a>
          </div>
      

      </div>
    </section>
  )
}