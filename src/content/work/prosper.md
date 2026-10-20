---
title: "Prosper: designing and shipping a referral product"
summary: "A referral widget, a campaign dashboard and a public Shopify app, designed and shipped for Shopify stores over two years."
organization: "Prosper Technology Solutions"
role: "Co-founder and Chief Product Officer. All product, brand and marketing design; frontend; dev handoff; client integration docs."
period: "2021–2023"
era: "2020–2023"
areas: [Product, Design, Strategy]
tags: [startups, design]
featured: true
order: 10
cover: /images/work/prosper/widget-live-takeya-laptop.png
coverAlt: "The Prosper referral widget live on a Takeya product page"
outcomes:
  - { value: "86", label: "businesses in the beta" }
  - { value: "24%", label: "of discounts given converted to a sale" }
  - { value: "$1.90", label: "customer acquisition cost, B Draddy pilot" }
  - { value: "60%", label: "of B Draddy referrals converted" }
---

## Context

Referral marketing works better than paid ads for small e-commerce brands, and in 2021 every tool for it looked a decade old: a pop-up that asked the customer to create an account, download an app, or wait for a friend to buy. Dylan Brownstein and I started Prosper to make sending a referral take twenty seconds and to make setting one up take minutes instead of months. We moved to Grass Valley to build it in the same room, joined gener8tor Reno Tahoe's first cohort, and raised $100k.

## Role

I was the design side of the company: product, brand, website, pitch materials, docs, and the client-facing integration guides. Early on a few designers supported me; the shipped work is mine. I wrote the specs the developers built from, including an 18-page UI spec for the widget covering responsive widths, two-factor states, invalid inputs and theming variables. I led 3 designers and 4 developers at peak.

## What I built

**The widget.** A referral flow that lives anywhere on a page instead of in a pop-up. Verify with a phone number or email, share by text, email or link, get a reward immediately. Shipped as an MVP in October 2022 and redesigned in 2023 after watching customers get stuck on two-factor friction and look-alike screens. The second version added an extended variant with a shorter path to the referral and let the store choose.

**The dashboard.** Campaigns, widgets, reports. A widget creator so a store could match its own brand without us touching anything, reward types (Shopify discount, static code, custom), email and SMS templates with backend variables, and a reports page with a date range and referral analytics.

**The Shopify app.** Prosper modified to fit Shopify's native cart and checkout, generating a unique discount code per customer to prevent fraud, listed publicly on the Shopify App Store. Plus a Zapier app and a Docusaurus docs site so customers could deploy without us.

**Everything around it.** Brand and logo, getprosper.io across three versions, the investor deck, the whitepaper, printed QR referral signs for a Reno retailer's checkout counter, and per-client integration documents.

Stack: React widget, Python backend, Shopify and Zapier integrations.

## Outcome

Clients included B Draddy, Takeya, Thermoflask, Home Means Nevada, Ponto and Handful. B Draddy's 30-day pilot sent 63 referrals and converted 38 of them for about $6,300 in net revenue at a $1.90 acquisition cost; their CMO said Prosper drove more revenue in 30 days than his old tools had in three years. The beta reached 86 business users with roughly a quarter of discounts given converting to a sale.

Prosper stopped operating in 2024 after a raise didn't close, and was dissolved in 2025.

## Lesson

The product passed the demand test. The business model didn't: at $25 a month plus 75 cents a referral, a customer who made $6,300 paid us $72. I'd charge for the value from the first customer, and decide early whether the company is a tool business or a venture business instead of running it as both. [More on that in the post.](/writing/designing-and-developing-prosper)

## Images

<div class="gallery">
<figure><img src="/images/work/prosper/widget-product-page-phone.png" alt="Prosper referral widget on a product page, phone mockup" loading="lazy" /><figcaption>The widget on a product page.</figcaption></figure>
<figure><img src="/images/work/prosper/widget-steps-phone.png" alt="Three-step referral flow in the widget" loading="lazy" /><figcaption>Tell a friend, get your reward, enjoy the discount.</figcaption></figure>
<figure><img src="/images/work/prosper/widget-copy-reward.png" alt="Copy reward to clipboard state" loading="lazy" /><figcaption>Reward delivered in real time.</figcaption></figure>
<figure><img src="/images/work/prosper/widget-share-button-shoes.png" alt="Share with a friend button on a shoe product page" loading="lazy" /><figcaption>Native placement on a store's product page.</figcaption></figure>
<figure><img src="/images/work/prosper/widget-components-spread.png" alt="Widget component variations" loading="lazy" /><figcaption>Widget variants and states.</figcaption></figure>
<figure><img src="/images/work/prosper/widget-user-flow-2022.jpg" alt="User flow diagram for the MVP widget, October 2022" loading="lazy" /><figcaption>MVP user flow, October 2022.</figcaption></figure>
<figure><img src="/images/work/prosper/widget-ui-spec-pages.png" alt="Pages from the widget UI specification" loading="lazy" /><figcaption>From the UI spec written for the dev handoff. <a href="/files/prosper-widget-ui-spec-2022.pdf">Full PDF</a>.</figcaption></figure>
<figure><img src="/images/work/prosper/dashboard-widgets-2023.png" alt="Prosper dashboard, widgets page, 2023" loading="lazy" /><figcaption>Dashboard, 2023.</figcaption></figure>
<figure><img src="/images/work/prosper/dashboard-campaigns-2024.png" alt="Prosper dashboard, campaigns page, 2024" loading="lazy" /><figcaption>Campaigns, 2024.</figcaption></figure>
<figure><img src="/images/work/prosper/dashboard-widget-wizard.png" alt="Widget creator with color variables and live preview" loading="lazy" /><figcaption>The widget creator.</figcaption></figure>
<figure><img src="/images/work/prosper/dashboard-reports.jpg" alt="Reports page design" loading="lazy" /><figcaption>Reports.</figcaption></figure>
<figure><img src="/images/work/prosper/pricing-plans.png" alt="Pricing page" loading="lazy" /><figcaption>Pricing.</figcaption></figure>
<figure><img src="/images/work/prosper/shopify-app-store-listing.png" alt="Prosper on the Shopify App Store" loading="lazy" /><figcaption>The Shopify App Store listing.</figcaption></figure>
<figure><img src="/images/work/prosper/home-means-nevada-qr-sign.jpg" alt="Printed QR referral sign for Home Means Nevada" loading="lazy" /><figcaption>Checkout-counter referral sign, Home Means Nevada.</figcaption></figure>
<figure><img src="/images/work/prosper/home-means-nevada-sms-referral.jpg" alt="A referral text message sent through Prosper" loading="lazy" /><figcaption>A referral in the wild.</figcaption></figure>
<figure><img src="/images/work/prosper/getprosper-site-2024.jpg" alt="getprosper.io home page, 2024" loading="lazy" /><figcaption>getprosper.io, third version.</figcaption></figure>
</div>

<p><a href="/files/prosper-bdraddy-case-study-2023.pdf">B Draddy case study (PDF, 2023)</a></p>
