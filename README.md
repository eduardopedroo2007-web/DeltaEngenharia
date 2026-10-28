# Delta Engenharia e Projetos — site

Site estático (HTML + CSS + JS puro), sem build. Pronto para o **GitHub Pages**.

## Como publicar
1. Crie um repositório no GitHub (ex.: `delta-engenharia`).
2. Envie **todos os arquivos desta pasta** (inclusive `.nojekyll`) para a raiz do repositório
   (botão *Add file → Upload files*, arraste tudo e faça o commit).
3. Vá em **Settings → Pages**, em *Source* escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
4. Em ~1 minuto o site abre em `https://SEUUSUARIO.github.io/NOME-DO-REPO/`.
5. Domínio próprio (opcional): Settings → Pages → *Custom domain*.

## Depois de publicar (prévia no WhatsApp/Instagram)
Abra `index.html`, ache o bloco comentado no `<head>`, troque `SEUUSUARIO/NOMEDOREPO` pelo seu endereço
e **apague as marcas `<!--` e `-->`**. Isso ativa a imagem de prévia (`assets/og-image.png`) ao compartilhar o link.

## Onde editar
- Links e telefone: botões no `index.html` (WhatsApp, Instagram, Maps, avaliação Google).
- Texto copiado no botão de endereço: `assets/app.js`.
- Cores e animações: `assets/style.css` (variáveis no topo).
- Logo: `assets/logo.png` e `assets/logo.webp`.
