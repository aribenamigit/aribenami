---
title: "In-store TV menus that update themselves"
summary: "A React menu app for the dispensary's TV screens, fed by the point-of-sale inventory through a one-click sync script. Live prices, live stock, no one retyping anything."
organization: "Grass Valley Provisions"
role: "Designed and built it: the app, the sync script, the screen layouts. Maintain it daily."
period: "2024–now"
era: "2024–now"
areas: [Product, Design]
tags: [design, ai, cannabis]
featured: true
order: 5
cover: /images/work/gvp-tv-menu/in-store-wide.jpg
coverAlt: "The TV menu mounted in a wood frame behind the counter at Grass Valley Provisions"
outcomes:
  - { value: "1 click", label: "to sync the screens to live inventory" }
  - { value: "~550", label: "products in the feed, filtered to what belongs on a screen" }
  - { value: "0", label: "prices typed by hand" }
---

## Context

A dispensary menu changes every day. New strains come in, prices move, things sell out. The TV screens in the store are the menu most customers actually read while they wait, and the usual way to keep them current is someone editing slides in a signage tool by hand, which means they are usually wrong.

Grass Valley Provisions runs on Dutchie's point-of-sale system, which has an inventory API. That's the whole opportunity: the screens should read from the same data the register does.

## Role

Mine end to end. I designed the card layout and the screen system, wrote the React app, wrote the sync script, and set up the hosting and the ScreenCloud deployment. I still maintain it: new screen layouts, promo and sponsorship content, hardware when a TV dies. About 4% of my week.

## What I built

**The menu app.** A React app that reads a JSON file of products and renders them as cards: product photo, name, strain type color-coded (sativa gold, hybrid green, indica blue, with a matching inner glow on the card), category, brand, price, size, THC percentage calculated from potency and weight. Local, OCal and Sun & Earth badges when a product carries those tags. Ten cards per screen on portrait-mounted TVs, cycling every 20 seconds through the whole catalog, sorted by category and price. Serif for names and prices, condensed sans for the small text, tuned for a screen read from ten feet away. Styled with SCSS, bundled with webpack, deployed to ScreenCloud through their apps SDK, which is what runs on the actual TVs.

**The sync script.** A Python script that pulls the full inventory from the Dutchie POS API, filters out what shouldn't be on a screen (accessories, gift cards, anything under a dollar, anything without a photo, a list of categories we show elsewhere), strips each product down to the eleven fields the app needs, and commits the result as a JSON file to the app's GitHub repo. The app reads that file. No database, no server to keep alive.

**The one-click button.** The script is wrapped in a tiny Flask page with one button: "Run Script." Whoever is opening the store presses it, the screens are current within a minute. That page exists because a script nobody else can run isn't a tool, it's a chore with my name on it.

## Outcome

The screens match the register. Price changes, new drops and sellouts show up on the TVs the same morning without anyone editing a slide. The daily sync is a button press. The same pipeline now feeds the strain cards in the flower case, which is its own case study.

## Lesson

The hard part wasn't the app. It was deciding what not to show: which categories, which fields, which products. A menu is an edit of the inventory, and the filter list in the sync script is where most of the design is.

## How it fits together

<svg viewBox="0 0 900 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pipeline: Dutchie POS API to sync script to JSON in GitHub to React app to ScreenCloud to TVs" style="max-width:100%;height:auto;display:block;margin:1.5rem 0">
  <defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#666"/></marker></defs>
  <g font-family="system-ui, sans-serif" font-size="14" fill="#111">
    <rect x="10" y="50" width="150" height="70" rx="8" fill="#f3f3f3" stroke="#bbb"/><text x="85" y="80" text-anchor="middle" font-weight="600">Dutchie POS</text><text x="85" y="100" text-anchor="middle" fill="#666">inventory API</text>
    <rect x="200" y="50" width="150" height="70" rx="8" fill="#f3f3f3" stroke="#bbb"/><text x="275" y="80" text-anchor="middle" font-weight="600">Sync script</text><text x="275" y="100" text-anchor="middle" fill="#666">Python, filter + trim</text>
    <rect x="390" y="50" width="150" height="70" rx="8" fill="#f3f3f3" stroke="#bbb"/><text x="465" y="80" text-anchor="middle" font-weight="600">data.json</text><text x="465" y="100" text-anchor="middle" fill="#666">committed to GitHub</text>
    <rect x="580" y="50" width="150" height="70" rx="8" fill="#f3f3f3" stroke="#bbb"/><text x="655" y="80" text-anchor="middle" font-weight="600">React menu app</text><text x="655" y="100" text-anchor="middle" fill="#666">cards, cycling</text>
    <rect x="770" y="50" width="120" height="70" rx="8" fill="#111" stroke="#111"/><text x="830" y="80" text-anchor="middle" font-weight="600" fill="#fff">ScreenCloud</text><text x="830" y="100" text-anchor="middle" fill="#ccc">the TVs</text>
    <line x1="160" y1="85" x2="198" y2="85" stroke="#666" stroke-width="1.5" marker-end="url(#a)"/>
    <line x1="350" y1="85" x2="388" y2="85" stroke="#666" stroke-width="1.5" marker-end="url(#a)"/>
    <line x1="540" y1="85" x2="578" y2="85" stroke="#666" stroke-width="1.5" marker-end="url(#a)"/>
    <line x1="730" y1="85" x2="768" y2="85" stroke="#666" stroke-width="1.5" marker-end="url(#a)"/>
    <rect x="200" y="140" width="150" height="34" rx="17" fill="#fff" stroke="#111"/><text x="275" y="162" text-anchor="middle">One-click Flask page</text>
    <line x1="275" y1="140" x2="275" y2="122" stroke="#666" stroke-width="1.5" marker-end="url(#a)"/>
  </g>
</svg>

## Images

<div class="gallery">
<figure><img src="/images/work/gvp-tv-menu/in-store.jpg" alt="The menu screen in the store, framed in oak behind the counter" loading="lazy" /><figcaption>In the store: a portrait screen in an oak frame behind the counter.</figcaption></figure>
<figure><img src="/images/work/gvp-tv-menu/tv-menu-three-screens.jpg" alt="Three screens: flower, flower, concentrates" loading="lazy" /><figcaption>Three screens in the rotation.</figcaption></figure>
<figure><img src="/images/work/gvp-tv-menu/screen-flower-1.jpg" alt="Flower screen with ten strains" loading="lazy" /><figcaption>Flower.</figcaption></figure>
<figure><img src="/images/work/gvp-tv-menu/screen-flower-2.jpg" alt="Flower screen with local badges" loading="lazy" /><figcaption>Flower, with Local badges on Nevada County growers.</figcaption></figure>
<figure><img src="/images/work/gvp-tv-menu/screen-concentrates.jpg" alt="Concentrates screen" loading="lazy" /><figcaption>Concentrates.</figcaption></figure>
<figure><img src="/images/work/gvp-tv-menu/sync-three-states.png" alt="The one-click sync page: ready, running, done" loading="lazy" /><figcaption>The one-click sync page: Ready, Running, Script executed successfully.</figcaption></figure>
<figure><img src="/images/work/gvp-tv-menu/screen-card-detail.jpg" alt="Four product cards up close" loading="lazy" /><figcaption>The card: photo, name, strain type, category, brand, price, size, THC.</figcaption></figure>
</div>

<!-- GAP: promo and sponsorship layouts, if worth showing. -->
