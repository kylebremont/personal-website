import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <a name="about" href="/#" />
            <p className="section-title"><span>About me</span></p>
            <div className="about-content">
                <p>I'm a software engineer based in Boulder, CO.</p>
            </div>
        </div>
    );
}

export default About;