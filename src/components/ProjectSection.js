import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from '../projects.js'

const cards = ProjectData.map(data => <ProjectCard key={data.id} {...data}/>)

const ProjectSection = React.forwardRef((props, ref) => (
  <section className="resume-section expand"  ref={ref}>
        <div className="experience--layout">
          <h2>PROJECTS</h2>
          {cards}
          </div>
      </section>
));

export default ProjectSection


