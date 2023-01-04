import React from "react";
import {FaLinkedinIn} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const ProfileHeader = React.forwardRef((props, ref) => (
    <section className="resume-section" ref={ref}>
    <div className="resume-section-content">
        <h1 className="title-name">
            Anand 
        <span className="text-primary"> Jeyapal</span>
        </h1>
        <div className="subheading">
            Dubai, United Arab Emirates +971 (0) 50-819-7541 ·
            <a href="mailto:janand1991@gmail.com">janand1991@gmail.com</a>
        </div>
        <p className="lead mb-5">
        10 years of professional experience in Java, Mobile & Web Application development and solid experience in asset
management, SQL database management, document parsing and rendering solutions (optimized for mobile devices).
Looking forward to working on challenging and innovative projects.</p>
        <div className="social-icons">
            <a className="social-icon" href="#!"><FaLinkedinIn/></a>
            <a className="social-icon" href="#!"><FaFacebookF/></a>
            <a className="social-icon" href="#!"><FaTwitter/></a>
            <a className="social-icon" href="#!"><FaGithub/></a>
        </div>
    </div>
</section>
));

export default ProfileHeader