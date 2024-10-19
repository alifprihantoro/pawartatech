# web

personal web.

## structure project

> this project use monorepo.

- apps : (for web/api)
  - web
- packages : (shared packages)
  - html : for hilight
  - configs : configuration ts,eslint,tailwind
  - ui : component/ui and storybook
  - style : compile css tailwind
- e2e : test e2e

## install

```bash
git clone https://github.com/alifprihantoro/web
cd web
pnpm i --lockfile-only
pnpm dev:web
```

## command

- build => build entire project
- dev => build entire project in dev mode
- test => test
- lint => ceck lint with eslint
- story => build all story
- publish => lint, test, build web with storybook then move into branch result
- publish:turbo => like publish but use turborepo
- e2e => test e2e

## branch

- master (main branch)
- publish : trigger ci to publish
- result : result compiled (rollback purpose)
- refactor/\* : for refactory code changes
- feat/\* : for add feature
- beta/\* : for experimental

## technology, Tools and Other relate

### astrojs

Astojs is agnostic framework can work with any ui framework like react, vue, etc. And easy to use and debug. cause astrojs use vite for bundler. Why not next? cause i not use any ui framework. But still use it if i want.

### pnpm

pnpm is good for memory size, cause use link rather than copy.

### monorepo

why i'm using monorepo, but still split content, public and dist. I'm using monorepo just for learn. split public and content to different repo because i wont have many commit in repo web. and any can contribute easy.

### storybook

for documentation ui, test and show changes ui every pull request.

### tailwind with daisy ui

because i want fast and have lsp. so I still have completion for class name and can hover it.

### vite

easy configs plugins and create custom plugins.

### vercel

for easy deploy and free.
