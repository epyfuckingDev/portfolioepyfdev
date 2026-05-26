---
name: frontend
description: Design and implement polished frontend pages for landing pages, portfolios, and presentation websites. Use when creating a new site, redesigning an existing frontend, improving mobile experience, or raising the visual quality of a public-facing interface.
type: prompt
version: "1.0.0"
categories:
  - frontend
  - web
  - design
  - ui
  - ux
---

# Frontend

Build frontend experiences that are visually intentional, mobile-first, and ready to ship.

## When to use

Use this skill when the task involves any of the following:

- creating a new landing page, portfolio, or presentation website
- redesigning an existing frontend without changing its core business goal
- adapting a page for mobile users
- improving the visual finish, structure, and credibility of a public-facing interface

This skill is especially strong for:

- personal-brand websites
- startup landing pages
- portfolio sites
- simple institutional websites
- project showcase pages with clear calls to action

## Core outcome

When this skill is active, do both:

1. Define the experience clearly: structure, hierarchy, sections, copy direction, and visual system
2. Deliver production-ready frontend code unless the user explicitly asks for strategy only

## Technology decision rule

Default to the simplest stack that can deliver quickly without limiting the requested experience.

### Prefer plain HTML/CSS when:

- the site is mostly static
- the page count is small
- there is no need for dynamic forms
- there is no API integration
- there is no meaningful application state
- speed of delivery and simple deployment matter most

### Use Next.js when one or more of these are true:

- the project needs dynamic forms or richer client-side interactions
- the site has multiple pages with routing
- the frontend needs API integration
- the project benefits from reusable app structure, components, or server rendering

If the user suggests a stack, honor it unless there is a clear technical reason not to. If you choose differently, explain the reason briefly.

## Context to load first

Before designing or coding, read the local context that defines the brand and project:

- `_opensquad/_memory/company.md` for company, tone, projects, positioning, and current priority
- `_opensquad/_memory/preferences.md` for language and user preferences
- the current project files if the frontend already exists

If the task is for a specific squad, also read the squad files that define goals and constraints.

## Frontend workflow

Follow this sequence:

### 1. Clarify the actual job

Identify:

- what the page must achieve
- who it is for
- what the single most important action is
- what information must appear above the fold
- whether the page is static or needs application behavior

Do not start coding before this is clear from the user request or project context.

### 2. Shape the page before styling it

Create the content structure first. For most landing or portfolio work, think in this order:

1. Hero
2. Proof or positioning
3. About or value explanation
4. Projects, services, or featured work
5. CTA
6. Footer or contact close

Each section should have one clear job. Avoid sections that repeat the same message in different words.

### 3. Design with a clear point of view

Avoid generic layouts and safe defaults. Make the interface feel chosen, not auto-generated.

Always define:

- a clear typography direction
- a restrained but distinctive color system
- a spacing rhythm
- a visual motif such as cards, dividers, lines, gradients, texture, or shape language

Prefer strong composition over ornamental clutter.

### 4. Build mobile-first

Assume the primary audience will open the page on a phone unless the project clearly says otherwise.

Mobile requirements:

- headline remains readable without awkward line breaks
- CTA is visible and easy to tap
- spacing feels breathable but compact
- project cards stack cleanly
- no hover-only interactions
- no oversized decorative blocks that bury the content

### 5. Write copy that supports the interface

If copy is missing, draft concise UI copy that fits the layout and the user's tone.

For brand and portfolio pages:

- lead with clarity before cleverness
- keep the About section short and direct
- give each project a one-line explanation with a distinct angle
- use CTAs that sound human and actionable

### 6. Implement cleanly

Produce code that is easy to extend and deploy.

- keep markup semantic
- keep styles organized and readable
- avoid unnecessary libraries
- do not over-engineer components for small static pages
- preserve existing patterns when working inside an established codebase

## Visual quality rules

Always aim for these qualities:

- modern without looking trend-chasing
- minimal without feeling empty
- youthful without looking childish
- professional without becoming corporate and cold

Avoid:

- purple-on-white default aesthetics
- generic SaaS hero patterns when the brand is personal
- overcrowded gradients
- weak contrast
- giant paragraphs
- equal visual weight everywhere

## Personal brand and portfolio rules

For personal-brand sites, present the person as a credible operator, not just a list of hobbies.

Prioritize:

- a concise identity statement
- what they are building now
- why their work matters
- the current businesses or active projects
- one clear path to contact or collaborate

### If the brand is a portfolio hub with multiple ventures

Show the ecosystem clearly:

- keep the founder at the center
- present each project with its own role in the ecosystem
- avoid making the page feel like a random link directory
- use consistent card structure so the set feels curated

## Output format

Unless the user asks otherwise, your output should include:

1. A brief explanation of the chosen structure and stack
2. The implemented frontend code
3. Any asset or content assumptions you made
4. A quick mobile/responsiveness note

If editing an existing project, modify the files directly instead of returning only mockup ideas.

## Framework guidance

### For plain HTML/CSS builds

- keep everything simple and fast
- use semantic sections and accessible navigation
- use CSS variables for color and spacing
- keep the page self-contained if that speeds delivery

### For Next.js builds

- use the App Router if the project supports it
- keep the component structure shallow and understandable
- avoid premature abstraction
- prefer server-rendered static content unless interactivity is required

## Quality checklist

Before considering the frontend done, verify:

- the main CTA is obvious
- the first screen explains who or what the page is for
- the content hierarchy scans well on mobile
- typography and spacing look intentional
- each project/service block has a distinct purpose
- the implementation matches the chosen stack rationale
- the page feels shippable, not just presentable

## Examples

### Example 1

**Input:** Create the homepage for `epyfdev.com` for Epifanio Afonso, an Angolan entrepreneur with 4 active projects: FX Digital, LegalAO, `@dinheirodoangolan`, and Solucao Domestica. The page should be minimal, modern, and mobile-first, with just enough to show who he is and what he is building.

**Good outcome:** A focused personal-brand homepage with a strong hero, short About section, curated project cards, and a clear collaboration CTA. The founder stays at the center and the project list feels like one ecosystem, not a random directory.

### Example 2

**Input:** Create a landing page for FX Digital's social media management service. The goal is to generate leads through WhatsApp for business owners in Angola. Main CTA: "Fala connosco no WhatsApp".

**Good outcome:** A conversion-focused landing page with a clear offer, practical service benefits, strong CTA placement, and mobile-first structure tailored to local business owners. The page builds trust quickly and makes the WhatsApp action feel obvious.

### Example 3

**Input:** Redesign an existing frontend that already has the right content and goal, but looks generic and lacks personality.

**Good outcome:** Keep the same content and business objective, but improve hierarchy, typography, spacing, rhythm, and visual identity so the page feels deliberate, modern, and more convincing without becoming noisy.

## Error handling

If important information is missing:

- make a reasonable assumption when the risk is low
- state the assumption after implementing
- ask only when the missing detail could materially change the outcome

If the user asks for a flashy direction that weakens clarity or conversion, guide toward a stronger balance instead of blindly following the weaker option.
