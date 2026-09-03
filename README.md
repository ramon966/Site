# Norte Agro — site institucional

Site estático em HTML, CSS e JavaScript puro. Sem build, sem dependências,
sem framework. Abre com duplo clique no `index.html` e pode ser publicado em
qualquer hospedagem estática (GitHub Pages, Netlify, Hostinger, cPanel…).

O `index.html` é só a casca: `<head>` + `<div id="app"></div>`. A página é
montada em JavaScript, a partir de dados e componentes.

## Estrutura

```
.
├── index.html                  <head>, dados estruturados, lista de scripts e #app
├── README.md
└── assets/
    ├── css/
    │   ├── tokens.css          variáveis: cores, fontes, sombras, temas claro/escuro
    │   ├── base.css            reset, tipografia, container, seções, utilitários
    │   ├── components.css      botões, cartões, formulário, seletor de idioma, selos
    │   ├── layout.css          cabeçalho fixo, navegação e rodapé
    │   └── sections.css        composição de cada seção da home
    ├── js/
    │   ├── theme-init.js       aplica o tema salvo antes da 1ª pintura (síncrono)
    │   ├── main.js             monta a página e inicializa os módulos
    │   ├── lib/
    │   │   ├── dom.js          helpers de template (each, atributos, marcadores i18n)
    │   │   └── icons.js        todos os ícones SVG + geração do sprite
    │   ├── data/
    │   │   ├── site.js         empresa: endereço, e-mail, redes, navegação, idiomas
    │   │   └── content.js      o que cada seção lista (ícone + chaves de tradução)
    │   ├── i18n/
    │   │   ├── pt-BR.js        textos em português
    │   │   ├── en-US.js        textos em inglês
    │   │   └── es-ES.js        textos em espanhol
    │   ├── components/         uma função por bloco, devolvendo HTML
    │   │   ├── brand.js  plate.js  social.js      (reutilizáveis)
    │   │   ├── header.js  footer.js
    │   │   └── hero.js  overview.js  about.js  territorial.js
    │   │       environmental.js  projects.js  testimonial.js  contact.js
    │   └── modules/            comportamento, depois que a página existe
    │       ├── i18n.js         troca de idioma + menu de idiomas
    │       ├── theme.js        botão claro/escuro
    │       ├── nav.js          menu mobile + link ativo conforme a rolagem
    │       ├── reveal.js       animação de entrada dos blocos
    │       └── contact-form.js formulário de contato
    └── img/
        ├── logo-light.png      logotipo para fundo claro (tema claro)
        ├── logo-dark.png       logotipo para fundo escuro (tema escuro)
        ├── favicon.png         folha do logo, ícone da aba
        ├── apple-touch-icon.png folha sobre fundo creme, atalho no iPhone
        └── flags/              bandeiras do seletor de idioma
```

## Como funciona

1. O navegador carrega o CSS e, em seguida, os scripts na ordem declarada no
   `index.html`: `lib` → `data` → `i18n` → `components` → `modules` → `main.js`.
   Todos usam `defer`, o que preserva essa ordem e espera o DOM ficar pronto.
2. Cada script registra o que oferece no objeto global `NA`
   (`NA.dom`, `NA.icons`, `NA.site`, `NA.content`, `NA.translations`,
   `NA.components.*`, `NA.i18n`, `NA.theme`, `NA.nav`…).
3. `main.js` chama os componentes na ordem das seções, joga o HTML no `#app`,
   injeta o sprite de ícones e inicializa os módulos.
4. Os componentes não escrevem texto: marcam onde cada tradução entra
   (`data-i18n`) e o `modules/i18n.js` preenche tudo conforme o idioma salvo.

Não há build nem `npm install`: o que está no repositório é exatamente o que o
navegador executa.

## Como editar

**Textos** → `assets/js/i18n/`. Altere sempre os três idiomas; a chave é a mesma
nos três arquivos.

**Endereço, e-mail, redes sociais, itens do menu** → `assets/js/data/site.js`.
Um só lugar alimenta cabeçalho, contato e rodapé.

**Unidades** → a lista `units` em `data/site.js`, na ordem em que aparecem.
A primeira é a sede: é dela que sai a coordenada exibida no topo do hero.
Cada unidade preenche `city`, `state`, `street`, `district` e `zip`; enquanto
`street` estiver vazio, o contato e o rodapé mostram a cidade com "endereço
em breve" (chave `unit_soon`) em vez de uma linha quebrada. Acrescentar ou
remover uma unidade é só mexer nessa lista — contato, rodapé e hero se
ajustam sozinhos. Só o `index.html` precisa de ajuste manual: os dados
estruturados (JSON-LD) e o bloco `<noscript>`, que são estáticos de propósito
para que buscadores enxerguem os endereços.

**Adicionar/remover um serviço** → `assets/js/data/content.js`: inclua o item na
lista da seção (ícone + chaves) e crie as chaves nos três dicionários. Nenhum
componente precisa ser tocado.

**Cores e fontes** → `assets/css/tokens.css`, com os dois temas lado a lado.

**Tipografia** — as mesmas famílias do site de referência (romeroambiental.com.br):
`--font-display` **Amiri** (serif) nos títulos, sempre em peso 700, que é o
único peso forte da família; `--font-body` **Poppins** (sans) no corpo.
`--font-label` é usada nos rótulos técnicos (etiquetas, legendas, códigos de
idioma) e hoje também é Poppins, porque o site de referência não usa fonte
monoespaçada; para recuperar o visual técnico anterior, basta trocar essa
linha do `tokens.css` de volta para `'IBM Plex Mono', ui-monospace, …` e
acrescentar a família no `<link>` do Google Fonts no `index.html`.

**Logotipo** → `assets/img/logo-light.png` (letras escuras, para o tema claro) e
`assets/img/logo-dark.png` (letras brancas, para o tema escuro). As duas versões
ficam no HTML e o CSS mostra a que combina com o fundo do cabeçalho/rodapé.
O tamanho sai da variável `--logo-h` em `assets/css/layout.css` (44px no
desktop, 30px no celular, 26px abaixo de 380px). O arquivo escuro tem um
enquadramento mais justo que o claro, então recebe 90,4% da altura para o
texto ficar do mesmo tamanho nos dois temas — ao reexportar os dois com o mesmo
enquadramento, remova esse fator.

**Ícone da aba** → `assets/img/favicon.png`, a folha recortada do `logo-light.png`
com fundo transparente. O `apple-touch-icon.png` é a mesma folha sobre o creme
`#f3efe3`, porque o iOS pinta de preto o que for transparente. Trocando o
logotipo, os dois precisam ser gerados de novo.

**Ícones** → `assets/js/lib/icons.js`. Acrescente o desenho em `SYMBOLS` e use
com `NA.icons.use('i-novo')`. O sprite é embutido na página porque os
navegadores bloqueiam `<use>` apontando para arquivo `.svg` externo.

**WhatsApp** → em `data/site.js`, troque `whatsapp: null` por
`{ number: '+55 …', href: 'https://wa.me/55…' }`. Os três lugares que hoje
mostram "em breve" passam a exibir o link automaticamente.

**Imagens** → os blocos `.plate` são espaços reservados. Para usar a foto real,
substitua a chamada de `NA.components.plate({…})` por
`<img src="assets/img/<arquivo>.jpg" alt="descrição">`.

**Nova seção** → crie `components/<nome>.js` seguindo um dos existentes,
adicione o `<script defer>` no `index.html` e inclua a chamada na lista `page`
de `main.js`.

**Ordem das seções** → só a lista `page` em `assets/js/main.js`.

### Responsividade

O layout é feito para telefone, tablet e desktop, com três pontos de quebra:

| Largura | O que muda |
| --- | --- |
| até **380px** | a marca encolhe mais e o seletor de idioma fica só com a bandeira |
| até **640px** (celular) | tudo em uma coluna; cabeçalho compacto (60px); menos espaço entre blocos; campos do formulário em 16px; bloco panorâmico do mapa fica mais alto |
| até **960px** (tablet) | navegação vira painel lateral; grades caem para duas colunas |
| acima disso | layout completo em três colunas |

Ao mexer no cabeçalho, lembre que ele precisa caber em 320px de largura:
marca + idioma + tema + menu dividem a mesma linha. O menu lateral trava a
rolagem do fundo enquanto está aberto e fecha com toque fora, Escape, clique
num link ou ao voltar para a largura de desktop.

### Marcadores de tradução

Dentro dos componentes, os helpers de `NA.dom` geram os atributos que o
`modules/i18n.js` procura:

| Helper | Atributo gerado | Efeito |
| --- | --- | --- |
| `t(chave)` | `data-i18n` | texto do elemento |
| `tHtml(chave)` | `data-i18n-html` | conteúdo HTML (títulos com `<em>`) |
| `tPh(chave)` | `data-i18n-ph` | `placeholder` |
| `tTitle(chave)` | `data-i18n-title` | `title` |
| `tAria(chave)` | `data-i18n-aria` | `aria-label` |

Chave ausente na tradução escolhida cai automaticamente no português.

## Pendências conhecidas

- **SEO e pré-visualização de links**: como o conteúdo é gerado em JavaScript,
  buscadores e o WhatsApp leem apenas o `<head>`. Por isso o `index.html` traz
  os dados estruturados (JSON-LD) e o `<noscript>` com endereço e e-mail —
  mantenha os dois em dia com `data/site.js`.
- O formulário de contato é apenas front-end: exibe a mensagem de sucesso sem
  enviar nada. Para conectar a um serviço real, veja o comentário em
  `modules/contact-form.js`.
- Falta definir `og:url` e `og:image` no `<head>` (dependem do domínio final).
- A seção de contato tem um espaço reservado para o mapa.
