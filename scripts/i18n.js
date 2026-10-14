// Tradução client-side EN/PT sem dependências externas
const I18N = {
  pt: {
    "nav.about": "Sobre",
    "nav.skills": "Competências",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    "hero.prefix": "trabalho com",
    "hero.words": "Python|FastAPI|suporte N1/N2|Linux & Docker|SQL e dados",
    "hero.lead":
      "Trabalho com Python no dia a dia para automatizar tarefas e tratar dados, atuo no suporte técnico resolvendo chamados de N1 e parte de N2, e venho construindo base em DevOps e análise de dados. Estudante de Engenharia de Software.",
    "hero.cv": "Baixar currículo",
    "hero.photoAlt": "Foto de Hallan Rauber Sbardelatti",

    "about.title": "Sobre",
    "about.p1":
      "Meu ponto mais forte hoje é Python: escrevo scripts de automação, integrações com APIs e rotinas de tratamento de dados. Na operação, atendo usuários em primeiro nível, faço diagnóstico e triagem de incidentes e já resolvo parte dos casos de segundo nível.",
    "about.p2":
      "Paralelamente, estou consolidando a base em DevOps (Linux, Docker, Git e pipelines de CI/CD) e em análise de dados (SQL, pandas e visualização), com o objetivo de unir suporte, automação e infraestrutura.",

    "skills.title": "Competências",
    "level.mid": "Intermediário",
    "level.support": "N1 · base em N2",
    "level.base": "Base",
    "skills.py":
      "Scripts de automação, criação de APIs REST com FastAPI, consumo de APIs externas e tratamento de dados.",
    "skills.supportTitle": "Suporte Técnico",
    "skills.support":
      "Atendimento ao usuário, abertura e gestão de chamados, diagnóstico de incidentes, análise de logs e escalonamento com contexto.",
    "skills.devops":
      "Linha de comando Linux, versionamento, containers e noções de integração e entrega contínua.",
    "skills.dataTitle": "Análise de Dados",
    "skills.data":
      "Consultas SQL, limpeza e agregação de dados e construção de relatórios simples.",
    "skills.otherTitle": "Outras tecnologias",

    "projects.title": "Projetos",
    "projects.p1.alt": "Página inicial do site Ferber Automação",
    "projects.p1.text": "Site institucional desenvolvido do zero, com layout responsivo.",
    "projects.visit": "Ver site ↗",
    "projects.p2.text":
      "API REST de pedidos com cadastro de usuários e senhas criptografadas com bcrypt, rotas separadas por módulo, sessão de banco injetada via dependências e migrações versionadas com Alembic.",
    "projects.p3.text":
      "App multiplataforma de treinos: login e cadastro, catálogo de exercícios por grupo muscular, registro de sessões, resumo com gráficos de evolução e tema claro/escuro.",
    "projects.github": "Ver no GitHub ↗",
    "projects.more": "Mais projetos no GitHub ↗",

    "edu.title": "Formação",
    "edu.course": "Engenharia de Software",
    "edu.status": "Em andamento · 6º de 8 semestres",

    "contact.title": "Contato",
    "contact.phone": "Telefone",
    "contact.name": "Nome",
    "contact.message": "Mensagem",
    "contact.send": "Enviar mensagem",

    "form.required": "Preencha todos os campos.",
    "form.invalidEmail": "E-mail inválido.",
    "form.sent": "Mensagem enviada. Obrigado!",
    "form.error": "Não foi possível enviar. Tente novamente ou use o e-mail acima.",
    "form.sending": "Enviando…",

    "footer.top": "Voltar ao topo ↑",
  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.prefix": "i work with",
    "hero.words": "Python|FastAPI|L1/L2 support|Linux & Docker|SQL & data",
    "hero.lead":
      "I use Python daily to automate tasks and process data, work in technical support handling L1 and some L2 tickets, and I'm building a foundation in DevOps and data analysis. Software Engineering student.",
    "hero.cv": "Download résumé",
    "hero.photoAlt": "Photo of Hallan Rauber Sbardelatti",

    "about.title": "About",
    "about.p1":
      "Python is my strongest skill: I write automation scripts, API integrations and data processing routines. On the operations side, I provide first-level user support, diagnose and triage incidents, and already resolve part of the second-level cases.",
    "about.p2":
      "In parallel, I'm strengthening my foundation in DevOps (Linux, Docker, Git and CI/CD pipelines) and data analysis (SQL, pandas and visualization), aiming to bring together support, automation and infrastructure.",

    "skills.title": "Skills",
    "level.mid": "Intermediate",
    "level.support": "L1 · basic L2",
    "level.base": "Foundation",
    "skills.py":
      "Automation scripts, building REST APIs with FastAPI, consuming external APIs and data processing.",
    "skills.supportTitle": "IT Support",
    "skills.support":
      "User support, ticket creation and management, incident diagnosis, log analysis and escalation with context.",
    "skills.devops":
      "Linux command line, version control, containers and basics of continuous integration and delivery.",
    "skills.dataTitle": "Data Analysis",
    "skills.data":
      "SQL queries, data cleaning and aggregation, and building simple reports.",
    "skills.otherTitle": "Other technologies",

    "projects.title": "Projects",
    "projects.p1.alt": "Homepage of the Ferber Automação website",
    "projects.p1.text": "Institutional website built from scratch with a responsive layout.",
    "projects.visit": "View site ↗",
    "projects.p2.text":
      "Orders REST API with user sign-up and bcrypt-hashed passwords, modular routers, database session injected through dependencies and versioned migrations with Alembic.",
    "projects.p3.text":
      "Cross-platform workout app: login and sign-up, exercise catalog by muscle group, session logging, progress summary with charts and light/dark theme.",
    "projects.github": "View on GitHub ↗",
    "projects.more": "More projects on GitHub ↗",

    "edu.title": "Education",
    "edu.course": "Software Engineering",
    "edu.status": "In progress · semester 6 of 8",

    "contact.title": "Contact",
    "contact.phone": "Phone",
    "contact.name": "Name",
    "contact.message": "Message",
    "contact.send": "Send message",

    "form.required": "Please fill in all fields.",
    "form.invalidEmail": "Invalid email.",
    "form.sent": "Message sent. Thank you!",
    "form.error": "Couldn't send. Please try again or use the email above.",
    "form.sending": "Sending…",

    "footer.top": "Back to top ↑",
  },
};

let currentLang = "pt";

function t(key) {
  return (I18N[currentLang] || I18N.pt)[key] ?? key;
}

function applyI18n(lang) {
  currentLang = lang === "en" ? "en" : "pt";
  const dict = I18N[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-attr-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  document.documentElement.setAttribute("lang", currentLang === "en" ? "en" : "pt-BR");

  const btn = document.getElementById("translate-toggle");
  if (btn) {
    btn.textContent = currentLang === "en" ? "PT" : "EN";
    btn.setAttribute("aria-label", currentLang === "en" ? "Mudar para português" : "Translate to English");
  }
}

(function initI18n() {
  let saved = "pt";
  try { saved = localStorage.getItem("lang") || "pt"; } catch {}
  applyI18n(saved);

  document.getElementById("translate-toggle")?.addEventListener("click", () => {
    const next = currentLang === "en" ? "pt" : "en";
    try { localStorage.setItem("lang", next); } catch {}
    applyI18n(next);
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
