import React from "react";


export default function ProjectCard(props) {
  const responsibilities = props.responsibilities.map(res => <li>{res}</li>)
  console.log(require(`../images/${props.companyImg}`))
  return (
    <div className="project-container">
      <div className="project-detail--block">
        <img className="company-image" src={require(`../images/${props.companyImg}`)} />
        <div className="flex-grow-1 project">
          <div>
            <h3 class="mb-0">{props.title}</h3>
            <div className="subheading mb-3">{props.company}</div>
            <p>{props.description}</p>
            {props.subDescription && <p>{props.subDescription}</p>}
          </div>

        </div>
        <div className="flex-shrink-0"><span className="text-primary muli">{props.duration}</span></div>

      </div>
      <div className="project-desc">
        <p className="muli">{props.projectDescription}</p>
        <h4>Responsible for</h4>
        <ul className="responsible muli">
          {responsibilities}
        </ul>
</div>
    </div>
  )
}


