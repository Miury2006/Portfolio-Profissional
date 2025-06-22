import React, { useState } from 'react';
import { formFields } from '../../data/portfolioData';
import { validateForm, createEmailContent, openEmailClient } from '../../utils/helpers';
import styles from './ContactForm.module.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    telefone: '',
    interesse: '',
    mensagem: '',
    urgencia: 'normal'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    // Validar formulário
    const requiredFields = ['nome', 'email', 'interesse', 'mensagem'];
    const validation = validateForm(formData, requiredFields);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Criar conteúdo do e-mail
      const { emailSubject, emailBody } = createEmailContent(formData);
      
      // Abrir cliente de e-mail
      openEmailClient(emailSubject, emailBody);
      
      setSubmitStatus('success');
      
      // Resetar formulário após sucesso
      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          empresa: '',
          cargo: '',
          telefone: '',
          interesse: '',
          mensagem: '',
          urgencia: 'normal'
        });
        setSubmitStatus('');
        onClose();
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (fieldName, fieldConfig) => {
    const { label, type, required, options } = fieldConfig;
    const value = formData[fieldName] || '';
    const hasError = errors[fieldName];
    
    return (
      <div key={fieldName} className={styles.formGroup}>
        <label htmlFor={fieldName}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
        
        {type === 'textarea' ? (
          <textarea
            id={fieldName}
            name={fieldName}
            value={value}
            onChange={handleInputChange}
            className={hasError ? styles.error : ''}
            placeholder={`Digite ${label.toLowerCase()}...`}
            rows={4}
          />
        ) : type === 'select' ? (
          <select
            id={fieldName}
            name={fieldName}
            value={value}
            onChange={handleInputChange}
            className={hasError ? styles.error : ''}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={fieldName}
            name={fieldName}
            value={value}
            onChange={handleInputChange}
            className={hasError ? styles.error : ''}
            placeholder={`Digite ${label.toLowerCase()}...`}
          />
        )}
        
        {hasError && (
          <span className={styles.errorMessage}>{hasError}</span>
        )}
      </div>
    );
  };

  return (
    <div className={styles.contactFormOverlay} onClick={onClose}>
      <div className={styles.contactForm} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeForm} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className={styles.formHeader}>
          <h2>
            <i className="fas fa-envelope"></i>
            Entre em Contato
          </h2>
          <p>Preencha o formulário e vamos conversar sobre oportunidades!</p>
        </div>

        {submitStatus && (
          <div className={`${styles.statusMessage} ${
            submitStatus === 'success' ? styles.statusSuccess : styles.statusError
          }`}>
            {submitStatus === 'success' ? (
              <>
                <i className="fas fa-check-circle"></i>
                Mensagem enviada com sucesso! Seu cliente de e-mail será aberto.
              </>
            ) : (
              <>
                <i className="fas fa-exclamation-triangle"></i>
                Erro ao enviar mensagem. Tente novamente.
              </>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            {renderField('nome', formFields.nome)}
            {renderField('email', formFields.email)}
          </div>
          
          <div className={styles.formGrid}>
            {renderField('empresa', formFields.empresa)}
            {renderField('cargo', formFields.cargo)}
          </div>
          
          <div className={styles.formGrid}>
            {renderField('telefone', formFields.telefone)}
            {renderField('interesse', formFields.interesse)}
          </div>
          
          {renderField('urgencia', formFields.urgencia)}
          {renderField('mensagem', formFields.mensagem)}
          
          <div className={styles.formActions}>
            <button 
              type="submit" 
              className={`${styles.btn} ${styles.btnPrimary}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.loadingSpinner}></div>
                  Enviando...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Enviar Mensagem
                </>
              )}
            </button>
            
            <button 
              type="button" 
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={onClose}
              disabled={isSubmitting}
            >
              <i className="fas fa-times"></i>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;