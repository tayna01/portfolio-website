(function () {
  'use strict';

  // Scroll reveal leve: adiciona .is-visible quando o elemento entra na
  // viewport. Sem bibliotecas — apenas Intersection Observer nativo.
  // Fallbacks: sem suporte ao API ou com prefers-reduced-motion, tudo visível.

  var revealEls = document.querySelectorAll('[data-reveal]');

  if (!revealEls.length) return;

  function showAll() {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Fallback 1: navegador sem IntersectionObserver (mostra tudo).
  if (!('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  // Fallback 2: usuário prefere menos movimento (mostra tudo, sem animar).
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showAll();
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      var el = entry.target;
      // Stagger opcional definido no HTML via data-reveal-delay (ms).
      var delay = parseInt(el.getAttribute('data-reveal-delay'), 10);
      if (delay > 0) el.style.transitionDelay = delay + 'ms';

      el.classList.add('is-visible');
      observer.unobserve(el); // revela uma única vez
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px'
  });

  revealEls.forEach(function (el) { observer.observe(el); });
})();
