# Portfolio — Tayná Vicente

Olá, pessoal! Sejam bem-vindos ao meu portfólio! 😊

## Estrutura

```
.
├── assets/          # Imagens (foto de perfil, bandeiras)
├── css/             # Estilos separados por responsabilidade
│   ├── variables.css   # Tokens de design (cores, fontes, movimento) — tema claro/escuro
│   ├── base.css        # Reset, tipografia e fundo global
│   ├── animations.css  # Keyframes, scroll reveal e prefers-reduced-motion
│   ├── utilities.css   # Classes utilitárias (container, sr-only, blobs)
│   ├── nav.css         # Navegação fixa e botões
│   ├── hero.css        # Seção hero
│   └── sections.css    # Projetos, habilidades, experiência, educação, contato
├── favicon/          # Favicons e web manifest
├── js/
│   ├── theme.js       # Alternância de tema (dark/light)
│   ├── i18n.js        # Internacionalização PT/EN
│   ├── main.js        # Interações: menu, scrollspy e formulário
│   ├── reveal.js      # Scroll reveal via Intersection Observer
│   └── scroll-effects.js # Progresso de scroll + parallax leve (rAF)
├── scripts/
│   └── update-deploy-date.js # Atualiza a data de deploy no rodapé
├── CNAME             # Domínio personalizado (GitHub Pages)
└── index.html
```

## Funcionalidades

- **Tema claro/escuro** com persistência em `localStorage` e respeito a `prefers-color-scheme` (ícones sol/lua em SVG).
- **Scroll reveal** minimalista (fade-in + slide-up) via Intersection Observer, sem bibliotecas e com fallback para `prefers-reduced-motion`.
- **Scroll-driven**: barra de progresso de scroll e parallax leve no hero via `requestAnimationFrame` (nativo, ~1KB, desativado com `prefers-reduced-motion`).
- **Tipografia com presença**: títulos grandes (Space Grotesk, até ~120px no hero), kickers editoriais "//" e bastante respiro entre seções.
- **Microinterações** sutis em hover/press de botões, links, cards e chips (transform + opacity).
- **Internacionalização PT/EN** com persistência da preferência.
- **Menu responsivo** com hamburger em telas menores.
- **Scrollspy** destacando a seção ativa no menu.
- **Formulário de contato** que envia via Web3Forms (com `mailto:` como fallback).
- Suporte a **prefers-reduced-motion**.

## Analytics (Google Analytics 4)

O site usa GA4 para medir visitas e o comportamento dos visitantes. O snippet está no `<head>` do `index.html` usando o Google Tag da propriedade `G-PPT29TBHVV` (propriedade "Portfólio"; o fluxo web usa a métrica `G-8E56MWGV4Z`, URL `https://taynavicente.com.br`).

Para ativar:

1. Acesse [analytics.google.com](https://analytics.google.com) e crie uma propriedade (nome: ex. "Portfólio") — não precisa de site, o GA4 é configurado por **Data Stream**.
2. Em **Admin → Data Streams → Web**, registre seu domínio (ex. `taynavicente.com.br`) e confirme que a **Measurement ID** é `G-PPT29TBHVV` (ID do Google Tag da propriedade).

> A ID é pública por design — ela apenas identifica o fluxo de coleta do site.

## Envio de e-mail (Web3Forms)

O formulário de contato envia a mensagem pela API gratuita do [Web3Forms](https://web3forms.com) e, se o envio falhar, abre o cliente de e-mail (`mailto:`) como fallback.

Para ativar:

1. Acesse [web3forms.com](https://web3forms.com) e gere uma **access key** gratuita (basta confirmar seu e-mail).
2. Em `index.html`, substitua o valor do atributo `data-access-key` do formulário:

```html
<form ... data-access-key="6132198e-6d38-427c-b04a-52c8cece3d6e">
```

3. Configure em `js/main.js` a constante `CONTACT_EMAIL` (destinatário do fallback) se necessário.

> A access key é pública por design (o serviço é feito para uso client-side). Não inclua ali senhas ou credenciais SMTP.

## Como executar

Abra o `index.html` em um navegador ou sirva a pasta localmente:

```bash
# Exemplo com Python
python -m http.server 8000
```

## Deploy

O site é publicado via GitHub Pages no domínio `taynavicente.com.br` (definido no `CNAME`).

Antes de dar push (o GitHub Pages publica no push), atualize a data de deploy no rodapé:

```bash
node scripts/update-deploy-date.js
```

O script substitui a data em `index.html` (`<span class="footer-deploy-date">`) pela data de hoje.
