import React from 'react';
import Section from '../Section/Section';
import styles from './SkillsSection.module.css';

const SkillsSection = ({ skills, delay = '0s' }) => {
  return (
    <Section
      title="Habilidades e Competências"
      icon="fas fa-tools"
      delay={delay}
    >
      <div className={styles.skillsGrid}>
        {/* Habilidades Técnicas */}
        <div className={styles.skillCategory}>
          <h4>
            <i className="fas fa-code"></i>
            Habilidades Técnicas
          </h4>
          <div className={styles.technicalSkills}>
            {skills.technical.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillProgress}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades Pessoais */}
        <div className={styles.skillCategory}>
          <h4>
            <i className="fas fa-user-friends"></i>
            Habilidades Pessoais
          </h4>
          <ul className={styles.skillList}>
            {skills.personal.map((skill, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;