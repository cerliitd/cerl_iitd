# CERL — Combustion Engineering Research Laboratory, IIT Delhi

Static website for CERL, Department of Chemical Engineering, IIT Delhi.
Plain HTML and CSS. No build step, no npm, no backend.

## Files

```
index.html          Home — rotating hero photo, four research themes, team, publications, news
research.html        Four research directions, each with real figures
people.html          PI (full profile + photo), postdoc, PhD scholars, alumni
publications.html    123 entries: journal articles, conference papers, thesis
facilities.html      Five equipment entries, each with a photo or illustration
news.html            Dated updates
join.html            Openings and how to apply
contact.html         Office and lab address, phone, email, map
assets/css/style.css
assets/js/main.js
assets/img/iitd_logo.svg      official institute emblem
assets/img/cerl-mark.svg      lab logo
assets/img/people/            team photographs
assets/img/research/          figures from the group's publications
assets/img/facilities/        equipment photographs and two line illustrations
```

## Deploy on GitHub Pages

1. Upload every file, keeping the folder structure above.
2. Settings → Pages → Source: *Deploy from a branch*.
3. Branch `main`, folder `/ (root)`. Save.
4. Live in 1–2 minutes at `https://<username>.github.io/<repo>/`.

## What's still needed

This build has no visible "to add" markers on the live pages — everything
shown is real content. A few things are still worth doing when you have them:

- **Photos for Dr. Padole, the four PhD scholars, and the three alumni.**
  They currently show a generic grey silhouette. To add one, open
  `people.html`, find that person's `<div class="person-photo">`, and replace
  `<img src="assets/img/people/avatar-placeholder.svg" alt="">` with
  `<img src="assets/img/people/<filename>.jpg" alt="Name">`, after placing the
  file in `assets/img/people/`.
- **Degree and graduation year for the three alumni** (Aditya Khator, Sarthak
  Singh, Sourav Singh) — add as a line under each name in `people.html`.
- **DOI links on publications**, once convenient — wrap a title in
  `<a href="https://doi.org/...">Title</a>`.
- **Figure permissions.** Several research-page images are reproduced from
  the group's own published papers (Elsevier/Wiley/ACS). Reuse of one's own
  figures on a lab page is standard, but check each publisher's terms.
- **A general lab email address**, if one exists, alongside the lab address
  on the contact page.
- **Any sections you want back later** — a funded-projects list, a
  collaborators list, or equipment specs — were left out this round rather
  than shown empty. Add a new `<h2>` block wherever it fits when there's
  content for it.

## Editing

**Add a facility** — copy a `<div class="facility-item">` block in
`facilities.html` and fill in name, photo and description.

**Add a publication** — copy a `<div class="pub-item">` block in
`publications.html` under the right `<h2 class="pub-year-heading">`
(add a new one if the year isn't there), and renumber.

**Add news** — copy an `<li>` in `news.html`; newest goes at the top.

**Add a team member** — copy a `<div class="person-card">` block in the
right group in `people.html`.

## Design notes

- Type: Newsreader (headings) and Public Sans (body), from Google Fonts.
- Colours are CSS variables at the top of `style.css` (`--maroon`, `--ember`,
  `--ink`, `--paper`) — change them there and the whole site follows.
- The homepage hero cycles through three real photographs automatically
  (pure CSS, no JavaScript); this respects the "reduced motion" browser
  setting.
- Responsive down to phone width; navigation collapses to a menu button below
  680px.
