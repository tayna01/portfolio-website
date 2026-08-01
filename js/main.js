(function () {
  'use strict';

  var CONTACT_EMAIL = 'taynavicente2019@gmail.com';

  var hamburger = document.getElementById('hamburger');
  var navList = document.getElementById('nav-list');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-list a'));

  function setMenu(open) {
    navList.classList.toggle('open', open);
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  }

  if (hamburger && navList) {
    hamburger.addEventListener('click', function () {
      setMenu(!navList.classList.contains('open'));
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('click', function (event) {
      if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
        setMenu(false);
      }
    });
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));

  function updateActiveLink() {
    if (!sections.length) return;

    var scrollPos = window.scrollY + 100;
    var currentId = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) currentId = section.id;
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + currentId;
      link.classList.toggle('is-active', isActive);
    });
  }

  if (sections.length) {
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  }

  var form = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');

  var EMAIL_API_ENDPOINT = 'https://api.web3forms.com/submit';

  function showFormStatus(message, isError) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.toggle('is-error', Boolean(isError));
    formStatus.classList.add('is-visible');
  }

  function translateMessage(key, fallback) {
    return window.I18n && window.I18n.t ? window.I18n.t(key) || fallback : fallback;
  }

  function openMailtoClient(name, email, message) {
    var subject = encodeURIComponent('[Portfólio] Contato de ' + name);
    var body = encodeURIComponent(name + ' (' + email + ')\n\n' + message);
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
  }

  function submitToEmailApi(payload) {
    return fetch(EMAIL_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (response) { return response.json(); });
  }

  if (form) {
    var submitBtn = form.querySelector('.btn-submit');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var name = String(data.get('name') || '').trim();
      var email = String(data.get('email') || '').trim();
      var message = String(data.get('message') || '').trim();

      if (!name || !email || !message) {
        showFormStatus(translateMessage('form.error', 'Por favor, preencha todos os campos.'), true);
        return;
      }

      if (data.get('botcheck')) return;

      submitBtn.disabled = true;
      showFormStatus(translateMessage('form.sending', 'Enviando...'));

      submitToEmailApi({
        access_key: form.getAttribute('data-access-key') || '',
        subject: translateMessage('form.subjectPrefix', '[Portfólio] Novo contato') + ': ' + name,
        name: name,
        email: email,
        message: message
      }).then(function (result) {
        if (!result.success) throw new Error(result.message || 'API error');
        showFormStatus(translateMessage('form.success', 'Mensagem enviada com sucesso!'));
        form.reset();
      }).catch(function () {
        openMailtoClient(name, email, message);
        showFormStatus(translateMessage('form.fallback', 'Não foi possível enviar automaticamente. Seu cliente de e-mail abriu com a mensagem pronta.'));
        form.reset();
      }).then(function () {
        submitBtn.disabled = false;
      });
    });
  }
})();
