// Utility functions

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  
  // Create visual notification
  const notification = document.createElement('div');
  notification.innerHTML = '✅ Copiado!';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(45deg, #4CAF50, #45a049);
    color: white;
    padding: 12px 20px;
    border-radius: 25px;
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  `;
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2000);
};

export const generateParticles = (count = 50) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 6
    });
  }
  return particles;
};

export const updateScrollIndicator = () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  const indicator = document.querySelector('.scroll-indicator');
  if (indicator) {
    indicator.style.width = scrollPercent + '%';
  }
};

export const createEmailContent = (formData) => {
  const emailSubject = `Novo Contato - Portfolio: ${formData.nome}`;
  const emailBody = `
NOVO CONTATO ATRAVÉS DO PORTFÓLIO
=================================

👤 INFORMAÇÕES PESSOAIS:
• Nome: ${formData.nome}
• Email: ${formData.email}
• Telefone: ${formData.telefone}

🏢 INFORMAÇÕES PROFISSIONAIS:
• Empresa: ${formData.empresa || 'Não informado'}
• Cargo: ${formData.cargo || 'Não informado'}

💼 DETALHES DO INTERESSE:
• Tipo de Interesse: ${formData.interesse}
• Urgência: ${formData.urgencia}

📝 MENSAGEM:
${formData.mensagem}

=================================
Data: ${new Date().toLocaleString('pt-BR')}
  `;

  return { emailSubject, emailBody };
};

export const openEmailClient = (emailSubject, emailBody, emailAddress = 'miury4529@gmail.com') => {
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  window.location.href = mailtoLink;
};

export const validateForm = (formData, requiredFields) => {
  const errors = {};
  
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = 'Campo obrigatório';
    }
  });

  // Email validation
  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'E-mail inválido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};