(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var toggle = document.getElementById('theme-toggle');

  if (!toggle) return;

  function isDark() {
    return document.documentElement.classList.contains('dark-theme');
  }

  // O ícone (sol/lua) alterna via CSS em html.dark-theme — o JS só sincroniza o estado.
  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark-theme', dark);
    toggle.setAttribute('aria-pressed', String(dark));
  }

  toggle.addEventListener('click', function () {
    var next = !isDark();
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light'); } catch (e) { /* armazenamento indisponível */ }
  });

  applyTheme(isDark());
})();
