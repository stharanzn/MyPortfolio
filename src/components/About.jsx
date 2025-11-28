import React from 'react';
import Section from './Section';
import { profile, hobbies, education } from '../data/content';
import '../styles/About.css';

const About = () => {
  return (
    <Section id="about" title="About Me" className="about-section">
      <div className="about-grid">
        <div className="about-text">
          <p>{profile.summary}</p>
          
          <div className="education-block">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="edu-item">
                <h4>{edu.institution}</h4>
                <p>{edu.degree}</p>
                <span className="year">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hobbies-block">
          <h3>Hobbies & Interests</h3>
          <ul className="hobbies-list">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
