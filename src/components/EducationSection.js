import React from "react";
import DetailCard from "./DetailCard";

export default function EducationSection() {
  const d = 8;
  return(
    <section className="resume-section expand">
        <div className="experience--layout">
          <h2>EDUCATION</h2>
          <DetailCard title="Anna University (Ariyalur Campus), Tiruchirappalli" company="Bachelor of Engineering" 
            description ="Computer Science" subDescription="CGPA 8.5"duration ="Sep 2008 - April 2012" medal={d}/>
          </div>
      </section>
  )
}



