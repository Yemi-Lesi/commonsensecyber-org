# Common Sense Cyber

Plain-language cybersecurity education for everyone — built especially for kids just getting online and older adults navigating new tech. No jargon, no judgment.

**Live site:** https://commonsensecyber.org

## What's here

A static site with one small serverless backend, no build step:

```
index.html               Page structure and section markup
css/styles.css            All styling
js/main.js                Section rendering, quiz logic, language switching, security checkup
js/translations.js        All page copy, in 10 languages (en, fr, es, zh, ar, hi, yo, ig, ha, pcm)
assets/logo.svg            Mascot / brand logo
assets/img/                Illustrated video posters
assets/video/               "Real Stories" scam-awareness video clips
functions/api/submit.js     Cloudflare Pages Function — relays the two forms to email via Resend
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
npx wrangler pages deploy . --branch=main
```

This uploads the current folder to the `common-sense-cyber` Pages project and updates both the `*.pages.dev` URL and the `commonsensecyber.org` custom domain.

**Important:** always pass `--branch=main` explicitly. The Pages project's production branch is `main`, but this repo's git branch is `master` (git's default name) — without the flag, Wrangler deploys to a `master` preview environment instead of production, and the live site silently won't update.

**Note:** Cloudflare Pages has a 25MB per-file limit. Videos in `assets/video/` are pre-compressed (H.264, ~480p) to stay under that limit — if adding a new video, compress it first (e.g. with `ffmpeg`) rather than uploading the raw file.

## Adding a new "Real Story" video

1. Compress the video to well under 25MB and drop it in `assets/video/`.
2. Add a matching poster illustration to `assets/img/` (SVG, following the existing gradient + icon style).
3. Register the new file paths in `STORY_VIDEO_SRCS` / `STORY_VIDEO_POSTERS` in `js/main.js`.
4. Add a matching `story.items` entry to **every** language block in `js/translations.js` — the array index must match the video/poster arrays above.

## Contact forms backend

Both the "Get Help" and "Share Your Story" forms POST to `/api/submit` (`functions/api/submit.js`), a Cloudflare Pages Function that relays the message to `contact@commonsensecyber.org` via the [Resend](https://resend.com) API — no mail app required on the visitor's end. It requires a `RESEND_API_KEY` secret on the Pages project (Cloudflare dashboard → Workers & Pages → common-sense-cyber → Settings → Environment variables → **Production**, type **Encrypt**).

The sending domain verified in Resend is **`contact.commonsensecyber.org`** — a subdomain, not the root domain. This is intentional: the root domain already has MX records for Cloudflare Email Routing (which forwards `contact@commonsensecyber.org` to a real inbox), and adding Resend's own MX/DKIM records to the root domain would conflict with that. Keep sending on the subdomain. If the sender address in `submit.js` (`forms@contact.commonsensecyber.org`) ever needs to change, the new address's domain must be verified in Resend first, or sends will fail with a 403 `domain not verified` error.

Both `contact@commonsensecyber.org` (receiving) and `contact.commonsensecyber.org` (sending) exist and serve different purposes — don't consolidate them.

## Publishing a community story

Visitors submit stories via the "Share Your Story" form (see above) — nothing is posted automatically. To publish an approved submission:

1. Open `js/main.js` and find the `COMMUNITY_STORIES` array near the top of the file.
2. Add an entry: `{ name: 'Their name', body: 'The story text.' }` — omit `name` (or leave it `''`) to post anonymously.
3. Deploy: `npx wrangler pages deploy . --branch=main`.

Unlike the "Real Stories" videos, community story text is displayed as submitted and is **not** translated into the other 9 languages — it appears as-is regardless of the visitor's selected language.
