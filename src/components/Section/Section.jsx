import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, icon, children, delay = '0s' }) => {
  return (
    <div 
      className={styles.section}
      style={{ animationDelay: delay }}
    >
      <h2 className={styles.sectionTitle}>
        <i className={icon}></i>
        {title}
      </h2>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </div>
  );
};

export default Section;