import React from 'react';
import Section from './Section';
import { profile } from '../data/content';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" className="contact-section">
      <div className="contact-content">
        <p className="contact-text">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <span className="label">Email</span>
            <a href={`mailto:${profile.contact.email}`} className="value">{profile.contact.email}</a>
          </div>
          <div className="contact-item">
            <span className="label">Phone</span>
            <a href={`tel:${profile.contact.phone}`} className="value">{profile.contact.phone}</a>
          </div>
        </div>

        <a href={`mailto:${profile.contact.email}`} className="btn btn-primary btn-lg">
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;
