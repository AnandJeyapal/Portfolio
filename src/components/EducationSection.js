import React from "react";
import DetailCard from "./DetailCard";

const EducationSection = React.forwardRef((props, ref) => (
  <section className="resume-section expand"  ref={ref}>
        <div className="experience--layout">
          <h2>EDUCATION</h2>
          <DetailCard title="Anna University (Ariyalur Campus), Tiruchirappalli" company="Bachelor of Engineering" 
            description ="Computer Science" subDescription="CGPA 8.5"duration ="Sep 2008 - April 2012" medal={true}/>
          <DetailCard title="St.Aloysius Higher Secondary School, Theni" company="12th Grade" 
            description ="Computer Science" subDescription="CGPA 9 (School Topper)"duration ="May 2007 - Sep 2008"/>
          </div>
      </section>
));

export default EducationSection


