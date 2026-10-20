---
title: "Strain cards: a print system that prints itself"
summary: "Every strain in the flower case gets a printed card on a wood block: type, name, THC, sizes, price, farm. The cards are made by an app that reads the point-of-sale inventory and lays out the print sheet."
organization: "Grass Valley Provisions"
role: "Designed the card and the display, built the card app, run the daily cycle."
period: "2024–now"
era: "2024–now"
areas: [Design, Product]
tags: [design, ai, cannabis]
featured: false
order: 6
cover: /images/work/gvp-strain-cards/case-closeup.jpg
coverAlt: "Strain cards on wood blocks in the flower case, each beside a bud on a mirror"
outcomes:
  - { value: "~100", label: "strains in the case at a time" }
  - { value: "10", label: "cards per sheet, print-ready in one click" }
  - { value: "Daily", label: "cards change as inventory changes" }
---

## Context

The flower case is the center of the store. About a hundred strains, each one a bud on a mirror with a card beside it. Customers read the cards more than anything else in the building, and the cards change constantly: new drops, sellouts, price changes, a farm's THC number updating with a new batch.

When the store opened, cards were laid out one at a time in Illustrator. It worked at twenty strains. At a hundred, with daily changes, it was most of a morning, every morning, and the first thing to slip when the day got busy.

## Role

Both halves. I designed the card and the way it sits in the case, and I built the app that makes the cards. The flower case is about 15% of my week and this is the part I automated.

## What I built

**The card.** 3.5 by 2 inches, on a dark wood block with a brass pin. Strain type in its color (indica blue, hybrid green, sativa gold), strain name large in a condensed display face, then a boxed row for THC, CBD or a second cannabinoid, and up to three size-and-price pairs. The farm name at the bottom with the farm's logo when we have it, and badges for Local (Nevada County), OCal, and Sun & Earth. It went through several typographic versions before the boxed row, which is the part customers actually scan.

**The app.** A single-page tool, built with Claude Code, that does the whole cycle. It syncs the flower inventory from Dutchie's point-of-sale system and lists every in-stock strain with brand, THC and prices. Pick a strain and the card is drawn live from the data; adjust anything (which sizes to show, the second cannabinoid, hang hole top or bottom, brand line placement, a logo upload). Add it to a print queue. The queue lays out A4 sheets, ten cards each, with cut lines and a dashed inner frame, and exports a print PDF with the type converted to outlines and colors in CMYK so the print shop gets exactly what's on screen. Blank and out-of-stock cards are one click.

**The case tracker.** A second small tool that mirrors the case itself: every brand as a column, every strain as a row, colored by status, so I can see at a glance what's low, what's new, and what needs a card before I walk over to the case.

## Outcome

Cards for the whole case go from a morning in Illustrator to a few minutes: sync, pick, queue, print. Every card matches the register because it comes from the same data. The design is consistent across a hundred cards because no one is laying them out by hand.

## Lesson

The card was designed first and the app second, and that was the right order. An app that generates a mediocre card just makes mediocre cards faster. Once the card was right, the app's only job was to never let it drift.

## Images

<div class="gallery">
<figure><img src="/images/work/gvp-strain-cards/case-closeup.jpg" alt="Strain cards and buds in the flower case" loading="lazy" /><figcaption>The flower case.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/case-angle.jpg" alt="Flower case from an angle" loading="lazy" /><figcaption>Cards on wood blocks, buds on mirrors.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/counter-customer.jpg" alt="A customer reading cards in the concentrate case" loading="lazy" /><figcaption>The same card system in the concentrate case.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/card-app-preview.png" alt="A card rendered in the app" loading="lazy" /><figcaption>A card, drawn live from inventory data.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/card-app.png" alt="The strain card app: inventory list, card editor, print queue and sheet preview" loading="lazy" /><figcaption>The app: Dutchie inventory, editor, print queue, A4 sheet.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/flower-case-tracker.png" alt="Flower case tracker: brands as columns, strains colored by status" loading="lazy" /><figcaption>The case tracker.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/card-iterations-2024.png" alt="Four early typographic versions of the card" loading="lazy" /><figcaption>Early versions, 2024.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/print-sheet-test.png" alt="Test print sheet with cut lines" loading="lazy" /><figcaption>Print test sheet with cut lines.</figcaption></figure>
<figure><img src="/images/work/gvp-strain-cards/print-sheet-concentrates.png" alt="Print sheet of concentrate cards" loading="lazy" /><figcaption>A sheet of concentrate cards.</figcaption></figure>
</div>
