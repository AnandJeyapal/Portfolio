import React from "react";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProfileHeader from "./ProfileHeader";
import SkillsSection from "./SkillsSection";

export default function ProfileLayout() {
  return (
    <div className="profile--layout">
      <ProfileHeader />
      <hr/>
      <ExperienceSection/>
      <hr/>
      <EducationSection/>
      <hr/>
      <SkillsSection/>
    </div>
  )
}