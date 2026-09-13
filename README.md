# CERL — Combustion Engineering Research Laboratory, IIT Delhi

Static website for CERL, Department of Chemical Engineering, IIT Delhi.
Plain HTML and CSS. No build step, no npm, no backend.

## Files

```
index.html          Home
research.html       Four research directions + methods
people.html         PI (full profile), postdoc, PhD scholars, alumni
publications.html   Numbered selected publications
facilities.html     Equipment and computational resources
news.html           Dated updates
join.html           Openings and how to apply
contact.html        Address, phone, email, map
assets/css/style.css
assets/js/main.js
assets/img/cerl-mark.svg      lab logo (editable SVG)
assets/img/people/            team photographs
assets/img/research/          figures and schematics
assets/img/facilities/        equipment photographs
```

## Deploy on GitHub Pages

1. Upload every file, keeping the folder structure above.
2. Settings → Pages → Source: *Deploy from a branch*.
3. Branch `main`, folder `/ (root)`. Save.
4. Live in 1–2 minutes at `https://<username>.github.io/<repo>/`.

## Before you publish

**Check figure permissions.** Four figures on the site come from published
papers (`assets/img/research/`). Most publishers allow authors to reuse their
own figures on a personal or lab page, but the terms differ between Elsevier,
Wiley and ACS. Confirm each one, and consider adding the source citation to
each caption.

**Add DOI links to publications.** The 123 entries are complete but not linked.
Wrap a title in an anchor to link it:

```html
<div class="pub-item-title"><a href="https://doi.org/10.1016/...">Title</a></div>
```

**Fill the facilities page.** It is the only page still entirely placeholder —
list only equipment the lab actually has.

## Editing

**Add team photographs later.** Person cards are currently text-only by
design. To add photographs, put the files in `assets/img/people/` and insert
this line as the first child of each `<div class="person-card">`:

```html
<div class="person-photo"><img src="assets/img/people/name.jpg" alt="Name"></div>
```

The card CSS already handles square cropping — nothing else needs changing.

**Add a figure to a research theme** — put the image in
`assets/img/research/` and replace the grey `<div class="theme-figure">` note
with:

```html
<figure class="theme-figure" style="margin:14px 0 0">
  <img src="assets/img/research/sru.jpg" alt="Describe the figure">
  <figcaption class="figcap">Caption text.</figcaption>
</figure>
```

Add `class="theme-figure tall"` instead if the figure is portrait.

**Add a team member** — copy a `<div class="person-card">` block in
`people.html` into the right `<div class="people-grid">` and edit it.

**Add a publication** — copy a `<div class="pub-item">` block in
`publications.html`, renumber the entries, and add a new
`<h2 class="pub-year-heading">` if the year is not there yet.

**Add news** — copy an `<li>` in `news.html`; newest goes at the top.

**Add a facility** — copy a `<div class="facility-item">` block in
`facilities.html`. Only list equipment the lab actually has.

## Editor notes on the live pages

Boxes styled like this appear on several pages:

> **To add:** funded projects and sponsors…

They are visible reminders of missing content, marked with the
`placeholder-note` class. Delete each one as you fill in that section, and make
sure none are left before the site is circulated widely.

## Design notes

- Type: Newsreader (headings) and Public Sans (body), loaded from Google Fonts.
- Colours are defined once as CSS variables at the top of `style.css`
  (`--maroon`, `--ember`, `--ink`, `--paper`). Change them there and the whole
  site follows.
- The lab mark is a plain SVG file you can open in a text editor or Illustrator.
- Responsive down to phone width; navigation collapses to a menu button below
  680px. Keyboard focus is visible and reduced-motion preferences are respected.
