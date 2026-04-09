class App {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.themeToggle = document.getElementById('theme-toggle');
    this.body = document.body;

    this.init();
  }

  init() {
    this.handleNavbarScroll();
    this.initObserver();
    this.initTheme();
  }

  // Navbar scroll
  handleNavbarScroll() {
    window.addEventListener('scroll', () => {
      this.navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Fade-up animation
  initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up')
      .forEach(el => observer.observe(el));
  }

  // Tema (dark/light)
  initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      this.body.classList.add('light-mode');
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.body.classList.add('light-mode');
    }

    this.themeToggle.addEventListener('click', () => {
      this.body.classList.toggle('light-mode');

      if (this.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // Submit do formulário
  static handleSubmit() {
    const btn = document.querySelector('.contact-submit');

    btn.textContent = 'Mensagem enviada ✓';
    btn.style.background = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    btn.style.boxShadow = '0 0 24px rgba(74,222,128,0.3)';

    setTimeout(() => {
      btn.textContent = 'Enviar mensagem →';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.boxShadow = '';
    }, 3000);
  }
}

// Inicializa quando carregar a página
document.addEventListener('DOMContentLoaded', () => {
  new App();
});