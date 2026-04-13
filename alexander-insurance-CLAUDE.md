# Alexander Insurance Group — Claude Context

## What this is
Insurance and financial services website for Roland Alexander.
Replacing alexanderinsurancegroup.net
Architecture: Vanilla HTML/CSS/JS, multi-page SPA (same pattern as Toys for Talking).

## Brand
- Business: Alexander Insurance Group
- Agent: Roland Alexander
- Tagline: "Security Today. Legacy Tomorrow."
- Primary color: #1B3A6B (deep navy)
- Accent color: #C9A84C (gold)
- Fonts: Playfair Display (700, 800) + Inter (300–800)

## Services
1. Life Insurance (primary focus — IUL-based financial independence)
2. Home & Renters Insurance
3. Auto Insurance
4. Commercial Insurance

## Stack
- Vanilla HTML/CSS/JS — no frameworks, no build tools
- Multi-page SPA: JS renders each page into #page-content
- Google Fonts: Playfair Display + Inter
- Bootstrap Icons CDN
- Scheduling: Calendly embed (on schedule page)
- Deployment: Netlify (target)

## File structure
```
index.html                   — Shell only. Do not add content here.
css/styles.css               — All styles. Versioned with ?v=N on <link> tag.
js/app.js                    — Router. Handles all page navigation.
js/data.js                   — Site content/config. Check here before hardcoding strings.
js/components/navbar.js      — Renders nav into #navbar
js/components/footer.js      — Renders footer into #footer-root
js/pages/home.js             — Home page
js/pages/services.js         — Services detail page
js/pages/about.js            — Roland's story
js/pages/schedule.js         — Calendly embed
js/pages/contact.js          — Contact form
AlexanderInsuranceLogo.PNG   — Logo file (at root)
ProfilePhoto.png             — Roland's photo (at root, used on about page)
Commercial.MOV               — IUL/financial services video (at root, used on home page)
```

## Nav links
Home | Services | About | Schedule (CTA button)

## Page sections — Home
1. Hero — navy bg, logo, tagline, 2 CTA buttons (Schedule a Call, View Services)
2. Services overview — 4 cards (Life, Home/Renters, Auto, Commercial)
3. Mission — gold accent section, Roland's core belief statement
4. Video — Commercial.MOV (IUL financial independence)
5. About teaser — short bio excerpt + link to full About page
6. Contact form — name, email, phone, service interest, message

## Page sections — Services
Individual sections for each of the 4 insurance types with description + CTA to schedule

## Page sections — About
Roland's full bio (cleaned and formatted), photo, mission statement

## Page sections — Schedule
Calendly embed — CUSTOMIZE: Replace with real Calendly URL

## Key rules
- Always increment ?v=N on css/styles.css link when editing CSS or any JS file
- Never add content to index.html — all content lives in js/pages/ and js/data.js
- Check js/data.js before hardcoding any strings
- Commercial.MOV autoplay, muted, looped (same pattern as Mike Rodgers site)
- Do not introduce npm packages or build tools

## Do not
- Add React, Vue, or any framework
- Add Bootstrap CSS (Bootstrap Icons CDN is fine)
- Rename or reorganize file structure without asking
- Use placeholder lorem ipsum — use real content from js/data.js
