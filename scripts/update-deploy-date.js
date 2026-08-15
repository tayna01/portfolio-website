// Atualiza a data da última atualização no rodapé (index.html) para a data de hoje.
// Uso: antes de commitar/pushar o deploy, rode:
//   node scripts/update-deploy-date.js
// O GitHub Actions (workflows/update-footer-date.yml) executa isso automaticamente a cada push.
'use strict';

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const now = new Date();

const date =
  String(now.getDate()).padStart(2, '0') +
  '/' +
  String(now.getMonth() + 1).padStart(2, '0') +
  '/' +
  now.getFullYear();

let html;
try {
  html = fs.readFileSync(indexPath, 'utf8');
} catch (err) {
  console.error('Nao foi possivel ler index.html:', err.message);
  process.exit(1);
}

const pattern = /(<span class="footer-update-date">)\d{2}\/\d{2}\/\d{4}(<\/span>)/;

if (!pattern.test(html)) {
  console.error('Data de atualizacao nao encontrada em index.html.');
  process.exit(1);
}

const updated = html.replace(pattern, '$1' + date + '$2');

if (updated === html) {
  console.log('Data de atualizacao ja esta atualizada (' + date + '). Nada a fazer.');
  process.exit(0);
}

fs.writeFileSync(indexPath, updated);
console.log('Data de atualizacao atualizada para ' + date);