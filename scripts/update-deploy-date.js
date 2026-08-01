// Atualiza a data do último deploy no rodapé (index.html) para a data de hoje.
// Uso: antes de commitar/pushar o deploy, rode:
//   node scripts/update-deploy-date.js
// Como o GitHub Pages faz deploy no push, a data do commit é a data do deploy.
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

const updated = html.replace(
  /(<span class="footer-deploy-date">)\d{2}\/\d{2}\/\d{4}(<\/span>)/,
  '$1' + date + '$2'
);

if (updated === html) {
  console.error('Data de deploy nao encontrada em index.html.');
  process.exit(1);
}

fs.writeFileSync(indexPath, updated);
console.log('Data de deploy atualizada para ' + date);
