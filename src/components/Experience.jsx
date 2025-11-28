import React from 'react';
import Section from './Section';
import { experience } from '../data/content';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <Section id="experience" title="Experience" className="experience-section">
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="location">{exp.location}</span>
                <span className="duration">{exp.duration}</span>
              </div>
              <ul className="timeline-desc">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
