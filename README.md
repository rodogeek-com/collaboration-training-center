# Collaboration Training Center

Modular bilingual Microsoft Teams end-user training portal created by Rodogeek.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Commit all files to the `main` branch of `rodogeek-com/collaboration-training-center`.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main`. The workflow publishes the `dist` directory automatically.

The configured production URL is:

`https://rodogeek-com.github.io/collaboration-training-center/`

## Add a guide

Create one Markdown file in each language folder using the same `guideId`:

- `src/content/guides/en/guide-id.md`
- `src/content/guides/es/guide-id.md`

Keep each task independent so Microsoft UI changes require updating only one microguide.
