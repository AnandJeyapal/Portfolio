import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import DetailCard from "./DetailCard";

export default function ExperienceSection() {
  return(
    <section className="resume-section expand">
        <div className="experience--layout">
          <h2>EXPERIENCE</h2>
          <DetailCard title="Software Engineer" company="Habib Bank AG Zurich" 
            description ="Lead and organized the development life cycle from design to delivery. 
            Worked on the key features including Personal and Business Customer Relationship creation, Deposits creation. 
            Stabilised the product through bug fixes and
            peer code reviews. Developed reusable vaadin components for UI. Worked on the database design and optimized sql queries." duration ="April 2019 - Present"/>
          <DetailCard title="Lead Software Engineer" company="Impiger Technologies" 
            description ="Lead a team of 5 developers and 2 testers. Worked on various Android projects for mobile and tablet devices. Migrated / Upgraded apps with Material design guidelines. Delivered the products on time and maintained the codebase. 
            Apart from client projects, created an internal mobile application for employee resource allocation and leave applications." 
            duration ="Jan 2013 - April 2019"/>
        </div>
      </section>
  )
}
