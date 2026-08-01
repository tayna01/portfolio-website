(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var toggle = document.getElementById('theme-toggle');

  if (!toggle) return;

  var icon = toggle.querySelector('[data-theme-icon]');

  function isDark() {
    return document.documentElement.classList.contains('dark-theme');
  }

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark-theme', dark);
    if (icon) icon.textContent = dark ? '🌙' : '☀️';
    toggle.setAttribute('aria-pressed', String(dark));
  }

  toggle.addEventListener('click', function () {
    var next = !isDark();
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light'); } catch (e) { /* armazenamento indisponível */ }
  });

  applyTheme(isDark());
})();
