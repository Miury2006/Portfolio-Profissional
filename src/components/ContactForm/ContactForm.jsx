import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

// Configuração dos campos do formulário
const formFields = {
  nome: {
    label: 'Nome Completo',
    type: 'text',
    required: true
  },
  email: {
    label: 'E-mail',
    type: 'email',
    required: true
  },
  empresa: {
    label: 'Empresa',
    type: 'text',
    required: false
  },
  cargo: {
    label: 'Cargo',
    type: 'text',
    required: false
  },
  telefone: {
    label: 'Telefone',
    type: 'tel',
    required: false
  },
  interesse: {
    label: 'Tipo de Interesse',
    type: 'select',
    required: true,
    options: [
      { value: '', label: 'Selecione uma opção' },
      { value: 'contratacao', label: 'Oportunidade de Trabalho' },
      { value: 'freelance', label: 'Projeto Freelance' },
      { value: 'consultoria', label: 'Consultoria' },
      { value: 'parceria', label: 'Parceria' },
      { value: 'outro', label: 'Outro' }
    ]
  },
  urgencia: {
    label: 'Urgência',
    type: 'select',
    required: false,
    options: [
      { value: 'baixa', label: 'Baixa - Sem pressa' },
      { value: 'normal', label: 'Normal - Algumas semanas' },
      { value: 'alta', label: 'Alta - Alguns dias' },
      { value: 'urgente', label: 'Urgente - Imediato' }
    ]
  },
  mensagem: {
    label: 'Mensagem',
    type: 'textarea',
    required: true
  }
};

// Função para validar o formulário
const validateForm = (formData, requiredFields) => {
  const errors = {};
  let isValid = true;

  // Validar campos obrigatórios
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = `${formFields[field].label} é obrigatório`;
      isValid = false;
    }
  });

  // Validar formato do e-mail
  if (formData.email && !isValidEmail(formData.email)) {
    errors.email = 'E-mail inválido';
    isValid = false;
  }

  // Validar telefone se fornecido
  if (formData.telefone && !isValidPhone(formData.telefone)) {
    errors.telefone = 'Telefone inválido';
    isValid = false;
  }

  return { isValid, errors };
};

// Função para validar e-mail
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar telefone
const isValidPhone = (phone) => {
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

// Função para criar conteúdo do e-mail
const createEmailContent = (formData) => {
  const emailSubject = `Novo Contato - Portfolio: ${formData.nome}`;
  const emailBody = `
NOVO CONTATO ATRAVÉS DO PORTFÓLIO
=================================

👤 INFORMAÇÕES PESSOAIS:
• Nome: ${formData.nome}
• E-mail: ${formData.email}
• Telefone: ${formData.telefone || 'Não informado'}

🏢 INFORMAÇÕES PROFISSIONAIS:
• Empresa: ${formData.empresa || 'Não informado'}
• Cargo: ${formData.cargo || 'Não informado'}

💼 DETALHES DO INTERESSE:
• Tipo de Interesse: ${getInterestLabel(formData.interesse)}
• Urgência: ${getUrgencyLabel(formData.urgencia)}

📝 MENSAGEM:
${formData.mensagem}

=================================
Data: ${new Date().toLocaleString('pt-BR')}
Enviado através do formulário de contato do portfólio
  `;

  return { emailSubject, emailBody };
};

// Função para obter label do interesse
const getInterestLabel = (value) => {
  const option = formFields.interesse.options.find(opt => opt.value === value);
  return option ? option.label : value;
};

// Função para obter label da urgência
const getUrgencyLabel = (value) => {
  const option = formFields.urgencia.options.find(opt => opt.value === value);
  return option ? option.label : value;
};

// Função para abrir cliente de e-mail
const openEmailClient = (subject, body) => {
  const mailtoLink = `mailto:miury4529@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink, '_blank');
};

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

  // Fechar formulário com ESC
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  // Focar no primeiro campo quando o formulário abrir
  useEffect(() => {
    const firstInput = document.querySelector('input[name="nome"]');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Formatação especial para telefone
    let formattedValue = value;
    if (name === 'telefone') {
      formattedValue = formatPhone(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Função para formatar telefone
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
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
      }, 2500);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro ao processar formulário:', error);
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
            disabled={isSubmitting}
          />
        ) : type === 'select' ? (
          <select
            id={fieldName}
            name={fieldName}
            value={value}
            onChange={handleInputChange}
            className={hasError ? styles.error : ''}
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            autoComplete={fieldName === 'email' ? 'email' : fieldName === 'telefone' ? 'tel' : 'off'}
          />
        )}
        
        {hasError && (
          <span className={styles.errorMessage}>
            <i className="fas fa-exclamation-circle"></i> {hasError}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={styles.contactFormOverlay} onClick={onClose}>
      <div className={styles.contactForm} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.closeForm} 
          onClick={onClose}
          type="button"
          aria-label="Fechar formulário"
        >
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

        <form onSubmit={handleSubmit} noValidate>
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