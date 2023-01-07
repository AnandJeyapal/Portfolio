import React from "react";
import {FaJava} from "react-icons/fa"
import {FaJs} from "react-icons/fa"
import {FaAndroid} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {FaVaadin} from "react-icons/fa"
import {FaDatabase} from "react-icons/fa"

const SkillsSection = React.forwardRef((props, ref) => (
    <section className="resume-section expand"  ref={ref}>
      <div className="experience--layout">
        <h2>Skills</h2>
        <div className="subheading mb-0">PROGRAMMING LANGUAGES & TOOLS</div>
          <div className="skill-icons">
          <a title="Java" className="skill-icon"><FaJava/></a>
          <a title="JavaScript"  className="skill-icon"><FaJs/></a>
          <a title="Android"  className="skill-icon"><FaAndroid/></a>
          <a title="React"  className="skill-icon"><FaReact/></a>
          <a title="Vaadin"  className="skill-icon"><FaVaadin/></a>
          <a title="SQL"  className="skill-icon"><FaDatabase/></a>
          </div>
        <br/>
        <div className="subheading mb-0">WORKFLOW</div>
        <ul className="muli gray lh-2">
          <li>Mobile Application Development with Java</li>
          <li>Web Application Development with Vaadin and React</li>
          <li>Expertise with Material design guidelines</li>
          <li>Team organization and code reviews across projects</li>
          <li>Agile Development and Scrum</li>
        </ul>
      

      </div>
    </section>
));

export default SkillsSection