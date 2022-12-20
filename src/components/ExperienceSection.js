import React from "react";
import DetailCard from "./DetailCard";

export default function ExperienceSection() {
  return(
    <section className="resume-section expand">
        <div className="experience--layout">
          <h2>EXPERIENCE</h2>
          <DetailCard title="Software Engineer" company="Habib Bank AG Zurich" 
            description ="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring." duration ="April 2019 - Present"/>
          <DetailCard title="Lead Software Engineer" company="Impiger Technologies" 
            description ="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring." 
            duration ="Jan 2013 - April 2019"/>
        </div>
      </section>
  )
}