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
    this.initHamburger();
  }

  handleNavbarScroll() {
    window.addEventListener('scroll', () => {
      this.navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

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
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.body.classList.add('light-mode');
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.body.classList.add('light-mode');
    }
    this.themeToggle.addEventListener('click', () => {
      this.body.classList.toggle('light-mode');
      localStorage.setItem('theme', this.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
  }

  initHamburger() {
    const hamburger = document.getElementById('navbar-hamburger');
    const navLinks = document.querySelector('.navbar-links');
    if (!hamburger || !navLinks) return;
    hamburger.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
    navLinks.querySelectorAll('a').forEach(l => {
      l.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

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

document.addEventListener('DOMContentLoaded', () => {
  new App();
});