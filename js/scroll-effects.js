(function () {
  'use strict';

  // Efeitos de scroll "dirigidos pelo scroll", sem bibliotecas:
  //  1. Barra de progresso de scroll (fina, no topo).
  //  2. Parallax leve em elementos marcados com [data-parallax].
  // Ambos usam requestAnimationFrame e respeitam prefers-reduced-motion.

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) return;

  var bar = document.querySelector('.scroll-progress');
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function update() {
    var doc = document.documentElement;

    // 1) Progresso de scroll
    if (bar) {
      var max = doc.scrollHeight - window.innerHeight;
      var progress = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = 'scaleX(' + progress + ')';
    }

    // 2) Parallax leve — desloca o elemento em sentido oposto ao scroll,
    //    proporcional à distância até o centro da viewport.
    //    Ativado apenas em ponteiros finos (desktop) por questão de performance.
    if (parallaxEls.length && finePointer) {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.08;
        var rect = el.getBoundingClientRect();
        var offsetFromCenter = (rect.top + rect.height / 2) - vh / 2;
        el.style.transform = 'translate3d(0, ' + (offsetFromCenter * -speed).toFixed(2) + 'px, 0)';
      });
    }

    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
