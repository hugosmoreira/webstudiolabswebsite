# Web Studio Labs 2.0 — Rebrand and Website Implementation Plan

**Prepared:** October 29, 2026  
**Status:** Consolidated plan for review and implementation; website changes have not been made as part of preparing this document.  
**Website:** https://www.webstudiolabs.com  
**Repository:** https://github.com/hugosmoreira/webstudiolabswebsite  
**Stack:** React, Vite, and the existing CSS design system.  
**Source brief:** `C:\Users\monster\Downloads\web_studio_labs_website_rebrand_plan.md`

This plan combines the original rebrand brief, the October 28 website audit, and the subsequent review. It provides recommended implementation defaults. Business facts, project relationships, permissions, and service commitments marked for confirmation must be resolved before they are presented as facts on the public website.

## 1. Objective and scope

Reposition Web Studio Labs as an independent digital product studio that designs and builds useful software, mobile experiences, and websites for businesses, founders, and creators.

The website should answer four questions quickly:

1. What can I build with this studio?
2. What has the studio actually built?
3. How would we work together?
4. How do I start a conversation?

The business objective is to attract qualified project inquiries through clear positioning, real work, and a reliable contact experience. Success is not simply a more decorative homepage.

### Included in this phase

- Brand positioning, naming consistency, and public messaging.
- Homepage structure, copy, and visual refinement.
- Genuine project screenshots and accurate portfolio descriptions.
- Three clear service categories and a creator/community specialization.
- A concise studio introduction and development process.
- Contact-form improvements and verified submission behavior.
- Responsive navigation, accessibility, metadata, and performance checks.
- Real privacy and other applicable legal destinations.
- Select detail pages when sufficient verified content is available.

### Separate future initiatives

- Private studio HQ, CRM, and sales pipeline.
- GitHub synchronization or internal activity dashboards.
- Stripe integration, internal billing, and invoicing.
- Client authentication, document portals, support tickets, and account management.
- Rebuilding SUG, Voxian, or Housing Navigator.
- A new backend solely to display marketing content.
- **Web Studio Labs Security** — a productized AI-assisted security review service under the Labs brand. Launch only after real proof reports exist and cash flow supports the time; it is a service line of the studio, not a separate company or website.
- A build-in-public **YouTube channel** (1–2 videos per month documenting real studio and product work) — a marketing channel decision, not a website feature in this phase.

Implementation should use the existing repository. Deployment is a separate action requiring user authorization.

## 2. Brand positioning and audience hierarchy

### Recommended positioning

**Web Studio Labs — Independent Technology Studio**

**Capability line:** Custom Software · Platforms · Mobile Apps · Websites

**Positioning statement:**

> We turn business problems into working software, end to end — strategy, design, and engineering for businesses, founders, and creators.

Lead with end-to-end problem solving: one studio takes a business problem from the first conversation to a shipped product. Design strengthens that offer. AI is an applicable capability within projects, rather than the entire studio identity. Never describe the studio as an "agency" or an "AI automation agency."

### Umbrella structure (decided November 9, 2026)

Web Studio Labs is one company with two sides:

- **Studio** — client services: custom software, platforms, mobile apps, websites, and product design.
- **Labs** — studio-owned products: Voxian, Housing Navigator, and the planned **Web Studio Labs Security** (AI-assisted security reviews).

Every product is presented as "built by Web Studio Labs." The founder is the founder of one company; products belong to the studio rather than fragmenting the brand across separate ventures.

Use **Web Studio Labs** consistently in marketing. Retain the existing domain. Confirm the legal business name before placing a legal suffix such as “LLC” in policies or business details. Do not assume a legal name from the draft brief.

### Primary audience: businesses and founders

Serve buyers looking for custom software, SaaS products, internal systems, customer-facing platforms, marketplaces, portals, or integrated web/mobile experiences.

Their core question is: “Can you understand what I need and turn it into reliable working software?”

The homepage should make operational software buyers feel included even as the portfolio expands beyond dashboards and automation.

### Featured specialization: creators, experts, and communities

Potential clients include athletes, coaches, educators, event organizations, established creators, and personalities with an audience or a valuable body of knowledge.

Relevant projects include memberships, content libraries, training platforms, community experiences, event registration, and branded apps.

Present this as a focused specialization. The source brief does not establish a proven pipeline or completed work for every example. Validate demand through actual inquiries and engagements before making this the dominant brand identity.

### Studio-owned products

Voxian and Housing Navigator are identified as studio products in the source brief. Confirm ownership, the studio's role, and current availability before publishing those labels.

They demonstrate product-building experience without implying paid client engagements, commercial traction, or customer outcomes that have not been established.

## 3. Decisions incorporated from the review

| Topic | Recommended implementation decision |
|---|---|
| Hero language | Use a concrete software/apps/platforms headline. Keep the original “ambitious brands” headline as an optional alternative, not the default. |
| Portfolio repetition | Feature one real project in the hero. Give client work and studio products separate sections; do not repeat all three projects in every section. |
| Services | Use Custom Software & Platforms, Mobile Applications, and Product Design & Websites. Expand to Brand & Product Experiences only if branding services and relevant work are confirmed. |
| Creator positioning | Include one focused specialization section. Preserve broad relevance to business software buyers. |
| Pricing | Remove generic pricing packages and unsupported popularity labels. Retain useful scoping, budget, and timeline guidance when it can be supported. |
| Main CTA | Standardize on “Start a Project” and send it to the inquiry form. |
| Closing headline | Use “Tell us what you want to build.” |
| Mobile usability | Treat the clipped header/menu as a specific defect with explicit acceptance checks. |
| Public login/portal | Remove the nonfunctional Sign In link and unfinished client-portal promises from the marketing flow. |
| Scope | Preserve the React/Vite foundation; avoid adding operational software to this phase. |

## 4. Audit findings to address

These findings come from the earlier browser and source inspection. Recheck the current implementation before editing because the website may have changed since that inspection.

| Priority | Observed issue | Required response |
|---|---|---|
| Critical | At a 390px viewport, the header clipped the booking CTA and pushed the menu button off-screen. | Rebuild the narrow-screen header layout and test navigation at multiple widths. |
| High | “Sign in” linked to a portal illustration. | Remove it until a genuine login exists. |
| High | Booking CTAs linked to a general inquiry form without scheduling. | Use “Start a Project”; only advertise booking when a scheduling flow is connected. |
| High | Illustrative portfolio cards used precise, unsupported metrics. | Replace them with verified work and remove unsupported figures throughout the site. |
| High | Privacy and Terms linked to the contact section. | Add appropriate real destinations; never leave misleading placeholder links. |
| Medium | Numerous sections repeated similar claims; the page measured roughly 19,800px tall at the tested mobile size. | Consolidate the page and prioritize real work near the top. |
| Medium | Pricing cards provided no commercial guidance. | Explain scoping and provide verified ranges if available. |
| Medium | The live page head lacked canonical and social-sharing metadata. | Add canonical, Open Graph, and Twitter card metadata with a real preview image. |
| Medium | The mobile menu lacked expanded-state information; form status messages lacked explicit live announcements in the inspected source. | Improve menu semantics, keyboard operation, and accessible form feedback. |
| To measure | Performance, end-to-end form delivery, search indexing, and full accessibility were not verified. | Measure or test them; do not present unmeasured scores as results. |

The existing visual system, clear service descriptions, basic metadata, contact fields, and development-process explanation provide useful foundations.

## 5. Information architecture

### Main navigation

**Work | Services | Our Products | Studio | Start a Project**

For the first release, use working homepage anchors:

| Label | Destination |
|---|---|
| Logo | `#top` |
| Work | `#work` |
| Services | `#services` |
| Our Products | `#products` |
| Studio | `#studio` |
| Start a Project | `#contact` |

Do not expose navigation items whose sections or routes are missing.

### Homepage sequence

1. **Hero:** concrete offer, two CTAs, and one featured real project visual.
2. **Selected Client Work:** SUG as the lead client example, subject to confirmed role and publication permission.
3. **What We Build:** three concise service categories.
4. **Creator & Community Platforms:** one compact specialization section.
5. **Built in Our Studio:** Voxian and Housing Navigator, accurately labeled.
6. **Studio & Process:** a real introduction followed by Discover → Design → Build → Launch & Evolve.
7. **Start a Project:** short invitation, useful commercial context, inquiry form, and verified email.
8. **Footer:** business identity, useful links, and actual policy destinations.

Combining Studio with Process and the closing CTA with the form keeps the homepage shorter. Remove the standalone Problem, Solution, generic Use Cases, custom-vs-generic comparison, and unfinished Portal sections; retain only their useful ideas within the new copy.

### Detail pages after the first release

```text
/                            Home
/work                        Work overview, when there is enough material
/work/sug-world-tour          Approved client case study
/products                    Studio products, if detail exceeds the homepage
/services                    Capabilities overview
/services/creator-platforms   Creator/community specialization
/studio                      Expanded studio story
/contact                     Dedicated project inquiry, if needed
/privacy                     Actual privacy information
/terms                       Applicable terms, if used
```

Do not create thin duplicate pages solely to fill out this list. When routes are added, verify direct navigation, refresh behavior, appropriate not-found handling, and route-specific metadata on the actual hosting setup.

## 6. Recommended homepage copy

This is working copy for implementation, subject to verification of services and project facts. Do not publish internal status notes or unresolved assumptions as finished marketing content.

### Hero

**Eyebrow:** INDEPENDENT TECHNOLOGY STUDIO

**Headline:**

> Custom software, apps, and platforms built around your business.

**Supporting copy:**

> We turn business problems into working software, end to end — through strategy, design, and engineering.

**Primary CTA:** Start a Project → `#contact`  
**Secondary CTA:** Explore Our Work → `#work`

**Optional microcopy:** Independent studio · Working worldwide — only if accurate.

**Visual:** One strong screenshot composition from an approved project. Label the project and relationship. Use a real mobile interface only when it exists; identify concept or in-development work clearly.

The original headline, “We build the digital products behind ambitious brands,” remains a possible future variation. The recommended version prioritizes immediate clarity for software buyers.

### Selected Client Work

**Eyebrow:** SELECTED CLIENT WORK  
**Headline:** A closer look at what we build.

**SUG World Tour — draft description:**

> A digital home for a grappling organization, bringing its events, athlete information, and tournament content into one experience.

- Label: **Client Project**, after confirmation.
- Category: Sports & Events.
- Public website: https://www.sugworldtour.com
- State the studio's actual contribution: strategy, design, engineering, or ongoing work, as applicable.
- Confirm whether and how Professor Fabiano Scherner should be credited.
- Describe only verified live features. Label mobile work as in development if that is its actual status.
- CTA: **View Case Study** when a real page exists; otherwise **Visit SUG World Tour**.

If publication permission or the relationship cannot be confirmed, defer the client case study and use verified studio work to lead the page. Do not substitute fictional clients or imply an endorsement.

### What We Build

**Eyebrow:** CAPABILITIES  
**Headline:** From an idea to a working product.

**01 — Custom Software & Platforms**

> Web applications, SaaS products, dashboards, and business systems designed around the people who use them.

Examples may include operational tools, customer portals, marketplaces, memberships, integrations, and e-commerce, where these are services the studio actually offers.

**02 — Mobile Applications**

> Mobile experiences for businesses, communities, and digital products, connected to the systems behind them.

Confirm supported platforms and delivery capability before promising iOS, Android, or app-store launch services. Do not use device frames to imply that a website is an already released native app.

**03 — Product Design & Websites**

> Clear interfaces and websites that connect your brand, your product, and the people you want to reach.

Include product discovery, UI/UX, marketing websites, and cohesive digital experiences. Use **Brand & Product Experiences** instead only if identity strategy and identity-system work are confirmed services with credible examples.

AI features can appear within relevant project examples and service details. Avoid unsupported claims that AI is necessary for every project.

### Creator & Community Platforms

**Eyebrow:** FOR CREATORS, EXPERTS & COMMUNITIES  
**Headline:** Build something your audience can be part of.

> Turn your expertise, content, or community into a digital experience shaped around what you offer. We help plan and build memberships, learning platforms, event experiences, and branded applications.

Use a short set of examples rather than another large feature grid. Explain that custom development is appropriate when the experience needs more flexibility than existing tools provide; do not promise that everything must be built from scratch.

**CTA:** Discuss a Creator Platform → `#contact`, optionally preselecting the corresponding project category. Use **Explore Creator Platforms** only when a substantive detail page exists.

### Built in Our Studio

**Eyebrow:** STUDIO PRODUCTS  
**Headline:** We build our own ideas, too.

> Our own products give us firsthand experience taking ideas through design, development, and ongoing improvement.

**Voxian — draft description:**

> An AI-powered reading experience exploring ways to listen to and interact with written content.

- Website: https://voxian.ai
- Label: **Studio Product**, once confirmed.
- Verify available functionality and whether the product is live, beta, or in development.
- CTA: **Explore Voxian**, if the public destination is usable.

**Housing Navigator — draft description:**

> A housing discovery platform designed to make housing resources and affordable housing information easier to explore.

- Website: https://housingnavigator.us
- Label: **Studio Product**, once confirmed.
- Verify geographic coverage, resource freshness, and available features.
- Mention waitlist tracking only if that functionality is actually available.
- CTA: **Explore Housing Navigator**, if the public destination is usable.

Do not claim revenue, user counts, public impact, or operational scale without supporting evidence. The same two full product cards should not also appear in Selected Client Work.

### Studio & Process

**Eyebrow:** THE STUDIO  
**Headline:** One studio, from first idea to launch.

> We bring product thinking, design, and development into one conversation, with a clear scope and visible progress along the way.

Add a short factual founder/studio introduction. Confirm the founder's preferred public name, role, background, and image. Avoid invented team size, years of experience, credentials, or client history.

**Discover:** Understand your business, audience, goals, and constraints.  
**Design:** Define the product, user experience, and visual direction.  
**Build:** Develop, integrate, and test the agreed scope.  
**Launch & Evolve:** Release the product and agree on the next improvements and support needs.

Explain ongoing support only to the extent it is offered; do not imply unlimited maintenance is included.

### Start a Project

**Headline:** Tell us what you want to build.

> Share your idea, the problem you want to solve, and where you are in the process. We'll use those details to discuss the right next step.

**Form button:** Send Project Inquiry.

Include a monitored email address. Use `hello@webstudiolabs.com` only after confirming it is monitored. Publish a response-time promise only if it can consistently be met.

### Commercial context

Retain a short, useful explanation near the process or inquiry form:

> Every project begins with a defined scope. We agree on priorities, deliverables, and milestones before development starts.

If verified, add typical project ranges, timeframes, and what affects cost. Do not invent prices or timelines. Budget choices in a form are qualification options, not evidence of actual project pricing.

## 7. Portfolio evidence and asset checklist

| Item | Proposed use | Confirm before publication |
|---|---|---|
| SUG World Tour | Client work and possible hero visual | Client relationship, contribution, approved credit, permission, live features, mobile status. |
| Voxian | Studio product | Ownership/role, current availability, current features, public URL, screenshot accuracy. |
| Housing Navigator | Studio product | Ownership/role, current availability, geographic coverage, current features, screenshot accuracy. |
| Founder/studio introduction | Trust and human context | Public name, role, biography, photo, contact details. |
| Brand identity | Header, favicon, share image | Approved wordmark/logo treatment and consistent spelling. |
| Commercial guidance | Inquiry qualification | Actual service scope, ranges if any, support terms, realistic timeframes. |
| Business/policy details | Footer and privacy content | Legal identity, actual data handling, processors, monitored contact. |

For each project, record the capture date, source URL, relationship, role, status, allowed public material, and approved description. Public visibility does not by itself confirm portfolio permission or ownership.

### Required visuals

- One approved hero project visual.
- A clear SUG desktop screenshot and relevant detail shots, if approved.
- Actual Voxian interface screenshots.
- Actual Housing Navigator interface screenshots.
- Relevant narrow-screen screenshots where they strengthen the story.
- Approved logo/wordmark assets and favicon.
- One branded social-sharing image.
- Optional approved founder portrait.

Capture from real products or supplied approved assets. Exclude private account data and personal information. Do not generate imitation product interfaces and present them as screenshots.

Development placeholders must be visibly identified and removed or replaced before release. A missing asset should lead to a truthful reduced presentation, not an invented project.

### Case study structure

1. Project, relationship, status, and studio role.
2. The actual problem or brief.
3. What was delivered.
4. Real interface screenshots with useful captions.
5. Verified outcomes, if available; otherwise describe delivered capability without inventing performance claims.
6. Working project link and a relevant inquiry CTA.

## 8. Visual and interaction direction

Refine the existing navy/indigo visual identity and Geist typography. Use a few substantial project visuals, confident typography, and restrained decoration.

| Role | Directional color |
|---|---|
| Primary text / dark panels | Deep navy `#0F172A` |
| Main accent / CTA | Cobalt `#2563EB`, harmonized with existing indigo |
| Page background | Off-white `#F7F9FC` |
| Supporting text | Slate `#64748B`, subject to contrast checks |
| Cards and screenshot frames | White `#FFFFFF` |

These colors are starting points, not a request to replace every token. Check contrast in actual combinations and sizes.

### Layout rules

- Make the offer and primary CTA visible early on desktop and mobile.
- Favor actual product screenshots over decorative charts and metric widgets.
- Avoid a crowded three-product hero collage, especially on phones.
- Use consistent image proportions and reserve dimensions to prevent layout jumps.
- Keep paragraphs short and service examples selective.
- Use device frames only when they accurately represent the product.
- Avoid excessive section padding that recreates the current mobile page length.

### Mobile header requirements

- Keep the logo and menu button fully visible at narrow widths.
- Show a compact primary CTA only when it fits; otherwise place it prominently inside the menu.
- Prevent wrapped or clipped navigation controls.
- Give the menu toggle an accessible name, `aria-expanded`, and an associated menu target.
- Close the menu after navigation; support Escape and sensible focus behavior.
- Ensure sticky navigation does not hide anchor headings or focused controls.

### Accessibility and motion

- Provide semantic landmarks, one main H1, logical headings, and a skip link.
- Use descriptive links and appropriate screenshot alt text; hide purely decorative elements from assistive technology.
- Maintain readable text contrast and visible keyboard focus.
- Make navigation and forms usable without a mouse.
- Respect reduced-motion preferences, including scrolling and reveals.
- Ensure content remains available when animation fails or is disabled.
- Keep motion subtle and avoid unnecessary animation dependencies.

## 9. Contact and conversion requirements

Retain the existing Formspree implementation unless there is a concrete reason to change it. The inspected source sends a request to Formspree; the existing README's statement that no data is sent is stale and must be corrected during implementation.

### Form fields

| Field | Requirement |
|---|---|
| Name | Required |
| Email | Required; appropriate email input and validation |
| Company, brand, or public profile | Optional |
| Project category | Required; include “Not sure yet” |
| Project description | Required |
| Budget range | Optional; retain a guidance/unsure option |
| Target timeline | Optional |

Suggested categories: Custom Software, Mobile App, Product Design or Website, Creator or Community Platform, Not Sure Yet. If branding services are confirmed, adjust the design category accordingly.

### Behavior

- Validate useful fields without making the form unnecessarily demanding.
- Preserve entered data when a submission fails.
- Prevent duplicate submissions while a request is pending.
- Show an accurate success state only after a successful response.
- Announce success/error updates accessibly and manage focus when the form is replaced.
- Provide a usable email fallback.
- Verify spam protection available through the actual form configuration.
- Add a clear privacy link and accurate explanation of contact-data handling.
- Do not promise calendar booking or a response window that is not supported.

End-to-end delivery requires a clearly identified test submission to the actual configured endpoint and confirmation of receipt. A successful frontend response alone is not proof that an inbox received the lead. Arrange that test when implementation reaches verification; do not silently send production inquiries during planning.

## 10. Metadata, discoverability, and performance

### Suggested metadata

**Homepage title:** Web Studio Labs | Independent Technology Studio

**Description:** Web Studio Labs is an independent technology studio that turns business problems into working software — custom platforms, mobile apps, and digital products, end to end.

**H1:** Custom software, apps, and platforms built around your business.

### Implementation checklist

- Set a canonical URL consistent with the site's preferred production host and redirects.
- Add Open Graph and Twitter card title, description, URL, and preview image metadata.
- Use unique titles and descriptions for substantive detail pages.
- Confirm that social preview crawlers can receive the intended metadata.
- Check crawl directives and provide an appropriate sitemap for published pages.
- Evaluate whether prerendering is useful for the marketing pages; preserve the existing stack unless a real need justifies a change.
- Add structured data only when its contents accurately describe the business.
- Optimize screenshot formats, sizes, and responsive delivery.
- Lazy-load below-the-fold images and reserve image dimensions.
- Review the existing font-loading path and avoid unnecessary font weights.
- Measure production performance and accessibility; report actual results and their test conditions.
- Do not claim search rankings, indexing, or Core Web Vitals improvements without evidence.

No performance score or SEO ranking target is asserted by this plan.

## 11. Implementation phases and code map

### Phase 0 — Baseline and content readiness

- Read applicable repository instructions and inspect the current working tree.
- Preserve unrelated edits and existing project work.
- Check the current deployed site against the local source.
- Run baseline lint/build checks and distinguish pre-existing failures from new ones.
- Confirm the content/asset facts in Section 7.
- Choose one approved hero project and assemble the available screenshots.

**Output:** A verified content inventory, usable assets, baseline findings, and a short list of unresolved publication dependencies.

### Phase 1 — Integrity and mobile fixes

- Fix the header at narrow widths.
- Remove the nonfunctional Sign In and unfinished portal marketing.
- Replace booking wording with Start a Project.
- Remove unsupported portfolio numbers, fake dashboard metrics, and popularity claims.
- Remove generic industry labels used as implied proof.
- Replace placeholder footer links with real destinations or omit unavailable links.

**Output:** Honest navigation, working mobile controls, and no misleading public claims.

### Phase 2 — Homepage content and visual refactor

- Implement the section order and recommended copy in this document.
- Replace the Acme dashboard with an approved project showcase.
- Separate client work from studio products.
- Consolidate capabilities into three categories.
- Add the creator/community section.
- Combine Studio and Process; combine closing CTA and inquiry.
- Remove redundant homepage sections and unused imports.
- Preserve useful design tokens and UI primitives.

**Output:** A complete responsive homepage with real assets and a clear inquiry path.

### Phase 3 — Trust, contact, and metadata

- Add the verified studio introduction and commercial context.
- Finish form categories, validation, status feedback, privacy information, and spam controls.
- Create applicable policy pages from actual business practices and reviewed content.
- Update metadata, favicon, and social preview.
- Add an approved SUG case study or creator detail page only when the content is ready.
- Update the README to match the actual site and Formspree behavior.

**Output:** Reviewable production candidate with documented remaining blockers.

### Phase 4 — Verification and authorized release

- Run lint and production build.
- Test the production build in a browser at the required sizes.
- Check real assets, destinations, navigation, accessibility, and form behavior.
- Coordinate the production form delivery test and record receipt.
- Measure performance and resolve material regressions.
- Provide screenshots and a concise change/validation report.
- Deploy only when the user authorizes release; verify the live result afterward.

**Output:** Tested website, accurate validation notes, and a verified release if deployment is authorized.

### Component-level map

| File or area | Planned action |
|---|---|
| `src/App.jsx` | Compose the shorter homepage and remove unused section imports. |
| `src/components/Header.jsx` | Simplify nav, fix narrow layouts, and improve menu semantics/behavior. |
| `src/components/Hero.jsx` | Apply the new concrete headline, supporting copy, and CTAs. |
| `src/components/HeroDashboard.jsx` | Replace its use with a real-project showcase; retire unused illustrative UI. |
| `src/components/WorkSection.jsx` | Present verified client work with role, status, screenshots, and links. |
| `src/components/ServicesSection.jsx` | Consolidate to the three confirmed capability groups. |
| New `CreatorPlatformsSection.jsx` | Add a compact specialization section. |
| New `StudioProductsSection.jsx` | Present Voxian and Housing Navigator as confirmed studio products. |
| New or adapted studio/process components | Add a factual introduction and four-step process without duplicated copy. |
| `src/components/ContactSection.jsx` and `ContactForm.jsx` | Update inquiry copy/categories and improve accessible status handling. |
| `src/components/Footer.jsx` | Add verified destinations and consistent business identity. |
| `TrustBar.jsx`, `ClientPortalPreview.jsx`, `ComparisonSection.jsx`, `EngagementModels.jsx` | Remove from the public flow; retire code only when safe and unreferenced. |
| `ProblemSection.jsx`, `SolutionSection.jsx`, `UseCasesSection.jsx`, `CTASection.jsx` | Merge useful ideas into the new structure instead of retaining repetitive sections. |
| `src/styles/theme.css`, `src/styles/landing.css` | Refine existing tokens, layout, responsive behavior, contrast, and focus states. |
| `src/ui/Reveal.jsx` and shared UI | Retain only helpful, accessible behavior and avoid animation-dependent content. |
| `public/` | Add optimized approved screenshots, favicon, sharing assets, and relevant crawl files. |
| `index.html` | Update title, description, canonical, and share metadata. |
| `README.md` | Describe the new page structure and actual lead-submission behavior. |
| `src/portal/` and unrelated `video/` work | Keep outside this phase; do not expand or remove unrelated work. |

New component names are implementation suggestions. Preserve an existing component when adapting it produces a simpler result.

## 12. QA and acceptance criteria

### Content and credibility

- [ ] The first viewport explains what the studio builds and offers a clear next step.
- [ ] Client projects and studio products have accurate, visible relationship labels.
- [ ] Product status, geographic coverage, and delivered features are verified.
- [ ] Screenshots are real, current enough to represent the product, and approved for use.
- [ ] Unsupported customer names, results, revenue figures, user counts, testimonials, and popularity labels are removed.
- [ ] No in-development mobile app is presented as released.
- [ ] No nonfunctional Sign In or ready-client-portal promise remains.
- [ ] No development placeholders or internal approval notes appear in the published page.

### Responsive and accessible behavior

- [ ] Verify 320px, 375px, 390px, 768px, 1024px, and 1440px layouts.
- [ ] At narrow widths, logo/menu controls remain visible and usable; no clipped CTA or accidental horizontal scrolling occurs.
- [ ] Mobile menu opens/closes, reports its state, supports keyboard use, and closes appropriately after selection.
- [ ] Sticky navigation does not cover anchor headings or focused elements.
- [ ] Text resizing/zoom does not hide essential content or controls.
- [ ] Focus indicators, contrast, headings, labels, and image alternatives are checked.
- [ ] Reduced-motion preferences are respected and content does not remain invisible.
- [ ] Screenshots do not cause major layout shifts or unreadable page layouts.

### Conversion and technical behavior

- [ ] Every CTA, anchor, email link, project link, and policy link has a valid intended destination.
- [ ] “Book a Call” appears only if actual booking is available.
- [ ] Form required fields, pending state, success, failure, retry, and duplicate-submit protection work.
- [ ] Success/error feedback is accessible and input survives errors.
- [ ] A clearly identified delivery test is received through the actual production setup.
- [ ] Metadata and social previews describe the new positioning accurately.
- [ ] Any new route works when opened directly and refreshed.
- [ ] `npm run lint` and `npm run build` pass, or unresolved baseline issues are explicitly documented before release.
- [ ] Browser errors and material performance regressions are addressed.
- [ ] Policy content and published service commitments match actual business practices.
- [ ] No CRM, auth, billing, or unrelated product work has entered this phase.
- [ ] Deployment authorization and post-release checks are recorded when a release occurs.

Do not mark an item complete based solely on code inspection when it requires a live interaction, received email, permission, or measured result.

## 13. Delivery and success measurement

Implementation deliverables:

1. Updated source in the existing React/Vite project.
2. A responsive homepage with approved assets and truthful project descriptions.
3. Applicable policy/detail pages actually included in the release.
4. Updated metadata and a branded share image.
5. An itemized change summary, screenshots, and lint/build/manual QA results.
6. A concise list of remaining factual, asset, or permission dependencies.
7. Release details only if deployment is authorized and completed.

Evaluate the rebrand through the quality and relevance of inquiries, recurring questions from prospects, and which showcased work attracts interest. If suitable analytics already exist or are separately authorized, track inquiry starts, successful submissions, and project-link engagement without recording private form content.

Capture a baseline before comparing results. Avoid promising a conversion increase without evidence. Reassess creator-platform prominence after real inquiries show whether it is attracting the intended buyers.

## 14. Implementation handoff prompt

Use this prompt when the user is ready to authorize website implementation. Its inclusion in this planning document does not itself authorize code changes or deployment.

```text
Implement the Web Studio Labs rebrand in the existing React/Vite repository using
REBRAND_PLAN.md as the working plan.

Read applicable repository instructions and inspect the working tree first.
Preserve unrelated changes. Use the recommended copy and page hierarchy, adapting
details only where actual project facts or implementation constraints require it.

Prioritize:
1. Fix the clipped mobile header and make navigation accessible.
2. Remove misleading Sign In, unfinished portal promises, unsupported metrics,
   placeholder legal links, and booking language without real scheduling.
3. Replace the fictional hero dashboard with approved real project visuals.
4. Present SUG as client work only after confirming the role and publication rights.
   Present Voxian and Housing Navigator as studio products only after confirming
   ownership/role and availability. Keep all status and feature claims accurate.
5. Use three clear capabilities, a focused creator/community specialization,
   a factual studio introduction, and a concise four-step process.
6. Preserve and improve the Formspree inquiry flow, accessible feedback,
   privacy information, metadata, and existing visual system.
7. Run lint/build and meaningful browser checks against the acceptance criteria.
   Coordinate any production form test so it is identifiable and receipt can be
   confirmed. Report what was actually tested.

Do not invent facts, client permissions, screenshots, prices, timelines, or outcomes.
If material is unavailable, use a truthful reduced presentation and report the gap.
Do not add a CRM, client portal backend, authentication, billing, or unrelated work.
Do not replace the repository with a disconnected demo.

Deliver the updated site, changed-file summary, screenshots, validation results,
and unresolved publication dependencies. Do not deploy without user authorization.
```
