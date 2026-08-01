# Portfolio — Tayná Vicente

Portfólio pessoal de **Tayná Vicente Silva**, desenvolvedora fullstack.

## Estrutura

```
.
├── assets/          # Imagens (foto de perfil, bandeiras)
├── css/             # Estilos separados por responsabilidade
│   ├── variables.css   # Tokens de design (cores, fontes) — tema claro/escuro
│   ├── base.css        # Reset, tipografia e fundo global
│   ├── animations.css  # Keyframes e prefers-reduced-motion
│   ├── utilities.css   # Classes utilitárias (container, sr-only, blobs)
│   ├── nav.css         # Navegação fixa e botões
│   ├── hero.css        # Seção hero
│   └── sections.css    # Projetos, habilidades, experiência, educação, contato
├── favicon/          # Favicons e web manifest
├── js/
│   ├── theme.js       # Alternância de tema (dark/light)
│   ├── i18n.js        # Internacionalização PT/EN
│   └── main.js        # Interações: menu, scrollspy e formulário
├── CNAME             # Domínio personalizado (GitHub Pages)
└── index.html
```

## Funcionalidades

- **Tema claro/escuro** com persistência em `localStorage` e respeito a `prefers-color-scheme`.
- **Internacionalização PT/EN** com persistência da preferência.
- **Menu responsivo** com hamburger em telas menores.
- **Scrollspy** destacando a seção ativa no menu.
- **Formulário de contato** que abre o cliente de e-mail com a mensagem pronta.
- Suporte a **prefers-reduced-motion**.

## Como executar

Abra o `index.html` em um navegador ou sirva a pasta localmente:

```bash
# Exemplo com Python
python -m http.server 8000
```

## Deploy

O site é publicado via GitHub Pages no domínio `taynavicente.com.br` (definido no `CNAME`).
