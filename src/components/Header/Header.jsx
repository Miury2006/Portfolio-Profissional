import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { copyToClipboard } from '../../utils/helpers';
import styles from './Header.module.css';

const Header = ({ onContactClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.profileSection}>
        <div className={styles.profileAvatar}>
          <i className="fas fa-user"></i>
        </div>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.title}>{personalInfo.title}</p>
        
        <div className={styles.contactInfo}>
          <div 
            className={styles.contactItem} 
            onClick={() => copyToClipboard(personalInfo.address)}
          >
            <i className="fas fa-map-marker-alt"></i>
            <span>{personalInfo.address}</span>
          </div>
          
          <div 
            className={styles.contactItem} 
            onClick={() => copyToClipboard(personalInfo.phone)}
          >
            <i className="fas fa-phone"></i>
            <span>{personalInfo.phone}</span>
          </div>
          
          <div 
            className={styles.contactItem} 
            onClick={() => copyToClipboard(personalInfo.email)}
          >
            <i className="fas fa-envelope"></i>
            <span>{personalInfo.email}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.ctaSection}>
        <button 
          className={styles.ctaButton}
          onClick={onContactClick}
        >
          <i className="fas fa-paper-plane"></i>
          Entre em Contato
        </button>
      </div>
    </div>
  );
};

export default Header;