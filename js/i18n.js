(function () {
  'use strict';

  var STORAGE_KEY = 'lang';
  var SUPPORTED = ['pt', 'en'];

  var translations = {
    pt: {
      meta: { title: 'Tayná - Software Developer' },
      theme: { toggle: 'Alternar tema' },
      lang: { toggle: 'Mudar idioma' },
      nav: {
        projects: 'Meus Projetos',
        skills: 'Habilidades',
        experience: 'Experiência',
        education: 'Educação',
        contact: 'Contato'
      },
      kicker: {
        projects: 'Seleção',
        skills: 'Ferramentas',
        experience: 'Trajetória',
        education: 'Formação',
        contact: 'Contato'
      },
      hero: {
        badge: 'Disponível para oportunidades',
        role: 'Desenvolvedora de Software',
        description: 'Desenvolvedora fullstack com experiência prática em Java, C# e React.js. Foco em arquitetura bem definida, código organizado e soluções escaláveis - do backend ao frontend, com responsabilidade técnica e visão estratégica.',
        statExp: 'Anos de exp.',
        statEdu: 'Eng. Software',
        statStack: 'Stack',
        techLabel: 'Stack —'
      },
      marquee: {
        softwareEng: 'Engenharia de Software',
        backend: 'Backend',
        frontend: 'Frontend',
        architecture: 'Arquitetura',
        fullstack: 'Fullstack Developer'
      },
      projects: {
        title: 'Meus Projetos',
        subtitle: 'Alguns trabalhos que desenvolvi recentemente',
        simulatorTitle: 'Simulador Hierarquia',
        simulatorDesc: 'Simulador de Hierarquia de Memória implementado em C/C++, representando cache, memória principal e armazenamento secundário para demonstrar impacto de latência e organização no desempenho do sistema.',
        fitnessTitle: 'Fitness App',
        fitnessDesc: 'Aplicativo mobile desenvolvido em Flutter com arquitetura organizada em camadas — models, screens, widgets e rotas — pensada para facilitar manutenção e evolução do app.',
        memoryTitle: 'Jogo da Memória',
        memoryDesc: 'Jogo da memória clássico construído com HTML, CSS e JavaScript puro, com embaralhamento de cartas e interface responsiva.',
        financeTitle: 'Sistema Financeiro',
        financeDesc: 'Sistema financeiro desenvolvido em Java como projeto de estudo, aplicando orientação a objetos na estruturação do domínio e persistência de dados.',
        viewRepo: 'Ver no GitHub'
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Tecnologias e ferramentas que utilizo no dia a dia',
        backend: 'Backend',
        frontend: 'Frontend',
        tools: 'Ferramentas & Banco de Dados'
      },
      experience: {
        title: 'Experiência Profissional',
        subtitle: 'Minha trajetória profissional',
        junior3: {
          date: 'Mar 2026 - Presente',
          role: 'Programadora Júnior III',
          desc: 'Responsável por entregas ponta a ponta em sistemas corporativos: desenvolvimento de novas funcionalidades, integrações com APIs e refinamento contínuo de aplicações web. Autonomia crescente em decisões técnicas, revisão de código e apoio na evolução da arquitetura.'
        },
        junior2: {
          date: 'Nov 2024 - Fev 2026',
          role: 'Programadora Júnior II',
          desc: 'Desenvolvimento e manutenção de aplicações web, implementação de novas funcionalidades, integrações com APIs e melhorias evolutivas em sistemas corporativos. Atuação com foco em qualidade de código, versionamento e colaboração em equipe.'
        },
        junior1: {
          date: 'Jun 2024 - Out 2024',
          role: 'Programadora Júnior I',
          desc: 'Desenvolvimento de funcionalidades backend utilizando C# e .NET, participação em integrações com APIs externas e manutenção de sistemas internos. Colaboração em ambiente ágil.'
        },
        trainee: {
          date: 'Mar 2024 - Mai 2024',
          role: 'Programadora Trainee',
          desc: 'Início da atuação profissional na área de desenvolvimento de software, apoiando na implementação de funcionalidades, correções de bugs e aprendizado de boas práticas de desenvolvimento.'
        }
      },
      education: {
        title: 'Educação',
        subtitle: 'Formação acadêmica e certificações',
        bachelors: {
          kicker: '// Bacharelado',
          status: 'Em andamento',
          degree: 'Bacharelado em Engenharia de Software',
          date: 'Fev 2024 - Dez 2027 (Em andamento)',
          desc: 'Formação focada em engenharia de requisitos, arquitetura de software, banco de dados, desenvolvimento web e metodologias ágeis.'
        },
        technical: {
          kicker: '// Técnico',
          status: 'Concluído',
          degree: 'Técnico em Informática',
          date: 'Fev 2020 - Dez 2023',
          desc: 'Formação técnica com base sólida em lógica de programação, desenvolvimento em Java, HTML, CSS e fundamentos de sistemas computacionais.'
        },
        certification: {
          kicker: '// Certificação',
          status: 'Ativa',
          degree: 'Scrum Foundation Professional Certification (SFPC)',
          date: 'Emitido em Nov 2024 · Expira em Nov 2027',
          desc: 'Certificação internacional em fundamentos do framework Scrum, abordando papéis, eventos, artefatos e práticas ágeis para gestão de projetos.'
        }
      },
      contact: {
        title: 'Vamos conversar?',
        subtitle: 'Entre em contato para projetos, colaborações ou apenas para um café virtual',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        whatsapp: 'WhatsApp'
      },
      form: {
        name: 'Seu nome',
        email: 'Seu email',
        message: 'Sua mensagem',
        submit: 'Enviar mensagem',
        sending: 'Enviando...',
        subjectPrefix: '[Portfólio] Novo contato',
        success: 'Mensagem enviada com sucesso!',
        fallback: 'Não foi possível enviar automaticamente. Seu cliente de e-mail abriu com a mensagem pronta.',
        error: 'Por favor, preencha todos os campos.'
      },
      footer: { text: '© 2026 Tayná Vicente Silva. Todos os direitos reservados.', deployPrefix: 'Último deploy:' }
    },

    en: {
      meta: { title: 'Tayná - Software Developer' },
      theme: { toggle: 'Toggle theme' },
      lang: { toggle: 'Switch language' },
      nav: {
        projects: 'Projects',
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        contact: 'Contact'
      },
      kicker: {
        projects: 'Selected Work',
        skills: 'Toolkit',
        experience: 'Career',
        education: 'Studies',
        contact: 'Contact'
      },
      hero: {
        badge: 'Available for opportunities',
        role: 'Software Developer',
        description: 'Full-stack developer with hands-on experience in Java, C# and React.js. Focused on well-defined architecture, organized code and scalable solutions — from backend to frontend, with technical responsibility and strategic vision.',
        statExp: 'Years of exp.',
        statEdu: 'Software Eng.',
        statStack: 'Stack',
        techLabel: 'Stack —'
      },
      marquee: {
        softwareEng: 'Software Engineering',
        backend: 'Backend',
        frontend: 'Frontend',
        architecture: 'Architecture',
        fullstack: 'Fullstack Developer'
      },
      projects: {
        title: 'My Projects',
        subtitle: 'Some projects I have recently developed',
        simulatorTitle: 'Memory Hierarchy Simulator',
        simulatorDesc: 'Memory hierarchy simulator implemented in C/C++, representing cache, main memory and secondary storage to demonstrate the impact of latency and organization on system performance.',
        fitnessTitle: 'Fitness App',
        fitnessDesc: 'Mobile app developed in Flutter with a layered architecture — models, screens, widgets and routes — designed for easy maintenance and evolution.',
        memoryTitle: 'Memory Game',
        memoryDesc: 'Classic memory game built with plain HTML, CSS and JavaScript, with shuffled cards and a responsive interface.',
        financeTitle: 'Financial System',
        financeDesc: 'Financial system developed in Java as a study project, applying object-oriented programming to domain structure and data persistence.',
        viewRepo: 'View on GitHub'
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technologies and tools I use daily',
        backend: 'Backend',
        frontend: 'Frontend',
        tools: 'Tools & Databases'
      },
      experience: {
        title: 'Professional Experience',
        subtitle: 'My professional journey',
        junior3: {
          date: 'Mar 2026 - Present',
          role: 'Junior Developer III',
          desc: 'Responsible for end-to-end deliveries in enterprise systems: development of new features, API integrations and continuous refinement of web applications. Growing autonomy in technical decisions, code review and support in architecture evolution.'
        },
        junior2: {
          date: 'Nov 2024 - Feb 2026',
          role: 'Junior Developer II',
          desc: 'Development and maintenance of web applications, implementation of new features, API integrations and evolutionary improvements in enterprise systems. Focused on code quality, versioning and team collaboration.'
        },
        junior1: {
          date: 'Jun 2024 - Oct 2024',
          role: 'Junior Developer I',
          desc: 'Backend feature development using C# and .NET, participation in external API integrations and maintenance of internal systems. Collaboration in an agile environment.'
        },
        trainee: {
          date: 'Mar 2024 - May 2024',
          role: 'Developer Trainee',
          desc: 'Start of my professional career in software development, supporting feature implementation, bug fixes and learning good development practices.'
        }
      },
      education: {
        title: 'Education',
        subtitle: 'Academic background and certifications',
        bachelors: {
          kicker: '// Bachelor',
          status: 'In progress',
          degree: "Bachelor's Degree in Software Engineering",
          date: 'Feb 2024 - Dec 2027 (In progress)',
          desc: 'Education focused on requirements engineering, software architecture, databases, web development and agile methodologies.'
        },
        technical: {
          kicker: '// Technical',
          status: 'Completed',
          degree: 'Computer Science Technician',
          date: 'Feb 2020 - Dec 2023',
          desc: 'Technical education with a solid foundation in programming logic, Java development, HTML, CSS and fundamentals of computer systems.'
        },
        certification: {
          kicker: '// Certification',
          status: 'Active',
          degree: 'Scrum Foundation Professional Certification (SFPC)',
          date: 'Issued Nov 2024 · Expires Nov 2027',
          desc: 'International certification in Scrum framework fundamentals, covering roles, events, artifacts and agile practices for project management.'
        }
      },
      contact: {
        title: "Let's talk?",
        subtitle: 'Get in touch for projects, collaborations or just a virtual coffee',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        whatsapp: 'WhatsApp'
      },
      form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        submit: 'Send message',
        sending: 'Sending...',
        subjectPrefix: '[Portfolio] New contact',
        success: 'Message sent successfully!',
        fallback: "Couldn't send automatically. Your email client opened with the message ready to send.",
        error: 'Please fill in all fields.'
      },
      footer: { text: '© 2026 Tayná Vicente Silva. All rights reserved.', deployPrefix: 'Last deploy:' }
    }
  };

  var langToggle = document.getElementById('lang-toggle');
  var flagImg = document.getElementById('lang-flag');

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function setStoredLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* armazenamento indisponível */ }
  }

  function resolveLang() {
    var stored = getStoredLang();
    return SUPPORTED.indexOf(stored) !== -1 ? stored : 'pt';
  }

  var currentLang = resolveLang();

  function t(key, lang) {
    return key.split('.').reduce(function (acc, part) {
      return acc && acc[part] !== undefined ? acc[part] : undefined;
    }, translations[lang]);
  }

  function applyI18n(attribute, apply) {
    document.querySelectorAll('[' + attribute + ']').forEach(function (el) {
      var value = t(el.getAttribute(attribute), currentLang);
      if (value !== undefined) apply(el, value);
    });
  }

  function translate() {
    currentLang = resolveLang();
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    applyI18n('data-i18n', function (el, value) { el.textContent = value; });
    applyI18n('data-i18n-placeholder', function (el, value) { el.placeholder = value; });
    applyI18n('data-i18n-aria', function (el, value) { el.setAttribute('aria-label', value); });

    if (flagImg) {
      var isPt = currentLang === 'pt';
      flagImg.src = isPt ? 'assets/flags/br.png' : 'assets/flags/us.png';
      flagImg.alt = isPt ? 'Português' : 'English';
    }

    var title = t('meta.title', currentLang);
    if (title) document.title = title;
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      currentLang = currentLang === 'pt' ? 'en' : 'pt';
      setStoredLang(currentLang);
      translate();
    });
  }

  window.I18n = {
    getLang: function () { return currentLang; },
    t: function (key) { return t(key, currentLang); },
    translate: translate
  };

  translate();
})();
