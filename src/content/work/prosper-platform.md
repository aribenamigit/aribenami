---
title: "Prosper: the dashboard, the rewards engine and the Shopify app"
summary: "The business side of Prosper: a self-serve dashboard for campaigns, widgets and reports, a rewards architecture that could pay out anything, and a public Shopify App Store listing."
organization: "Prosper Technology Solutions"
role: "Co-founder and CPO. Product design, information architecture, system diagrams, docs."
period: "2023–2024"
era: "2020–2023"
areas: [Product, Strategy]
tags: [startups, design]
featured: false
order: 12
cover: /images/work/prosper-platform/dashboard-campaigns-figma.png
coverAlt: "Prosper dashboard, campaigns page"
outcomes:
  - { value: "86", label: "businesses in the beta" }
  - { value: "24%", label: "of discounts given converted to a sale" }
  - { value: "Minutes", label: "to deploy, down from a manual install by us" }
---

## Context

For the first months, Prosper was deployed by hand. A store signed up and we configured their widget, wrote their campaign, and installed it. That doesn't scale and it doesn't sell, so the second half of the company's life was spent on the tools that let a store do it themselves.

## Role

I designed the dashboard end to end, drew the system diagrams the developers built from, wrote the documentation site, and designed the Shopify app listing and the pricing. Matt and Huseyin built it; Sachal sold it.

## What I built

**The dashboard.** Four things a store needs: Widgets, Campaigns, Reports, Team. The widget creator sets colors, sizing and corners against a live preview, so a store can match its own brand without us. Campaigns connect a widget to a reward and the email and SMS templates that carry it, with backend variables for the customer's name, the code and the store. Reports show referrals sent, clicks, conversions and revenue over a date range. First version shipped dark, in 2023; the 2024 version went light and simpler.

**The rewards engine.** Underneath every campaign is a reward model that has to answer: instant or deferred? Triggered by a purchase or something else? Paid as a Shopify discount, a static code, one from a list, or a custom reward delivered by webhook? And who gets it, the sender, the receiver, or both? I drew the whole tree so the developers and I were building the same thing, and so the campaign wizard could expose only the choices that mattered at each step.

**The Shopify app.** Prosper rebuilt to fit Shopify's native cart and checkout, generating a unique discount code per customer to prevent fraud, listed publicly on the Shopify App Store. With it came a Zapier app so referral events could flow into any other tool, custom domains for the referral links, and a Docusaurus documentation site so a store could go from account to live campaign without talking to us.

**Pricing.** Two plans, Pro and Enterprise. Consumption-based: a monthly fee plus a per-referral charge, so a store only paid when it worked. More on why that was a mistake in [the Prosper post](/writing/designing-and-developing-prosper).

## Outcome

86 businesses signed up during the beta. Roughly a quarter of the discounts given out converted into a sale. Deployment went from a manual install by our team to a self-serve flow measured in minutes.

## Lesson

A product you have to install for people is a service. The dashboard turned Prosper into a product. The pricing page is where I should have spent another week.

## Images

<div class="gallery">
<figure><img src="/images/work/prosper-platform/dashboard-campaigns-figma.png" alt="Campaigns page, dark theme" loading="lazy" /><figcaption>Campaigns, 2023.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/dashboard-widgets-2023.png" alt="Widgets page, dark theme" loading="lazy" /><figcaption>Widgets, 2023.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/dashboard-campaigns-2023.png" alt="Campaign editor, dark theme" loading="lazy" /><figcaption>Campaign editor.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/dashboard-reports.jpg" alt="Reports page" loading="lazy" /><figcaption>Reports.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/dashboard-campaigns-2024.png" alt="Campaigns page, 2024 light version" loading="lazy" /><figcaption>Campaigns, 2024.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/dashboard-widget-wizard.png" alt="Widget creator with live preview" loading="lazy" /><figcaption>Widget creator.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/widget-sizing.png" alt="Widget sizing controls" loading="lazy" /><figcaption>Sizing and corners.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/widget-wizard-colors-modal.png" alt="Color step of the widget wizard" loading="lazy" /><figcaption>Colors step.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/reward-type-modal.png" alt="Choose a reward type" loading="lazy" /><figcaption>Reward type.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/rewards-architecture.png" alt="Rewards architecture diagram" loading="lazy" /><figcaption>The rewards engine, drawn for the developers.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/email-template.png" alt="Referral email template editor" loading="lazy" /><figcaption>Email template with variables.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/sms-template.png" alt="Referral SMS template editor" loading="lazy" /><figcaption>SMS template.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/shopify-app-store-listing.png" alt="Prosper on the Shopify App Store" loading="lazy" /><figcaption>Shopify App Store listing.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/zapier-app.png" alt="Prosper Zapier integration" loading="lazy" /><figcaption>Zapier app.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/custom-domain-setup.png" alt="Custom domain setup" loading="lazy" /><figcaption>Custom domains.</figcaption></figure>
<figure><img src="/images/work/prosper-platform/pricing-plans.png" alt="Pricing page" loading="lazy" /><figcaption>Pricing.</figcaption></figure>
</div>
