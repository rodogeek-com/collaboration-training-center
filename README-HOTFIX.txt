SEARCH HOTFIX v6

Replace only these files:
- package.json
- src/layouts/BaseLayout.astro
- src/pages/[lang]/guides/[id].astro
- src/styles/global-search.css

Do not replace .github, deploy.yml, astro.config.mjs, src/pages/index.astro, Sidebar.astro, or global.css.

The build command now creates the Pagefind index after Astro finishes.
