export const personalInfo = {
  name: "MATHEUS IURY BEZERRA ABREU",
  title: "Desenvolvedor Web Front-End Júnior",
  email: "miury4529@gmail.com",
  phone: "(85) 99715-7286",
  address: "Rua Paranapanema, 541 – Pici, Fortaleza – CE"
};

export const skills = {
  technical: [
    { name: 'HTML5', icon: 'fab fa-html5', level: 85 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: 80 },
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 75 },
    { name: 'React', icon: 'fab fa-react', level: 70 },
    { name: 'Git & GitHub', icon: 'fab fa-git-alt', level: 75 },
    { name: 'VS Code', icon: 'fas fa-code', level: 90 },
    { name: 'Figma', icon: 'fab fa-figma', level: 65 },
    { name: 'Office', icon: 'fab fa-microsoft', level: 80 }
  ],
  personal: [
    'Comunicativo e proativo',
    'Organizado e responsável', 
    'Facilidade de adaptação',
    'Espírito de equipe',
    'Vontade de aprender',
    'Gestão de tempo',
    'Pensamento analítico',
    'Resolução de problemas'
  ]
};

export const educationData = [
  {
    id: 1,
    title: "Ensino Médio Completo",
    institution: "Colégio Estadual",
    period: "2018 - 2020",
    description: "Formação básica com foco em exatas",
    icon: "fas fa-graduation-cap"
  }
];

export const coursesData = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    institution: "Curso Online",
    period: "2023 - 2024",
    description: "HTML, CSS, JavaScript e React",
    icon: "fas fa-code",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Pessoal",
    description: "Site responsivo desenvolvido com React",
    technologies: ["React", "CSS3", "JavaScript"],
    icon: "fas fa-laptop-code"
  },
  {
    id: 2,
    title: "Landing Page",
    description: "Página de apresentação para empresa",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    icon: "fas fa-paint-brush"
  }
];

export const objectiveText = `
Sou um desenvolvedor front-end júnior apaixonado por criar experiências digitais 
incríveis e funcionais. Busco uma oportunidade para aplicar meus conhecimentos 
em HTML, CSS, JavaScript e React, contribuindo para projetos desafiadores 
enquanto continuo aprendendo e crescendo profissionalmente.
`;

export const formFields = {
  nome: { label: "Nome Completo", type: "text", required: true },
  email: { label: "E-mail", type: "email", required: true },
  empresa: { label: "Empresa", type: "text", required: false },
  cargo: { label: "Cargo", type: "text", required: false },
  telefone: { label: "Telefone", type: "tel", required: false },
  interesse: { 
    label: "Tipo de Interesse", 
    type: "select", 
    required: true,
    options: [
      { value: "", label: "Selecione..." },
      { value: "trabalho", label: "Oportunidade de Trabalho" },
      { value: "freelance", label: "Projeto Freelance" },
      { value: "parceria", label: "Parceria" },
      { value: "consultoria", label: "Consultoria" },
      { value: "outros", label: "Outros" }
    ]
  },
  urgencia: {
    label: "Nível de Urgência",
    type: "select",
    required: true,
    options: [
      { value: "baixa", label: "Baixa" },
      { value: "normal", label: "Normal" },
      { value: "alta", label: "Alta" },
      { value: "urgente", label: "Urgente" }
    ]
  },
  mensagem: { label: "Mensagem", type: "textarea", required: true }
};