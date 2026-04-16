document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    pt: {
      "nav.projects": "Meus Projetos",
      "nav.skills": "Habilidades",
      "nav.experience": "Experiência",
      "nav.education": "Educação",
      "nav.contact": "Contato",

      "hero.role": "Desenvolvedora de Software",
      "hero.description":
        "Desenvolvedora Full Stack com experiência em C#, .NET, Node.js e React.",

      "projects.title": "Meus Projetos",
      "projects.subtitle": "Alguns trabalhos que desenvolvi recentemente",

      "project.memory.title": "Simulador Hierarquia de Memoria",
      "project.memory.desc":
        "Simulador de Hierarquia de Memória implementado em C/C++.",

      "project.game.title": "Jogo da Memória",
      "project.game.desc":
        "Jogo interativo para exercitar memória e lógica.",

      "skills.title": "Habilidades",
      "skills.subtitle":
        "Tecnologias e ferramentas que utilizo no dia a dia",

      "experience.title": "Experiência Profissional",
      "experience.subtitle": "Minha trajetória profissional",

      "education.title": "Educação",
      "education.subtitle":
        "Formação acadêmica e certificações",

      "contact.title": "Vamos conversar?",
      "contact.subtitle":
        "Entre em contato para projetos ou colaborações",

      "form.submit": "Enviar mensagem",

      "footer.text":
        "© 2026 Tayná Vicente Silva. Todos os direitos reservados.",
    },

    en: {
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact",

      "hero.role": "Software Developer",
      "hero.description":
        "Full Stack Developer with experience in C#, .NET, Node.js and React.",

      "projects.title": "My Projects",
      "projects.subtitle":
        "Some projects I have recently developed",

      "project.memory.title": "Memory Hierarchy Simulator",
      "project.memory.desc":
        "Simulator implemented in C/C++.",

      "project.game.title": "Memory Game",
      "project.game.desc":
        "Interactive game to train memory and logic.",

      "skills.title": "Skills",
      "skills.subtitle":
        "Technologies and tools I use daily",

      "experience.title": "Professional Experience",
      "experience.subtitle":
        "My professional journey",

      "education.title": "Education",
      "education.subtitle":
        "Academic background and certifications",

      "contact.title": "Let's talk?",
      "contact.subtitle":
        "Get in touch for projects or collaborations",

      "form.name": "Your name",
      "form.email": "Your email",
      "form.message": "Your message",
      "form.submit": "Send message",

      "footer.text":
        "© 2026 Tayná Vicente Silva. All rights reserved.",
    },
  };

  let currentLang = localStorage.getItem("lang") || "pt";

  const langToggle = document.getElementById("lang-toggle");

  function updateFlag() {
    const flagImg = document.getElementById("lang-flag");
    if (!flagImg) return;

    flagImg.src =
      currentLang === "pt"
        ? "assets/flags/br.png"
        : "assets/flags/us.png";
  }

  function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[currentLang][key]) {
        el.placeholder = translations[currentLang][key];
      }
    });

    document.documentElement.lang = currentLang;

    updateFlag();
  }

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", currentLang);
    translatePage();
  });

  translatePage();
});