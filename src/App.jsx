import React, { useState } from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ContactForm from './components/ContactForm/ContactForm';
import FloatingParticles from './components/FloatingParticles/FloatingParticles';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import { 
  personalInfo, 
  skills, 
  educationData, 
  coursesData, 
  projectsData, 
  objectiveText 
} from './data/portfolioData';
import styles from './App.module.css';

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  return (
    <div className={styles.portfolioContainer}>
      <FloatingParticles count={50} />
      <ScrollIndicator />
      
      <div className={styles.container}>
        <Header onContactClick={handleContactClick} />
        
        <div className={styles.mainContent}>
          {/* Objetivo Profissional */}
          <Section
            title="Objetivo Profissional"
            icon="fas fa-bullseye"
            delay="0.2s"
          >
            <div className={styles.objective}>
              <p>{objectiveText}</p>
            </div>
          </Section>

          {/* Formação */}
          <Section
            title="Formação Acadêmica"
            icon="fas fa-graduation-cap"
            delay="0.4s"
          >
            {educationData.map(item => (
              <div key={item.id} className={styles.educationItem}>
                <div className={styles.itemHeader}>
                  <div className={styles.itemIcon}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemSubtitle}>
                      {item.institution} • {item.period}
                    </div>
                  </div>
                </div>
                <div className={styles.itemDetails}>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Section>

          {/* Cursos */}
          <Section
            title="Cursos e Certificações"
            icon="fas fa-certificate"
            delay="0.6s"
          >
            {coursesData.map(item => (
              <div key={item.id} className={styles.courseItem}>
                <div className={styles.itemHeader}>
                  <div className={styles.itemIcon}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemSubtitle}>
                      {item.institution} • {item.period}
                    </div>
                  </div>
                </div>
                <div className={styles.itemDetails}>
                  <p>{item.description}</p>
                  <div className={styles.techBadges}>
                    {item.technologies?.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Section>

          {/* Habilidades */}
          <SkillsSection skills={skills} delay="0.8s" />

          {/* Projetos */}
          <Section
            title="Projetos Desenvolvidos"
            icon="fas fa-laptop-code"
            delay="1s"
          >
            <div className={styles.projectsGrid}>
              {projectsData.map(project => (
                <div key={project.id} className={styles.projectItem}>
                  <div className={styles.itemHeader}>
                    <div className={styles.itemIcon}>
                      <i className={project.icon}></i>
                    </div>
                    <div>
                      <div className={styles.itemTitle}>{project.title}</div>
                    </div>
                  </div>
                  <div className={styles.itemDetails}>
                    <p>{project.description}</p>
                    <div className={styles.techBadges}>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Conquista */}
          <Section
            title="Conquistas"
            icon="fas fa-trophy"
            delay="1.2s"
          >
            <div className={styles.achievement}>
              <i className="fas fa-medal"></i>
              <h3>Em Busca da Primeira Oportunidade</h3>
              <p>Pronto para aplicar conhecimentos e crescer profissionalmente!</p>
            </div>
          </Section>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm onClose={handleCloseContact} />
      )}
    </div>
  );
};

export default App;