# Análise da Estrutura do Código

Análise do portfólio de **Tayná Vicente** — site estático (HTML/CSS/JS puro, sem build tools ou dependências), publicado via GitHub Pages.

## Visão Geral

```
portfolio-website/
├── index.html                  # Página única (454 linhas): todas as seções do site
├── assets/                     # Imagens locais (foto de perfil, flags, GIF do projeto)
│   ├── flags/br.png            # Bandeira (indicador de idioma)
│   ├── perfil.jpg / tayna_perfil.jpg
│   └── gif-projeto-controle-financeiro.gif
├── css/                        # 7 arquivos, divididos por responsabilidade
│   ├── variables.css (54)     # Design tokens: cores, fontes, movimento, temas
│   ├── base.css (44)          # Reset, tipografia e fundo global
│   ├── animations.css (70)    # Keyframes, reveal e prefers-reduced-motion
│   ├── utilities.css (89)     # container, sr-only, blobs
│   ├── nav.css (190)          # Navegação, botões, hamburger
│   ├── hero.css (368)         # Hero, stats, chips, marquee, parallax
│   └── sections.css (699)     # Projetos, skills, timeline, educação, contato, footer
├── js/
│   ├── theme.js (26)          # Alternância dark/light (localStorage + prefers-color-scheme)
│   ├── i18n.js (321)          # Traduções PT/EN + aplicação de data-i18n
│   ├── main.js (125)          # Menu, scrollspy, formulário Web3Forms
│   ├── reveal.js (46)         # Scroll reveal via IntersectionObserver
│   └── scroll-effects.js (54) # Barra de progresso + parallax (rAF)
├── scripts/
│   └── update-deploy-date.js  # Atualiza data do rodapé (última atualização)
├── .github/workflows/
│   └── update-footer-date.yml # Automatiza a data do rodapé a cada push
├── favicon/                   # Ícones + site.webmanifest
├── docs/
│   ├── CNAME                  # Registro DNS para GitHub Pages
│   └── ESTRUTURA.md           # Este arquivo
├── CNAME                      # Domínio taynavicente.com.br
├── README.md                   # Documentação de uso e deploy
├── gif-projeto-controle-financeiro.gif
└── Video Project 3.mp4
```

## Estrutura do `index.html` (454 linhas)

1. `<head>` — metas, fontes (Space Grotesk, Inter, DM Mono), CSS, favicons e script inline anti-FOUC de tema.
2. `<nav>` — brand, 5 âncoras, troca de tema, troca de idioma, hamburger.
3. `hero-section` — foto, badge, título, stats, tech chips e marquee.
4. `projetos` — grid de projetos (1 card, sistema financeiro).
5. `habilidades` — 3 cards de skills (backend, frontend, ferramentas).
6. `experiencia-profissional` — timeline com 5 cargos na NextAge.
7. `educacao` — 3 cards (bacharelado, técnico, certificação SFPC).
8. `contato` — info (e-mail, LinkedIn, GitHub, WhatsApp) + formulário Web3Forms.
9. `footer` — copyright e data da última atualização.

## Arquitetura JS

- **Cada arquivo é um IIFE** — escopo fechado, sem globais poluindo `window`.
- **Ordem de carregamento** em `index.html`: `theme.js` → `i18n.js` → `main.js` → `reveal.js` → `scroll-effects.js`.
- `theme.js` roda também o script inline no `<head>` (evita FOUC de tema).
- Integração entre módulos: `i18n.js` expõe API `{ getLang, t }` usada por `main.js`; `main.js` usa o idioma atual para mensagens de status do formulário.
- Total de JS ≈ 570 linhas.

## Arquitetura CSS

- `variables.css` define tokens (cores, fontes, movimento) e ambos os temas via classe `.dark-theme`.
- `base.css` → reset e estilos globais; `utilities.css` → classes utilitárias.
- Cada seção tem seu arquivo — padrão claro de fácil manutenção.
- Total de CSS ≈ 1.500 linhas.

## Funcionalidades-chave

| Recurso | Implementação |
| --- | --- |
| Tema dark/light | `localStorage` + `prefers-color-scheme`, ícones sol/lua |
| i18n PT/EN | `data-i18n` no HTML, dicionários em `i18n.js`, preferência salva |
| Scroll reveal | `IntersectionObserver` com fallback e `prefers-reduced-motion` |
| Scroll progress + parallax | `requestAnimationFrame` (nativo, sem libs) |
| Menu responsivo | hamburger + `aria-expanded` |
| Scrollspy | destaca link ativo no menu (evento de scroll) |
| Formulário contato | Web3Forms com `mailto:` fallback |
| Deploy | GitHub Pages via CNAME `taynavicente.com.br` + workflow que atualiza a data do rodapé |

## Observações

- **JavaScript antigo**: o código usa `var`, funções declaradas e construtores clássicos — consistente, mas é possível modernizar para `const/let` e arrow functions.
- **Sem build**: arquivos puros para o navegador; CSS e JS não são minificados. Ideal para GitHub Pages, menos ideal para um monólito grande.
- **1 arquivo HTML**: qualquer mudança estrutural concentrada em `index.html` (454 linhas, discreta).
- `assets/` tem dois arquivos de foto (perfil.jpg e tayna_perfil.jpg) — um deles é proporcionalmente não usado (verificar se a referência é à mesma imagem).
- Vídeo "Video Project 3.mp4" e `gif-projeto-controle-financeiro.gif` na raiz — podem ser movidos para `assets/` para organizar.

## Como executar

```bash
python -m http.server 8000   # servir localmente
node scripts/update-deploy-date.js   # atualizar a data do rodapé (manual; o GitHub Actions faz isso automaticamente no push)
```