# Common Sense Cyber

Plain-language cybersecurity education for everyone — built especially for kids just getting online and older adults navigating new tech. No jargon, no judgment.

**Live site:** https://commonsensecyber.org

## What's here

A static site, no build step or backend required:

```
index.html          Page structure and section markup
css/styles.css       All styling
js/main.js           Section rendering, quiz logic, language switching, security checkup
js/translations.js   All page copy, in 10 languages (en, fr, es, zh, ar, hi, yo, ig, ha, pcm)
assets/logo.svg       Mascot / brand logo
assets/img/           Illustrated video posters
assets/video/         "Real Stories" scam-awareness video clips
```

Content is fully data-driven: `main.js` reads section copy out of `window.CSC_I18N[lang]` (defined in `translations.js`) and renders each section on load and on language change. To edit copy, edit `translations.js` — do not hardcode text into `index.html` or `main.js`.

## Running locally

No build step — just open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Deploying

Hosted on Cloudflare Pages. To ship a new deployment:

```bash
npx wrangler pages deploy .
```

This uploads the current folder to the `common-sense-cyber` Pages project and updates both the `*.pages.dev` URL and the `commonsensecyber.org` custom domain.

**Note:** Cloudflare Pages has a 25MB per-file limit. Videos in `assets/video/` are pre-compressed (H.264, ~480p) to stay under that limit — if adding a new video, compress it first (e.g. with `ffmpeg`) rather than uploading the raw file.

## Adding a new "Real Story" video

1. Compress the video to well under 25MB and drop it in `assets/video/`.
2. Add a matching poster illustration to `assets/img/` (SVG, following the existing gradient + icon style).
3. Register the new file paths in `STORY_VIDEO_SRCS` / `STORY_VIDEO_POSTERS` in `js/main.js`.
4. Add a matching `story.items` entry to **every** language block in `js/translations.js` — the array index must match the video/poster arrays above.
