# 🚀 Portfólio Pessoal - Matheus Iury Bezerra Abreu

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

> 💼 **Portfólio interativo e moderno para desenvolvedor web front-end júnior**

Um portfólio web responsivo e interativo, desenvolvido com React e CSS avançado, apresentando habilidades, projetos e informações profissionais de forma elegante e dinâmica.

---

## 📋 Índice

- [✨ Características](#-características)
- [🎯 Demonstração](#-demonstração)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📦 Instalação e Execução](#-instalação-e-execução)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🎨 Funcionalidades](#-funcionalidades)
- [📱 Responsividade](#-responsividade)
- [📧 Sistema de Contato](#-sistema-de-contato)
- [🚀 Deploy](#-deploy)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)
- [📞 Contato](#-contato)

---

## ✨ Características

### 🎨 **Design Moderno e Interativo**
- **Gradientes animados** em tempo real
- **Partículas flutuantes** para efeito visual imersivo
- **Animações suaves** em CSS3 e JavaScript
- **Efeitos de hover** sofisticados
- **Tema glassmorphism** com backdrop-filter

### 🔧 **Funcionalidades Avançadas**
- **Scroll indicator** dinâmico
- **Formulário de contato** integrado
- **Cópia automática** de informações de contato
- **Notificações visuais** para feedback do usuário
- **Loading states** e animações de transição

### 📱 **Totalmente Responsivo**
- **Mobile-first** approach
- **Grid layouts** adaptativos
- **Breakpoints** otimizados para todos os dispositivos

---

## 🎯 Demonstração

### 🖥️ **Capturas de Tela**

**Desktop - Página Principal**
```
┌─────────────────────────────────────────────────────────┐
│  🎨 Header com gradiente animado + Avatar + Contatos   │
├─────────────────────────────────────────────────────────┤
│  🎯 Objetivo Profissional                              │
│  📚 Formação Acadêmica + Cursos                        │
│  💼 Projetos + Habilidades Técnicas                    │
│  📧 CTA para Contato                                    │
└─────────────────────────────────────────────────────────┘
```

**Mobile - Layout Adaptativo**
```
┌─────────────────┐
│  🎨 Header      │
├─────────────────┤
│  📱 Cards       │
│  📚 Stacked     │
│  💼 Layout      │
│  📧 Contato     │
└─────────────────┘
```

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | ^18.0.0 | Framework JavaScript para UI |
| **HTML5** | - | Estrutura semântica moderna |
| **CSS3** | - | Estilização avançada + animações |
| **JavaScript ES6+** | - | Lógica e interatividade |

### **Bibliotecas e APIs**
| Recurso | Uso |
|---------|-----|
| **Font Awesome 6.4.0** | Ícones vetoriais |
| **Google Fonts (Poppins)** | Tipografia moderna |
| **Clipboard API** | Cópia de dados |
| **CSS Grid & Flexbox** | Layouts responsivos |

### **Ferramentas de Desenvolvimento**
- **VS Code** - Editor de código
- **Chrome DevTools** - Debug e otimização
- **React DevTools** - Debug específico do React

---

## 📦 Instalação e Execução

### 📋 **Pré-requisitos**

Certifique-se de ter instalado:
- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Git**

### 🚀 **Passo a Passo**

#### **1. Clone o repositório**
```bash
# Via HTTPS
git clone https://github.com/seu-usuario/portfolio-matheus-iury.git

# Via SSH
git clone git@github.com:seu-usuario/portfolio-matheus-iury.git

# Navegue até o diretório
cd portfolio-matheus-iury
```

#### **2. Instale as dependências**
```bash
# Com npm
npm install

# Com yarn
yarn install
```

#### **3. Execute o projeto**
```bash
# Modo desenvolvimento
npm start
# ou
yarn start

# O projeto será aberto em http://localhost:3000
```

#### **4. Build para produção**
```bash
# Gerar build otimizado
npm run build
# ou
yarn build

# Servir build localmente (opcional)
npx serve -s build
```

### 🔧 **Comandos Úteis**

```bash
# Instalar nova dependência
npm install nome-da-dependencia

# Executar testes
npm test

# Analisar bundle
npm run build && npx webpack-bundle-analyzer build/static/js/*.js

# Verificar dependências desatualizadas
npm outdated
```

---

## 🏗️ Estrutura do Projeto

```
portfolio-matheus-iury/
├── 📁 public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── 📁 src/
│   ├── 📄 Portfolio.js          # Componente principal
│   ├── 📄 index.js             # Ponto de entrada
│   └── 📄 index.css            # Estilos globais
├── 📁 build/                   # Build de produção (após npm run build)
├── 📄 package.json             # Dependências e scripts
├── 📄 README.md               # Este arquivo
└── 📄 .gitignore              # Arquivos ignorados pelo Git
```

### 📁 **Detalhamento dos Arquivos**

#### **`src/Portfolio.js`**
- Componente React principal
- Gerenciamento de estado com hooks
- Lógica do formulário de contato
- Animações e efeitos visuais

#### **`public/index.html`**
- Template HTML base
- Meta tags para SEO
- Links para fontes externas

---

## 🎨 Funcionalidades

### 🎯 **Seções Principais**

#### **1. Header Interativo**
```javascript
// Características:
✅ Avatar animado com efeito pulse
✅ Gradiente de fundo em movimento
✅ Informações de contato clicáveis
✅ Padrão geométrico rotativo
```

#### **2. Objetivo Profissional**
```javascript
// Design:
✅ Card com gradiente sutil
✅ Borda lateral colorida
✅ Animação de entrada suave
```

#### **3. Formação e Cursos**
```javascript
// Layout:
✅ Cards com ícones temáticos
✅ Efeitos de hover 3D
✅ Badges para tecnologias
✅ Animações escalonadas
```

#### **4. Habilidades Técnicas**
```javascript
// Visualização:
✅ Barras de progresso animadas
✅ Ícones da Font Awesome
✅ Grid responsivo
✅ Separação técnicas/pessoais
```

#### **5. Projetos**
```javascript
// Apresentação:
✅ Cards informativos
✅ Links externos
✅ Tecnologias utilizadas
✅ Descrições detalhadas
```

### 🎪 **Efeitos Visuais**

#### **Partículas Flutuantes**
```css
/* Geração dinâmica de 50 partículas */
.particle {
  animation: float 6s infinite ease-in-out;
  opacity: 0.3;
  border-radius: 50%;
}
```

#### **Scroll Indicator**
```javascript
// Barra de progresso dinâmica
const scrollPercent = (scrollTop / docHeight) * 100;
indicator.style.width = scrollPercent + '%';
```

#### **Gradiente Animado**
```css
/* Background em movimento contínuo */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 📱 Responsividade

### 📊 **Breakpoints**

| Dispositivo | Largura | Ajustes |
|-------------|---------|---------|
| **Mobile** | < 768px | Layout em coluna única, padding reduzido |
| **Tablet** | 768px - 1024px | Grid adaptativo, espaçamento médio |
| **Desktop** | > 1024px | Layout completo, todos os efeitos |

### 🎯 **Otimizações Mobile**

```css
@media (max-width: 768px) {
  /* Ajustes automáticos: */
  ✅ Fonte redimensionada
  ✅ Padding otimizado
  ✅ Grid em coluna única
  ✅ Formulário adaptado
  ✅ Botões redimensionados
}
```

---

## 📧 Sistema de Contato

### 📝 **Formulário Completo**

**Campos disponíveis:**
- Nome completo
- Email
- Telefone
- Empresa
- Cargo
- Tipo de interesse
- Nível de urgência
- Mensagem detalhada

### 🔧 **Funcionamento Atual**

```javascript
// Método mailto integrado
const mailtoLink = `mailto:miury4529@gmail.com?subject=${subject}&body=${body}`;
window.location.href = mailtoLink;
```

**Vantagens:**
- ✅ Não requer servidor
- ✅ Funciona offline
- ✅ Dados organizados automaticamente

**Limitações:**
- ⚠️ Requer cliente de email configurado
- ⚠️ Pode ser bloqueado por alguns navegadores

### 🚀 **Melhorias Sugeridas**

Para implementação futura:
1. **EmailJS** - Envio direto via JavaScript
2. **Formspree** - Processamento de formulários
3. **Netlify Forms** - Para deploy na Netlify
4. **WhatsApp API** - Contato direto

---

## 🚀 Deploy

### 🌐 **Opções de Hospedagem**

#### **1. Netlify (Recomendado)**
```bash
# Build e deploy automático
npm run build
# Arraste a pasta build para netlify.com
```

#### **2. Vercel**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### **3. GitHub Pages**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar ao package.json
"homepage": "https://seu-usuario.github.io/portfolio-matheus-iury",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

### ⚙️ **Configurações de Deploy**

**Build settings:**
- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** 18.x

---

## 🤝 Contribuindo

### 🛠️ **Como Contribuir**

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch para sua feature
4. **Commit** suas mudanças
5. **Push** para a branch
6. **Abra** um Pull Request

### 📋 **Padrões de Código**

```javascript
// Nomenclatura
✅ camelCase para variáveis e funções
✅ PascalCase para componentes
✅ kebab-case para classes CSS

// Estrutura
✅ Componentes funcionais
✅ Hooks para estado
✅ CSS-in-JS quando necessário
```

### 🐛 **Reportando Bugs**

Ao reportar bugs, inclua:
- **Descrição** detalhada
- **Passos** para reproduzir
- **Screenshots** se relevante
- **Ambiente** (browser, OS, etc.)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2024 Matheus Iury Bezerra Abreu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contato

### 👨‍💻 **Matheus Iury Bezerra Abreu**

- 📧 **Email:** [miury4529@gmail.com](mailto:miury4529@gmail.com)
- 📱 **Telefone:** [(85) 99715-7286](tel:+5585997157286)
- 📍 **Localização:** Fortaleza, CE - Brasil
- 💼 **LinkedIn:** [Conecte-se comigo](#)
- 🐙 **GitHub:** [Veja meus projetos](#)

### 💬 **Suporte e Dúvidas**

Tem alguma dúvida sobre o projeto? 

1. **Verifique** a documentação
2. **Procure** nas issues existentes
3. **Abra** uma nova issue
4. **Entre em contato** diretamente

---

## 📈 Status do Projeto

```
🟢 Ativo e mantido
🔄 Versão atual: 1.0.0
📅 Última atualização: Dezembro 2024
🎯 Próximas features: Sistema de email, mais projetos
```

---

## 🙏 Agradecimentos

Obrigado por visitar meu portfólio! Este projeto representa minha paixão por desenvolvimento web e meu comprometimento com código limpo e experiências de usuário excepcionais.

**Feedbacks e sugestões são sempre bem-vindos!** 🚀

---

<div align="center">

### ⭐ Se este projeto te ajudou, considere dar uma estrela!

**Desenvolvido com 💜 por [Matheus Iury](https://github.com/seu-usuario)**

</div>