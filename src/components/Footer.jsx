import React from 'react';
import '../styles/Footer.css';
import { profile } from '../data/content';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <img 
            src="https://raw.githubusercontent.com/stharanzn/MyPortfolio/dev-v2/src/assets/logo.png" 
            alt="logo" 
            className="footer-logo"
          />
          <div className="footer-text">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
          </div>
        </div>
        <div className="footer-links">
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${profile.contact.email}`}>Email</a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
