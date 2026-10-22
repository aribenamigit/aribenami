---
title: "Prosper: two years designing a referral product"
summary: "A referral flow that takes twenty seconds and lives on the product page, plus the dashboard and Shopify app that let a store run it without us."
organization: "Prosper Technology Solutions"
role: "Co-founder and CPO. Product design, specs, system diagrams, frontend, client placements."
period: "2021–2024"
era: "2020–2023"
areas: [Product, Design]
tags: [startups, design]
featured: true
order: 10
cover: /images/work/prosper-product/hero-widgets-over-chart.png
coverAlt: "Prosper widget components floating over a referral chart"
outcomes:
  - { value: "20 sec", label: "share to reward" }
  - { value: "60%", label: "of B Draddy referrals converted" }
  - { value: "$1.90", label: "cost per acquired customer, B Draddy pilot" }
---

## Context

In 2020 I ran a clothing brand while I was still in school. We learned fast that digital ads rarely paid for themselves. Ad costs had been climbing for years, and most small brands spend on them anyway because there's no obvious alternative. Word of mouth worked better than ads. There was just no easy way for a company to run it or track it.

Every referral tool we looked at in 2021 seemed built ten years earlier. Each one lived in a pop-up and asked the customer to create an account, download an app, or wait for a friend to buy. Prosper's bet was that a referral should take twenty seconds and happen where the customer already is: on the product page, in the cart, after checkout.

<figure><img src="/images/work/prosper-product/old-referral-tool-2021.png" alt="A typical referral tool dashboard from 2021" loading="lazy" /><figcaption>What the existing tools looked like in 2021.</figcaption></figure>

A referral has two sides. The customer sees a small widget: share with a friend, get a reward. The store sees everything that makes that widget work: where it goes on the site, what the reward is, who gets paid and when. Prosper had to be both. The widget came first. The tools for the store took the rest of the company's life.

We were seven. Dylan ran the company and the fundraising, Taha and Sachal sold, and four of us built: Matt, Huseyin and Robert on the code, me on every piece of design, the specs the developers worked from, and the frontend prototypes I handed off for implementation.

## The widget

**MVP, October 2022.** Verify with a phone number or email, choose text, email or link, get a reward code immediately. I handed it to the developers with an 18-page spec: responsive widths, the two-factor flow, invalid-input states, the exact copy, the Figma variables for theming.

<div class="pair">
<figure><img src="/images/work/prosper-widget/widget-mvp-phone.png" alt="The MVP widget on a phone" loading="lazy" /><figcaption>The MVP, October 2022.</figcaption></figure>
<figure><img src="/images/work/prosper-widget/widget-ui-spec-pages.png" alt="Pages from the UI spec" loading="lazy" /><figcaption>From the 18-page UI spec. <a href="/files/prosper-widget-ui-spec-2022.pdf">Full PDF</a>.</figcaption></figure>
</div>

It shipped and clients used it, and it had problems I could watch happening. Two-factor added friction. The steps looked alike. Nobody knew how far along they were. The buttons were too small on phones.

**Second widget, 2023.** Designed from watching people get stuck in the first one. It opens as a slider that sits in the page instead of a panel. A progress bar runs across every step and each step has a title. Sharing grew from text, email and link to WhatsApp, Slack, Instagram, Facebook and Reddit. Reward generation got a loading state. The buttons got big. Two sizes shipped: compact for product pages, extended with more context up front, and the store picks.

<figure><img src="/images/work/prosper-widget/widget-v2-extended.png" alt="Second widget, extended version, every screen" loading="lazy" /><figcaption>Second widget, extended version, every screen.</figcaption></figure>

<figure><img src="/images/work/prosper-widget/widget-v2-annotated.png" alt="Annotated changes between the two widgets" loading="lazy" /><figcaption>What changed and why.</figcaption></figure>

**Placements.** The widget had to look native on every store, so for each client I built the placement: the product page button on B Draddy, Fairway & Greene and Takeya, the cart drawer on Unit 1, a dedicated referral page, the Shopify order-status page.

<div class="pair">
<figure><img src="/images/work/prosper-widget/client-bdraddy-cart.jpg" alt="The widget in B Draddy's cart" loading="lazy" /><figcaption>B Draddy, cart.</figcaption></figure>
<figure><img src="/images/work/prosper-widget/widget-live-takeya-laptop.png" alt="The widget on Takeya's product page" loading="lazy" /><figcaption>Takeya, product page.</figcaption></figure>
<figure><img src="/images/work/prosper-widget/client-unit1-cart-drawer.jpg" alt="The widget in Unit 1's cart drawer" loading="lazy" /><figcaption>Unit 1, cart drawer.</figcaption></figure>
<figure><img src="/images/work/prosper-widget/widget-components-spread.png" alt="Widget variants and brand themes" loading="lazy" /><figcaption>Variants and brand themes.</figcaption></figure>
</div>

For Home Means Nevada, a Reno retailer with physical stores, that meant printed QR signs at the checkout counter and a referral text that landed in the friend's phone.

<div class="pair">
<figure><img src="/images/work/prosper-widget/client-hmn-checkout-sign.jpg" alt="QR referral sign at a checkout counter" loading="lazy" /><figcaption>Home Means Nevada, checkout counter sign.</figcaption></figure>
<figure><img src="/images/work/prosper-widget/home-means-nevada-sms-referral.jpg" alt="The referral text message a friend receives" loading="lazy" /><figcaption>What the friend receives.</figcaption></figure>
</div>

## The platform

**The dashboard.** Four things a store needs: Widgets, Campaigns, Reports, Team. The widget creator sets colors, sizing and corners against a live preview, so a store matches its own brand without us. Campaigns connect a widget to a reward and the email and SMS templates that carry it, with variables for the customer's name, the code and the store. Reports show referrals sent, clicks, conversions and revenue. The 2023 version shipped dark. The 2024 version went light and simpler.

<figure><img src="/images/work/prosper-platform/dashboard-campaigns-figma.png" alt="Dashboard, campaigns page, 2023" loading="lazy" /><figcaption>Campaigns, 2023.</figcaption></figure>

<div class="pair">
<figure><img src="/images/work/prosper-platform/dashboard-widget-wizard.png" alt="Widget creator with live preview" loading="lazy" /><figcaption>Widget creator.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/dashboard-reports.jpg" alt="Reports page" loading="lazy" /><figcaption>Reports.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/email-template.png" alt="Email template with variables" loading="lazy" /><figcaption>Email template with variables.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/dashboard-campaigns-2024.png" alt="Dashboard, campaigns page, 2024" loading="lazy" /><figcaption>Campaigns, 2024.</figcaption></figure>
</div>

**The rewards engine.** Under every campaign is a model that has to answer: instant or deferred? Triggered by a purchase or something else? Paid as a Shopify discount, a static code, one from a list, or a custom reward by webhook? And who gets it, sender, receiver or both? I drew the whole tree so the developers and I were building the same thing, and so the campaign wizard could show only the choices that mattered at each step.

<figure><img src="/images/work/prosper-platform/rewards-architecture.png" alt="The rewards engine diagram" loading="lazy" /><figcaption>The rewards engine, drawn for the developers.</figcaption></figure>

**The Shopify app.** Prosper rebuilt to fit Shopify's native cart and checkout, generating a unique discount code per customer to prevent fraud, listed publicly on the App Store. With it came a Zapier app, custom domains for referral links, and a Docusaurus docs site, so a store could go from account to live campaign without talking to us.

<figure><img src="/images/work/prosper-platform/shopify-app-store-listing.png" alt="Shopify App Store listing" loading="lazy" /><figcaption>Shopify App Store listing.</figcaption></figure>

## Outcome

Deployed on B Draddy, Fairway & Greene, Takeya, Thermoflask, Home Means Nevada, Ponto, Carico, Unit 1, Ade Dehye and Handful. B Draddy's 30-day pilot: 63 referrals, 38 conversions, about $6,300 in revenue, $1.90 per acquired customer. Their CMO said it drove more revenue in a month than his old tools had in three years. Across the beta, 86 businesses signed up and roughly a quarter of discounts given out became a sale. Deployment went from a manual install by us to a self-serve flow measured in minutes.

## Lesson

The first widget was designed from what I thought a referral should be. The second was designed from watching people get stuck in the first, and it took a year of shipping to earn it. The dashboard is what turned a service into a product.

## The ending

Prosper stopped operating in 2024 and was dissolved in 2025.

The product worked. Then we went to raise. Months of due diligence with several investors, and in 2024 the only thing anyone wanted to fund was AI. The raise didn't close, and we ran out of money and energy at the same time.

That's the true story, and for a long time it was the only story I told. Here's what I'd do differently.

**Charge for the value, not the event.** Our pricing was $25 a month plus 75 cents per referral. B Draddy made $6,300 in a month and paid us about $72. We designed a product that created real value and captured almost none of it, and we called that "risk-free pricing." I'd put a real price on it from the first customer. Ten customers at $500 a month would have told us more than 86 at $25.

**Decide early what kind of company it is.** At that price Prosper was a tool business. We raised like a venture business. Either could have worked: a small, profitable tool that didn't need anyone's permission, or a venture company priced to grow into its round. Doing both at once is what killed it, more than the market did.

Design is verified by demand. The widget passed that test. The business model around it didn't, and I'm the one who designed both.
